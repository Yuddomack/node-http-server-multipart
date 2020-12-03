const http = require("http");
const fs = require("fs");
const multipartParser = require("./utils/multipartParser");
const { route } = require("./routes");

fs.mkdirSync("./uploaded", { recursive: true });

const server = http.createServer((request, response) => {
  const { method, url } = request;
  let buffer = [];

  request
    .on("data", (chunk) => {
      buffer.push(chunk);
    })
    .on("end", () => {
      multipartParser(request, response, buffer);

      const action = route[method][url];
      action && action(request, response);
    });
});
server.listen(8082);

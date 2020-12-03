const fs = require("fs");
const router = require("./utils/router");

router.get("/", (req, res) => {
  const template = fs.readFileSync("./templates/index.html");
  res.writeHeader(200, { "Content-Type": "text/html" });
  res.write(template);
  res.end();
});

router.post("/upload", (req, res) => {
  const now = new Date().toISOString();

  req.files.forEach((f) =>
    fs.writeFileSync(`./uploaded/[${now}] ${f.filename}`, f.data, {
      encoding: "binary",
    })
  );

  res.writeHeader(200, { "Content-Type": "text/plain" });
  res.write("upload done"); // or something other response
  res.end();
});

module.exports = router;

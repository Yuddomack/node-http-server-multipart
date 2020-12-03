function multipartParser(req, res, buffer) {
  const rawData = Buffer.concat(buffer).toString("binary");

  // maybe you can parse to better than this
  const files = rawData
    .split(/------.*/)
    .filter((part) => !!~part.indexOf("form-data;"))
    .map((part) => {
      const [name, filename] = part
        .match(/"(.*?)"/g)
        .map((name) => name.replace(/\"/g, ""));
      const data = part
        .split("\r\n\r\n")
        .slice(1)
        .join("\r\n\r\n")
        .slice(0, -2);

      return { name, filename, data };
    })
    .filter((f) => f.data);

  req.files = files;
}

module.exports = multipartParser;

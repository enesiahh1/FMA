const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "teksti.txt");

  if (req.url === "/teksti.txt") {
    res.writeHead(200, {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": "attachment; filename=teksti.txt",
    });

    const fileStream = fs.createReadStream(filePath);

    fileStream.pipe(res);
  } else {
    res.write("Go to /teksti.txt");
    res.end();
  }
});

server.listen(1312);
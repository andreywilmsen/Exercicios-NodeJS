const http = require("http");
const url = require("url");
let fs = require("fs");

http
  .createServer((req, res) => {
    let path = url.parse(req.url).pathname;

    if (path == "" || path == "/") {
      path = "/index.html";
    }

    let fileName = "." + path;

    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
        res.end("<h1>Página não encontrada</h1>");
      } else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(3000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Servidor rodando na porta 3000");
    }
  });

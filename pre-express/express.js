const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.writeHead(200, {'content-type':'text/html'});
    const homePageHTML = fs.readFileSync("./home.html");
    res.write(homePageHTML);
    res.end();
  } else if (req.url === "/nodeImage") {
    res.writeHead(200, {"content-type": "image/png"});
    const image = fs.readFileSync("./node_express.png");
    res.write(image);
    res.end();
  } else {
    res.writeHead(404, {'content-type':'text/html'});
    res.write("<h1>sorry, page couldn't be found</h1>");
    res.end();
  }

});

server.listen(4000);
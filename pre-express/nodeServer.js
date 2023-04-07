const http = require("http");

const server = http.createServer((req, res) =>{
  console.log(req);
  res.writeHead(404, {'content-type':'text/html'})
  res.write("<h1> Hello world! </h1>");
  res.write("<p>the only one?? </p")
  res.end();
})

server.listen(4000);


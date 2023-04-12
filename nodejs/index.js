const http = require("http");

// console.log(http)

// console.log("Hello world")

const server = http.createServer((req, res) => {
//   console.log("Server is working");
    if(req.url === "about"){
        res.end("<h1>About Page</h>");
    }
});

server.listen(5000, () => {
  console.log("Server is working");
});

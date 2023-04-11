const http = require("http");

// console.log(http)

// console.log("Hello world")

const server = http.createServer(() => {
  console.log("Server is working");
});

server.listen(5000, () => {
  console.log("Server is working");
});

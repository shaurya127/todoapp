// function test() {
//   console.warn("hello bhiya");
// }
// test();

const http = require("http");
http
  .createServer(function (req, res) {
    res.write("hello from nodejs serce");
    res.end();
  })
  .listen(5000);

// importing the built-in HTTP package
const http = require("http");

// create our HTTP server object
const server =
  http.createServer((request, response) => {
    console.log(`Client connecting to: ${request.url}`);

    if (request.url === "/") {
      // if URL is for the homepage
      // write "Hello, world!" to the client
      response.write("Hello, world!");
      // end the response
      response.end();
    }
    else if (request.url === "/about") {
      response.write("My name is Nizar");
      response.end();
    }
    else {
      // else we show 404
      response.statusCode = 404;
      response.write("404 Page");
      response.end();
    }
  });

// start the server using port 3000
server.listen(3000);

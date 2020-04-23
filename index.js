// importing the request package so I can use it in this file
const express = require("express");

// creating a server
const app = express();

// define a port
const port = 4000;

// listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// define routes
app.get("/jokes", (request, response) => {
  console.log("we fot a request, yo");
  response.send("Hello");
});

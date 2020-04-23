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
app.get("/jokes/:age", (request, response) => {
  const age = parseInt(request.params.age);
  if (isNaN(age)) {
    response.send("You are drunk, or evil, go home");
  }

  console.log("we fot a request, yo");
  if (age > 18) {
    response.send("This app");
  } else {
    response.send(`
        <html>
            <style> 
                h1 {
                    color: #FABF00;
                }
            </style>
            <p>${age}</p>
            <h1>Q:How do you do make an Octopus laugh? A: With tentacles!</h1>
        <html>
    `);
  }
});

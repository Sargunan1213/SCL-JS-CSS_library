"use strict";

const express = require("express");

const app = express();
app.use(express.static(__dirname + "/pub"));

app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/sargu/Desktop/CSC309/js-library-gurumur2/pub/example.html"
  );
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  //   console.log(`Listening on port ${port}...`);
}); // localhost development port 5000  (http://localhost:5000)

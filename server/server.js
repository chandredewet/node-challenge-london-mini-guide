const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//require the JSON files in the data folder
const Harrow = require("./data/Harrow.json");
const Heathrow = require("./data/Heathrow.json");
const Stratford = require("./data/Stratford.json");

//routes
app.get("/", (request, response) => {
  response.send({
    SupportedRoutes: ["/Harrow", "/Heathrow", "/Stratford"],
    Version: "0.0.0.1",
    Author: "cdewet",
  });
});

app.get("/Heathrow", (request, response) => {
  response.send(Heathrow);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

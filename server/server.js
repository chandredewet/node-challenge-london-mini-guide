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
    Author: "cdewet & mmatanda",
  });
});

app.get("/Heathrow", (request, response) => {
  response.send(Heathrow);
});

app.get("/Heathrow/pharmacies", (request, response) => {
  response.send(Heathrow.pharmacies);
});

app.get("/Heathrow/colleges", (request, response) => {
  response.send(Heathrow.colleges);
});

app.get("/Heathrow/colleges", (request, response) => {
  response.send(Heathrow.colleges);
});

app.get("/Heathrow/doctors", (request, response) => {
  response.send(Heathrow.doctors);
});


app.get("/Heathrow/hospitals", (request, response) => {
  response.send(Heathrow.hospitals);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

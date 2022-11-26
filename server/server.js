const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//require the JSON files in the data folder
const Harrow = require("./data/Harrow.json");
const Heathrow = require("./data/Heathrow.json");
const Stratford = require("./data/Stratford.json");

function getCity(city) {
  switch (city.toUpperCase()) {
    case "HARROW":
      return Harrow;
    case "HEATHROW":
      return Heathrow;
    case "STRATFORD":
      return Stratford;
    default:
      return null;
  }
}

//routes
app.get("/", (request, response) => {
  response.send({
    SupportedRoutes: ["/Harrow", "/Heathrow", "/Stratford"],
    Version: "0.0.0.1",
    Author: "cdewet & mmatanda",
  });
});

// app.get("/Heathrow", (request, response) => {
//   response.send(Heathrow);
// });

// app.get("/Heathrow/pharmacies", (request, response) => {
//   response.send(Heathrow.pharmacies);
// });
// app.get("/Heathrow/colleges", (request, response) => {
//   response.send(Heathrow.colleges);
// });
// app.get("/Heathrow/doctors", (request, response) => {
//   response.send(Heathrow.doctors);
// });
// app.get("/Heathrow/hospitals", (request, response) => {
//   response.send(Heathrow.hospitals);
// });

//level 300
// app.get("/:city/pharmacies", (request, response) => {
//   let city = request.params.city;
//   let cityCheck = getCity(city);
//   if (cityCheck) {
//     response.send(cityCheck.pharmacies);
//   } else {
//     response.status(404).send(`Error: Invalid City`);
//   }
// });

//level 500
app.get("/:city/:category", (request, response) => {
  let city = request.params.city;

  let category = request.params.category.toLowerCase();

  let cityCheck = getCity(city);

  if (cityCheck) {
    console.log(cityCheck);
    if (category) {
      response.send(cityCheck[category]);
    } else {
      response.status(404).send(`Error with category request`);
    }
  } else {
    response.status(404).send(`Error with city request`);
  }
});

// app.get("/:city/hospitals", (request, response) => {
//   let city = request.params.city;
//   let cityCheck = getCity(city);
//   if (cityCheck) {
//     response.send(cityCheck.hospitals);
//   } else {
//     response.status(404).send(`Error: Invalid City`);
//   }
// });

// app.get("/:city/doctors", (request, response) => {
//   let city = request.params.city;
//   let cityCheck = getCity(city);
//   if (cityCheck) {
//     response.send(cityCheck.doctors);
//   } else {
//     response.status(404).send(`Error: Invalid City`);
//   }
// });

// app.get("/:city/colleges", (request, response) => {
//   let city = request.params.city;
//   let cityCheck = getCity(city);
//   if (cityCheck) {
//     response.send(cityCheck.colleges);
//   } else {
//     response.status(404).send(`Error: Invalid City`);
//   }
// });

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

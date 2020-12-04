const express = require("express");
require("dotenv").config();

// init app
const app = express();

//Middlewares
app.use(express.static("public"));

//routers
const homeRoute = require("./router/home");

app.use("/", homeRoute);

app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log(`there is an error \n ${err}`);

  console.log("server listening on port ", process.env.PORT);
});

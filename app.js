const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const appRoute = require("./src/routes/employee-routes");
app.use("/", appRoute);

app.listen(8080, () => {
  console.log("Server is running at port 8080");
});

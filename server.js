var express = require("express");

var routes = require("./routes/htmlroutes");

var mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
routes(app);

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

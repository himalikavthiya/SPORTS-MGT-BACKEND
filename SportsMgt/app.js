const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { connectDB } = require("./src/db/db.connection");
const routes = require("./src/routes/v1")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**frantend error handle useing cors */
app.use(cors());
app.options("*", cors());

app.use(express.static(path.join(__dirname, `./src/public`)));

app.use("/v1", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

/*Database connection*/
connectDB();


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

module.exports = app;

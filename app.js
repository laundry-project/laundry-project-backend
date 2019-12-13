var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var servicesRouter = require("./routes/services");
var orderRouter = require("./routes/orders");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/services", servicesRouter);
app.use("/orders", orderRouter);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//error handler
app.use(function(err, req, res, next) {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  //send the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;

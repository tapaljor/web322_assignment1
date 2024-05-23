var HTTP_PORT = process.env.PORT || 3000;
var express = require("express");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//actual running of server and listening to event like req and res
app.listen(HTTP_PORT, () => {
  console.log(`Listening to port ${HTTP_PORT}`);
});

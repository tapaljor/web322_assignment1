var HTTP_PORT = env.PORT || 3000;
var express = require("express");

var app = express();

app.listen(HTTP_PORT, () => {
  console.log(`Listening to port ${HTTP_PORT}`);
});

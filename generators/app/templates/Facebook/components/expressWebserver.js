const express = require('express');
const bodyParser = require('body-parser');

module.exports = function(controller, bot) {

  let webserver = express();
  let expressMiddlewarePath = require("path").join(__dirname, "expressMiddleware");
  let routesPath = require("path").join(__dirname, "routes");

  webserver.use(bodyParser.json());
  webserver.use(bodyParser.urlencoded({ extended: true }));
  webserver.use(express.static('public'));

  // TODO enable it
  /*
  require("fs").readdirSync(expressMiddlewarePath).forEach(function(file) {
    require("./expressMiddleware/" + file)(webserver, controller);
  });
  */

  require("fs").readdirSync(routesPath).forEach(function(file) {
    require("./routes/" + file)(webserver, controller);
  });

  webserver.listen(process.env.PORT || 3000, null, function() {
    console.log('Express webserver configured and listening at http://localhost:' + process.env.PORT || 3000);
  });

  controller.webserver = webserver;

  return webserver;
};

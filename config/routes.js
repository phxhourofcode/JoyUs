var path = require('path');

module.exports = function(app, passport, auth) {

  //Home route
  var index = require(path.join(PATHS.controllers, 'index'));
  app.get('/', index.render);

};
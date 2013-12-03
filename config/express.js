var express  = require('express');
var path     = require('path');

module.exports = function(app, passport, db) {

  // Prettify HTML
  app.locals.pretty = true;

  // Set static folder
  app.use(express.static(path.join(PATHS.root, 'public')));

  // Parse the Freaking JSON
  app.use(express.bodyParser());

  //Set views path, template engine and default layout
  app.set('views', PATHS.views);
  app.set('view engine', 'jade');

}
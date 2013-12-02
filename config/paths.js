var path = require('path');

// set up global vars for important paths

var root = path.resolve(__dirname, '..');
var app  = path.join(root, 'app');

global.PATHS = {
  root:         root,
  app:          app,
  lib:          path.join(app, 'lib'),
  models:       path.join(app, 'models'),
  views:        path.join(app, 'views'),
  controllers:  path.join(app, 'controllers'),
  config:       path.join(root, 'config')
};
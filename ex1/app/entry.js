'use strict';
 const angular = require('angular');
 const camelcase = require('camelcase');
 const pascalcase = require('pascalcase');
 const uiRouter = require('angular-ui-router');
 const uiBootstrap = require('angular-ui-bootstrap');
 const angularDemo = angular.module('angularDemo', [uiRouter, uiBootstrap]);

let context = require.context('./component', true, /\.js$/)
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  angularDemo.component(name,module);
});

context = require.context('./service', true, /\.js$/)
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  angularDemo.service(name,module);
});

context = require.context('./view', true, /\.js$/)
context.keys().forEach(key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  angularDemo.controller(name,module);
});

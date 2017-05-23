'use strict';
require('./scss/main.scss');


const angular = require('angular');
const cowsay = require('cowsay-browser');
const uiBootstrap = require('angular-ui-bootstrap');
const cowsayApp = angular.module('cowsayApp',[uiBootstrap]);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope){
  $log.debug('#');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Welcome to cowsay'

  cowsayCtrl.speak = function(input){
    $log.debug('speak')
    return cowsay.say({text: input || 'blah', f:'dragon'})
  }

  cowsayCtrl.logger = function(input){
    $log.log(input)
  }
}

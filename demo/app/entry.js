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
  cowsayCtrl.history = []
  cowsayCtrl.currentText = ''
  cowsayCtrl.sayText = '';

  cowsayCtrl.title = 'Welcome to cowsay'

  cowsayCtrl.speak = function(input){
    $log.debug('speak')
    cowsayCtrl.sayText = input;
    return cowsay.say({text: input || 'blah', f:'dragon'})
  }

  cowsayCtrl.logger = function(input){
    $log.log(input)
  }

  cowsayCtrl.save = function(){
    cowsayCtrl.history.push(cowsayCtrl.sayText);
    cowsayCtrl.currentText = cowsayCtrl.history[cowsayCtrl.history.length - 1];
    return cowsayCtrl.wat();
  }

  cowsayCtrl.undo = function(){
    cowsayCtrl.history.pop();
    cowsayCtrl.speak(cowsayCtrl.history[cowsayCtrl.history.length - 1]);
    return cowsayCtrl.wat();
  }

  cowsayCtrl.wat = function(){
    return cowsay.say({text: cowsayCtrl.currentText, f: 'cow'})
  }
}

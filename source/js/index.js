var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $; // Marionette Browserify Fix

var App = require("./app");

$(document).on('ready', function(){
  App.start();
});

module.exports = App;
'use strict';

var angular = require('angular');
var uiRouter = require('angular-ui-router');
var ngMessages = require('angular-messages');


var app = angular.module('app', [uiRouter, ngMessages]);

require('./routes')(app);
require('./controllers/index')(app);
require('./services/wizard-service')(app);
require('./directives/custom-validator')(app);
require('./components/index')(app);
'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const ngMessages = require('angular-messages');
const ngAnimate = require('angular-animate');


const app = angular.module('app', [uiRouter, ngMessages, ngAnimate]);

// require('./routes')(app);
require('./controllers/index')(app);
require('./services/wizard-service')(app);
require('./directives/index')(app);
require('./components/index')(app);
'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const ngMessages = require('angular-messages');

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}


const app = angular.module('app', [uiRouter, ngMessages]);

require('./routes')(app);
require('./controllers/index')(app);
require('./services/wizard-service')(app);
require('./directives/custom-validator')(app);
require('./components/index')(app);
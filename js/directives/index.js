'use strict';

module.exports = function(app) {
    require('./custom-validator')(app);
    // require('./fix-position-absolute')(app);
}
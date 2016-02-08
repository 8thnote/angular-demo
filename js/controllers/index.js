'use strict';

module.exports = function(app) {
    require('./main-ctrl')(app);
    require('./step1-ctrl')(app);
    require('./step2-ctrl')(app);
}
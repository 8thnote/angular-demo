'use strict';

module.exports = function(app) {
    require('./main-ctrl')(app);
    require('./bwr-app1-ctrl')(app);
    require('./bwr-app2-ctrl')(app);
}
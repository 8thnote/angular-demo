'use strict';

module.exports = function(app) {
    
    if (ON_TEST) {
        require('./kcd-hello.test')
    }
    
    //refactor to component
    app.directive('formButtons', function() {
    	return {
    		restrict: 'AE',
    		scope: {
    			currentForm: '=',
    			forwardCb: '&',
    			backwardCb: '&',
    			currentStep: '=',
    			totalSteps: '='
    		},
    		template: require('./form-buttons-tmpl.html')
    	}	
    });
    
}
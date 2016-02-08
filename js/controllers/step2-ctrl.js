'use strict';

module.exports = function(app) {
    
    app.controller('Step2Ctrl', function(WizardService) {
    	var vm = this;
    	
    	vm.data = WizardService.data;
    	
    	if (WizardService.data && WizardService.data.saveDataPromise) {
    		WizardService.data.saveDataPromise.then(function() {
    			vm.result = 'Got the result';
    		});
    	}
    });
    
}
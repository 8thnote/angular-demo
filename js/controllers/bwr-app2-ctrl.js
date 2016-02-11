'use strict';

module.exports = function(app) {
    
    app.controller('BwrApp2Ctrl', function(WizardService) {
    	var vm = this;
    	
    	vm.data = WizardService.data;
    	
    	if (WizardService.data && WizardService.data.saveDataPromise) {
    		WizardService.data.saveDataPromise.then(function() {
    			vm.result = '5.6%';
    		});
    	}

        vm.endDemo = function() {
            alert('This concludes the demo');
        };
    });
    
}
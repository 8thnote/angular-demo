'use strict';

module.exports = function(app) {
    
    app.controller('BwrApp1Ctrl', function(WizardService, $location) {
    	var vm = this;
    	
    	vm.data = WizardService.data;
    	vm.cbl1 = WizardService.data.form;
    	
    	vm.fillStep1 = function() {
    		if (vm.data.appStep === 1) {
    			vm.cbl1.fName = "Your First";
    			vm.cbl1.lName = "Your Last";
    			vm.cbl1.email = "your@email.com";
    			vm.cbl1.passphrase = "areyouwantingtosavetime?orareyouLazy?";
    			vm.cbl1.demoCheck = true;
    		}
    		else if (vm.data.appStep === 2) {
    			vm.cbl1.another1 = "another";
    			vm.cbl1.another2 = "and another";
    		}
    	};
    	
    	vm.stepBackward = WizardService.stepBackward;
    	
    	vm.stepForward = function() {
    		if (vm.data.appStep === 2) {
    			WizardService.saveData();
    			$location.path('/bwr-app2');
    		} else {
    			WizardService.stepForward();
    		}
    	}
    });
    
}
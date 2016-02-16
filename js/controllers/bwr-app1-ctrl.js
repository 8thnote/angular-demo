'use strict';

module.exports = function(app) {
    
    app.controller('BwrApp1Ctrl', function(WizardService, $window) {
    	var vm = this;
    	
    	vm.data = WizardService.data;
    	vm.cbl1 = WizardService.data.form;
    	
    	vm.fillStep1 = function() {
    		vm.cbl1 = {
    			fName: "Your First",
    			lName: "Your Last",
                street: "Your Street",
                city: "Your City",
                state: "AL",
                zip: "12345",
                month: "01",
                day: "01",
                year: "1985",
                ssn: "123567890",
                income: "100000",
    			email: "your@email.com",
    			passphrase: "yourPassphraseLalalalala",
    			terms: true,
                creditAuth: true
    		};
    	};
    	
    	vm.stepBackward = WizardService.stepBackward;
    	
    	vm.stepForward = function() {
            //this should correspond to the number of steps in the app1 wizard
    		if (vm.data.appStep === 1) {
    			WizardService.saveData();
    			// $location.path('/bwr-app2.html');
                // make sure to inject $location
                $window.location.href = '/bwr-app2.html';
    		} else {
    			WizardService.stepForward();
    		}
    	}
    });
    
}
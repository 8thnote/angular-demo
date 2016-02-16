'use strict';

module.exports = function(app) {

    app.service('WizardService', function($http, $location, $q, $timeout) {
    	var data = {
    		form: {
    			fName: "",
    			lName: "",
    			street: "",
                city: "",
                state: "",
                zip: "",
                month: "",
                day: "",
                year: "",
                ssn: "",
                income: "",
                email: "",
                passphrase: "",
                terms: false,
                creditAuth: false
    		},
    		appStep: 1,
    		saveDataPromise: null
    	};
    	
    	function stepBackward() {
    		data.appStep -= (data.appStep > 1 ? 1 : 0);
    	}
    	
    	function stepForward() {
    		data.appStep += (data.appStep < 2 ? 1 : 0);
    	}
    	
    	function saveData() {
    		var promise;
    		
    		// Mocking the promise
    		var deferred = $q.defer();
    
    		// $http.post('/', data.form).then(function(response) {
    		// 	deferred.resolve(response);
    		// })
    		
    		$timeout(function() {
    			deferred.resolve(data.form);
    		}, 4000);
    		
    		promise = deferred.promise;
    		
    		
    		// Using $http
    		// promise = $http.post('/', data.form);
    		
    		data.saveDataPromise = promise;
    		return promise;
    	}
    	
    	return {
    		data: data,
    		stepForward: stepForward,
    		stepBackward: stepBackward,
    		saveData: saveData
    	};
    });

}
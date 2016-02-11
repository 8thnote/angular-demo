'use strict';

module.exports = function(app) {

    app.service('WizardService', function($http, $location, $q, $timeout) {
    	var data = {
    		form: {
    			fName: "",
    			lName: "",
    			email: "",
    			passphrase: "",
    			demoCheck: "",
    			another1: "",
    			another2: "",
    			priceSlider: 150
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
    		
    		// Method 1: Mocking up the promise
    		var deferred = $q.defer();
    
    		// $http.post('/', data.form).then(function(response) {
    		// 	deferred.resolve(response);
    		// })
    		
    		$timeout(function() {
    			deferred.resolve(data.form);
    		}, 4000);
    		
    		promise = deferred.promise;
    		
    		
    		// Method 2: Using $http
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
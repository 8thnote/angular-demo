/*global angular*/
'use strict';
	
angular.module('app', ['ngMessages', 'ui.router', 'rzModule']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /step1
  $urlRouterProvider.otherwise('/step1');
  
  $stateProvider
	  .state('step1', {
	    url: "/step1",
	    templateUrl: "step1-pt0.html",
	    controller: 'FirstStepsCtrl as vm'
	  })
	  .state('step2', {
	    url: "/step2",
	    templateUrl: "step2.html",
	    controller: 'Step2Ctrl as vm'
	  });
});
	
angular.module('app').controller('MainCtrl', function mainCtrl() {
	var vm = this;
});

angular.module('app').controller('FirstStepsCtrl', function(WizardService, $location) {
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
			$location.path('/step2');
		} else {
			WizardService.stepForward();
		}
	}
});

angular.module('app').controller('Step2Ctrl', function(WizardService) {
	var vm = this;
	
	vm.data = WizardService.data;
	
	if (WizardService.data && WizardService.data.saveDataPromise) {
		WizardService.data.saveDataPromise.then(function() {
			vm.result = 'Got the result';
		});
	}
});

angular.module('app').service('WizardService', function($http, $location, $q, $timeout) {
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
		}, 2000);
		
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

angular.module('app').directive('formButtons', function() {
	return {
		restrict: 'AE',
		scope: {
			currentForm: '=',
			forwardCb: '&',
			backwardCb: '&',
			currentStep: '=',
			totalSteps: '='
		},
		templateUrl: 'buttons.html'
	}	
});
module.exports = function(app) {
    
    app.config(function($stateProvider, $urlRouterProvider) {
    
      // For any unmatched url, redirect to /step1
      $urlRouterProvider.otherwise('/step1');
      
      $stateProvider
    	  .state('step1', {
    	    url: "/step1",
    	    templateUrl: "step1-pt0.html",
    	    controller: 'Step1Ctrl as vm'
    	  })
    	  .state('step2', {
    	    url: "/step2",
    	    templateUrl: "step2.html",
    	    controller: 'Step2Ctrl as vm'
    	  });
    });
    
}
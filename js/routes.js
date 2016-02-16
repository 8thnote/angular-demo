'use strict';

module.exports = function(app) {
    
    app.config(function($stateProvider, $urlRouterProvider) {
    
      // For any unmatched url, redirect to /step1
      $urlRouterProvider.otherwise('/bwr-app1');
      
      // $stateProvider
    	 //  .state('bwr-app1', {
    	 //    url: "/bwr-app1",
    	 //    templateUrl: "bwr-app1.html",
    	 //    controller: 'BwrApp1Ctrl as vm'
    	 //  })
    	 //  .state('bwr-app2', {
    	 //    url: "/bwr-app2",
    	 //    templateUrl: "bwr-app2.html",
    	 //    controller: 'BwrApp2Ctrl as vm'
    	 //  });
    });
    
}
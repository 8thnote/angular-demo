'use strict';

module.exports = function(app) {
	
	app.directive("fixPositionAbsolute", ["$document", "$window", function($document, $window) {
		return {
			restrict: "A",
			link: function($scope, element) {
				// Flag to determine if the directive has loaded before
				var hasLoaded;
				// DOM representation of the Angular element
				var domElement = element[0];
				$scope.$on("$stateChangeSuccess", function() {
					// Get the computed height of the ui-view and assign it to the directive element
					domElement.style.height = $window.getComputedStyle($document[0].querySelector("[ui-view]")).height;
					// After the first height change, add a class to enable animations from now on
					if(!hasLoaded) {
						domElement.classList.add("auto-height");
						hasLoaded = true;
					}
				});
			}
		};
	}]);

}
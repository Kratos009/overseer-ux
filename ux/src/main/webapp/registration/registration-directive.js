(function() {
	angular.module('overseer.registration.directive', [ 'overseer.registration.constants' ])
			.directive('registerUserView',
					[ 'registration.urlConfiguration', function(urlConfiguration) {
						return {
							restrict : 'AE',
							scope : {},
							templateUrl : urlConfiguration.viewTemplate,
							controller : 'registrationController'
						}
					} ])
})();
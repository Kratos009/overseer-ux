(function() {
	angular.module('overseer.login.directive', [ 'overseer.login.constants' ])
			.directive('loginView',
					[ 'login.urlConfiguration', function(urlConfiguration) {
						return {
							restrict : 'AE',
							scope : {},
							templateUrl : urlConfiguration.viewTemplate,
							controller : 'loginController'
						}
					} ])
})();
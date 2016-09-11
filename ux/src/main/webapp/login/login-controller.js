(function() {
	angular.module(
			'overseer.login.controller',
			['overseer.login.service', 'overseer.login.constants',
					'overseer.login.factory', 'ngMaterial']).controller(
			'loginController',
			[
					'$scope',
					'loginService',
					'login.contentConfiguration',
					'login.authenticateUserResponseFactory',
					function($scope, loginService, contentConfiguration,
							authenticateUserResponseFactory) {
						$scope.user = {
							username : null,
							password : null,
							rememberMe: "NO"
						};

					}])
})();
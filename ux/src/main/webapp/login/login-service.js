(function() {
	angular.module('overseer.login.service',
			['overseer.login.constants', 'overseer.login.factory']).service(
			'loginService',
			[
					'login.urlConfiguration',
					'login.authenticateUserRequestFactory',
					function(urlConfiguration, authenticateUserRequestFactory) {
						this.authenticateUser = function(username, password) {
							return $http.post(
									urlConfiguration.authenticateUser,
									authenticateUserRequestFactory(username,
											password));
						}

					}]);
})();
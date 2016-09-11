(function() {
	angular.module('overseer.login.factory', []).factory(
			'login.authenticateUserRequestFactory', function() {
				function AuthenticateUserRequest(username, password) {
					this.username = username;
					this.password = password;
				}
				return function(username, password) {
					return new AuthenticateUserRequest(username, password);
				}
			}).factory('login.authenticateUserResponseFactory', function() {
		function AuthenticateUserResponse() {

		}
		return new AuthenticateUserResponse();
	});
})();
(function() {
	angular.module('overseer.constants', []).constant('urlConfiguration', {
		successUrl : '',
		failureUrl : '',
		loginUrl : '',
		logoutUrl : ''
	}).constant('responseCodes', {
		success : 0,
		failure : -1,
		switchToLogin: 1000,
		switchToRegistration : 1001,
		goToLogoutUrl : 2000
	})
})();
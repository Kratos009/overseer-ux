(function() {
	angular.module('overseer.registration.factory', [])
	.factory('registration.registerUserRequestFactory', function(){
		function RegisterUserRequest(firstName, lastName, middleName, phoneNumber, emailAddress, country, state, city){
			this.firstName = firstName;
			this.lastName = lastName;
			this.middleName = middleName;
			this.phoneNumber = phoneNumber;
			this.emailAddress = emailAddress;
			this.country = country;
			this.state = state;
			this.city = city;
		}
		return function(firstName, lastName, middleName, phoneNumber, emailAddress, country, state, city){
			return new RegisterUserRequest(firstName, lastName, middleName, phoneNumber, emailAddress, country, state, city);
		}
	});
})();
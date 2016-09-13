(function(){
	angular.module('overseer.registration.controller',['overseer.registration.constants'
	                                                   ,'overseer.registration.service'
	                                                   ,'overseer.registration.factory','ngMaterial'])
   .controller('registrationController',['$scope','$log','registrationService','registration.contentConfiguration'
                                         ,'registerUserResponseFactory', function($scope, $log, registrationService
                                        		 , contentConfiguration, registerUserResponseFactory){
	   
   }])
})();
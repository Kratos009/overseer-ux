(function(){
	angular.module('overseer.controller',['overseer.constants'])
	
	.controller('overseerController',['$scope', '$log' ,'urlConfiguration', 'responseCodes',
	                                  function($scope, $log, urlConfiguration, responseCodes){
		$scope.templateCodes = (function(){
			var result = [];
			for(var responseCodeKey in responseCodes) {result.push(responseCodes[responseCodeKey]);}
			return result;
		})();
		
		$scope.templateCodeLookup = {};
		$scope.templateCodeLookup[responseCodes.switchToLogin] = 'LOGIN';
		$scope.templateCodeLookup[responseCodes.switchToRegistration]  = 'REGISTRATION';
		
		$scope.eventHandler = function(event, args){
			$log.debug('Event: '+ event.name + ' received by overseer event handler with message: '
					+ JSON.stringify(args));
			if($scope.templateCodes.indexOf(args.code) !== -1) {
				$scope.templateState = $scope.templateCodeLookup[args.code];
				return;
			}
		};
		
		$scope.$onRootScope('overseer.login', $scope.eventHandler);
		$scope.$onRootScope('overseer.registration', $scope.eventHandler);
		$scope.templateState = $scope.templateCodeLookup[Overseer.responseCode];
		
	}]);
	
})();
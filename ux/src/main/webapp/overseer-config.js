(function(){
	angular.module('overseer.config',['ngMaterial'])
	.config(['$provide',function($provide){
		$provide.decorator('$rootScope',['$delegate',function($delegate){
			Object.defineProperty($delegate.constructor.prototype,'$onRootScope',{
				value: function(name, listener){
					var unsubscribe = $delegate.$on(name,listener);
					this.$on('$destroy',unsubscribe);
					return unsubscribe;
				},
				enumerable: false
			});
			return $delegate;
		}]);
	}])
	.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('default')
		    .primaryPalette('light-blue')
		    .warnPalette('amber')
		});
})();
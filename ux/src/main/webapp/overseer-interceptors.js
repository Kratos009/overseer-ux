(function(){
	angular.module('overseer.interceptors',[])
	.factory('guidFactory',function(){
		function GenerateGuid(){
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace('/[xy]/g',function(c){
				var r = Math.random()*16|0, v= c==='x'?r:(r & 0x3 | 0x8);
				return v.toString(16);
			});
		}
		return function(){return {guid: GenerateGuid()};}
	})
	
	.factory('requestIdInterceptor',['guidFactory',function(guidFactory){
		var requestIdInterceptor ={
			request: function(config){
				config.headers['RequestId'] = guidFactory().guid;
				return config;
			}	
		};
		return requestIdInterceptor;
	}])
	
	.config(['$httpProvider',function($httpProvider){
		$httpProvider.interceptors.push('requestIdInterceptor');
	}])
	
})();
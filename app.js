  angular.module('transcludeExample', [/*'ngResource'*/])
	.directive('inputText', function(/*$resource*/){
      return {
        restrict: 'E',
        scope: {
					name : '@name',
					label: '@label',
					errorStatus: '@errorStatus',
					errorMessage: '@errorMessage',
					isSubmit: '@isSubmit'
				},
				template: 
					'<div class="form-group">'+
					'	<label>{{label}}</label>'+
					'	<input name="{{name}}" type="text" class="form-control" placeholder="">'+
					'</div>'
				,
				link: function(scope, element, attrs, ctrl) {
					scope.$watch(
						function() { return scope.isSubmit; },
						function(newValue, oldValue) {
							if ( newValue !== oldValue ) {

							}
						}
					);
				}
      };
  })
  .controller('ExampleController', ['$scope', function($scope) {

		$scope.isSubmit = false;
		
		$scope.usernameInput = {
			errorStatus:false,
			errorMessage:''
		};
		
		$scope.submit = function() {
		}
		
  }]);		
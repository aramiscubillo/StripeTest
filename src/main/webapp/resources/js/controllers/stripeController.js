var App = angular.module('Stripe', []);


App.controller('StripeController', function ($scope, $http, $rootScope) {
	
	$scope.submit = function() {
		alert('testing');
		var form = $scope.stripeForm;
		
		 Stripe.card.createToken(form, stripeResponseHandler);

		    // Prevent the form from submitting with the default action
		    return false;
	};

});
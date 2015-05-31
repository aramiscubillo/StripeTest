<<<<<<< HEAD
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
=======
/**
 * 
 */
var stripeApp = angular.module('stripeApp', []);

stripeApp.controller('stripeCont', function($scope){
	$scope.resul=true;
	$scope.button=false;
	$scope.token = "";
	$scope.submit = function (){
		$scope.$form = angular.element(document.querySelector('#payment-form'));
		
		$scope.button = true;
		//$scope.pay={card: $scope.card, cvc:$scope.cvc, exp:$scope.exp }
		$scope.resul=false;
		
		Stripe.card.createToken($scope.$form, $scope.stripeResponseHandle);
		
		return false;
	};
	
	$scope.stripeResponseHandle = function (status,response){
		var form = angular.element(document.querySelector('#payment-form'));
		if(response.error){
			 // Show the errors on the form
	        $form.find('.payment-errors').text(response.error.message);
	        $scope.button = false;
	      } else {
	        // response contains id and card, which contains additional card details
	    	alert(response.id);
	        // Insert the token into the form so it gets submitted to the server
	        // and submit
	    	$scope.$form.get(0).submit();

	     }
	};
	
});
>>>>>>> 55434ea3ac39520cbddf406ef24c3c81bdd9836e

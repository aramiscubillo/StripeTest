
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
		 form = angular.element(document.querySelector('#payment-form'));
		if(response.error){
			 // Show the errors on the form
	        $form.find('.payment-errors').text(response.error.message);
	        $scope.button = false;
	      } else {
	        // response contains id and card, which contains additional card details
	    	alert(response.id);
	        // Insert the token into the form so it gets submitted to the server
	        // and submit
	    	
	    	form.append(' <input type="hidden" name="stripeToken" value="'+response.id+'" />');
	    	
	    	$scope.paymentForm.stripeToken = response.id
	    	
	    	alert(response.id);
	    	
	    	form.action='/stripeTest';
	    	
	    	$scope.$form.get(0).submit();

	     }
	};
	
});

/**
 * 
 */
var stripeApp = angular.module('stripeApp', []);

stripeApp.controller('stripeCont', function($scope){

	$scope.button=false;
	$scope.token = "";
	
	$scope.submit = function (){
		$scope.$form = angular.element(document.querySelector('#payment-form'));
		
		$scope.button = true;
		
		Stripe.card.createToken($scope.$form, $scope.stripeResponseHandle);
		
		return false;
	};
	
	$scope.stripeResponseHandle = function (status,response){
		var form = angular.element(document.querySelector('#payment-form'));
		if(response.error){
	        $form.find('.payment-errors').text(response.error.message);
	        $scope.button = false;
	      } else {
	    	  
	    	  var text = "Token: " +response.id+
	    	  		"card: "+response.card+
	    	  		"created: "+response.created+
	    	  		"currency: "+response.currency+
	    	  		"livemode: "+response.livemode+
	    	  		"object: "+response.object+
	    	  		"used: "+response.used;
	        // response contains id and card, which contains additional card details
	    	alert(text);
	        // Insert the token into the form so it gets submitted to the server
	        // and submit
	    	$scope.$form.append($('<input type="hidden" name="stripeToken" />').val(response.id));
	    	$scope.$form.get(0).submit();

	     }
	};
	
});

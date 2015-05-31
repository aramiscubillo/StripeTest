<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<!doctype html>

<html xmlns:ng="http://angularjs.org" class="ng-app:Stripe" id="ng-app" ng-app="Stripe">
	<head>
	    <meta charset="utf-8">
		<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
		<link rel="SHORTCUT ICON" href="resources/images/favicon.ico" type="image/x-icon" />
	    <c:import url="/WEB-INF/views/css.jsp"></c:import>		   	    
	    
	    <!--[if lte IE 8]>
	    	<meta http-equiv="X-UA-Compatible" content="IE=edge" >
			<script src="resources/js/ie-shiv.js"></script>
			<script src="resources/js/json3.min.js"></script>
		<![endif]-->
		
		<c:import url="/WEB-INF/views/JSstripeTest.jsp"></c:import>
		
		
		

	<script type="text/javascript">
	  // This identifies your website in the createToken call below
	  Stripe.setPublishableKey('pk_test_AtFfQvJrqNu2WtBJdTPUSz2L');
	  // ...
	</script>

		
		
	</head>
	
	<body ng-controller="StripeController">
		<h3>Stripe Test View</h3>
				
		
		<form action="" method="POST" id="payment-form" ng-submit="submit()" name="stripeForm">
		  <span class="payment-errors"></span>
		
		  <div class="form-row">
		    <label>
		      <span>Card Number</span>
		      <input type="text" size="20" data-stripe="number"/>
		    </label>
		  </div>
		
		  <div class="form-row">
		    <label>
		      <span>CVC</span>
		      <input type="text" size="4" data-stripe="cvc"/>
		    </label>
		  </div>
		
		  <div class="form-row">
		    <label>
		      <span>Expiration (MM/YYYY)</span>
		      <input type="text" size="2" data-stripe="exp-month"/>
		    </label>
		    <span> / </span>
		    <input type="text" size="4" data-stripe="exp-year"/>
		  </div>
		
		  <button type="submit">Submit Payment</button>
		</form>

			
	</body>
	
</html>
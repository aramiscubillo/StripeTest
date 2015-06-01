package com.cenfotec.cenfoteca.controllers;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;


/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping(value = "/")
public class GeneralController {
	
	/**
	 * Simply selects the home view to render by returning its name.
	 * 
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView login(Locale locale, Model model,HttpServletRequest request,HttpServletResponse response) {				
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("login");
		return mav;
	}
	
	
	/**
	 * Simply selects the home view to render by returning its name.
	 * 
	 */
	@RequestMapping(value = "/stripeTest", method = RequestMethod.GET)
	public ModelAndView stripe(Locale locale, Model model,HttpServletRequest request,HttpServletResponse response) {				
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("stripeTest");
		return mav;
	}
	
	
	@RequestMapping(value = "/stripeTest", method = RequestMethod.POST)
	public String stripePost(HttpServletRequest request,HttpServletResponse response) {				
		
		String token = request.getParameter("stripeToken");
		
		 try {
			 Stripe.apiKey = "sk_test_BRgvc8BesZp5Ycu9RTjHXrbg";

			 Map<String, Object> chargeParams = new HashMap<String, Object>();
			 chargeParams.put("amount", 9000000);
			 chargeParams.put("currency", "usd");
			 chargeParams.put("source", token); // obtained with Stripe.js
			 chargeParams.put("description", "Smart Soft test");

			 Charge.create(chargeParams);
			 
	        } catch (StripeException e) {
	            e.printStackTrace();
	        }
		 
		return "1";
	}
	
	@RequestMapping(value = "app", method = RequestMethod.GET)
	public ModelAndView home(Locale locale, Model model,HttpServletRequest request,HttpServletResponse response) {				
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("home");
		return mav;
	}
}

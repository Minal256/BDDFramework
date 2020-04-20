package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Calculator2 {
	// Mapped two statement with one single method
	
	int result=0;
	@Given("^I have a number (\\d+)$")
	public void i_have_a_number(int arg1) throws Throwable {
		result=result+arg1;
	}

	@Then("^Adding two number$")
	public void m1() throws Throwable {
		//System.out.println(result);
		System.out.println("Adding two numbers: ");
	}

	@Then("^Result$")
	public void Result() throws Throwable {
	    System.out.println(result);
	}
}

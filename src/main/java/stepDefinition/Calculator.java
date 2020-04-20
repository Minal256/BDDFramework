package stepDefinition;

import java.util.List;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Calculator {
	int x, y, result;
	@Given("^I have first number (\\d+)$")
	public void i_have_first_number(int arg1) throws Throwable {
	    x=arg1;
	}

	//@Given("^I have second number (\\d+)$")
	@And("^I have second number (\\d+)$")
	public void i_have_second_number(int arg1) throws Throwable {
	   y=arg1;
	}

	@Then("^Add two numbers$")
	public void add_two_numbers() throws Throwable {
	   result=x+y;
	}

	@Then("^Display Result$")
	public void display_Result() throws Throwable {
	    System.out.println(result);
	}
	
	@Given("^I have following numbers:$")
	public void i_have_following_numbers(List<Integer> List) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	/**
	 * Above lines suggest u can create some group which will catch the data which s coming from the feature file.
	 * That group can be Data Table but it is suggesting to convert our data table into a list.
	 * Rather than it converting into List i am itself catching into the List.
	 * We can also write (DataTable table)
	 * table.asList()-convert data table into List
	 * Here i catch data into list so no need any conversion 
	 */
	   for (int i = 0; i < List.size(); i++) {
		   	result=result+List.get(i);
	   	}
	}

	@Then("^I will add all of those numbers$")
	public void i_will_add_all_of_those_numbers() throws Throwable {
	    System.out.println("Adding all elements");
	}


}

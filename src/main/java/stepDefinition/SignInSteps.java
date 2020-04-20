package stepDefinition;

import java.io.File;

import org.junit.AfterClass;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.listener.Reporter;
import com.testingshastra.signin.pages.SignInPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class SignInSteps {
	RemoteWebDriver driver;
	
	@AfterClass
	public void generateReport() {
		File config = new File("E:\\Eclipse programs\\BDDFramework\\Config");
		Reporter.loadXMLConfig(config);	
	}
	
//	@Before("@SmokeWebTest")     //@Before("@RunOnlyThis")
//	public void setupBrowser() {
//		System.out.println("Setting up the browser");
//		WebDriverManager.chromedriver().setup();
//		driver=new ChromeDriver();
//		driver.get("http://www.facebook.com");
//	}
//	
//	@Before(order = 2)
//	public void setupDb() {
//		System.out.println("Setting up Data base");
//	}
//	
//	@Before(order = 1)
//	public void setuoFileServer() {
//		System.out.println("Setting up File Server");
//	}
	
//	@After
//	public void tearDown() {
//		driver.quit();
//	}
	
	@Given("^User opens a chrome browser$")
	public void user_opens_a_chrome_browser() throws Throwable {
	    
	}

	@Then("^User opens a Signin page$")
	public void user_opens_a_Signin_page() throws Throwable {
	   
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_username_and_password(String arg1, String arg2) throws Throwable {
	    SignInPage signin = PageFactory.initElements(driver, SignInPage.class);
	    signin.enterEmailOrPhone(arg1);
	    signin.enterPassword(arg2);
	    signin.clickOnLoginButton();
	}

	@Then("^User should not able to login$")
	public void user_should_not_able_to_login() throws Throwable {
		SignInPage signin = PageFactory.initElements(driver, SignInPage.class);
		Assert.assertTrue(signin.isErrorAppear());
	}
	
//	@Then("^User should able to login$")
//	public void user_should_able_to_login() throws Throwable {
//		SignInPage signin = PageFactory.initElements(driver, SignInPage.class);
//	//	Assert.assertFalse(signin.isErrorAppear());
//	}
}

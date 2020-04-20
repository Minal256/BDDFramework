package RunnerUtility;

import org.junit.runner.RunWith;
import com.cucumber.listener.ExtentCucumberFormatter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

///we can pull multiple feature file all together

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/resources" , 
glue = "stepDefinition" ,
plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/Reports/MyFirstReport.html"})
public class RunnerClass {
	
}

/*  //-------  get format for cucumber report ------// 
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/resources" , 
glue = "stepDefinition" ,
format= {"pretty" , "html:target/Reports"})
public class RunnerClass {
	
}  */

/*
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/resources" , glue = "stepDefinition" , tags= {"@Smoke"})
public class RunnerClass {
	
} */

/*
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/resources/Features/Second.feature" , glue = "stepDefinition")
public class RunnerClass {
	
}


/*@RunWith(Cucumber.class) = we are going to run with our class with the cucumber class itself.
                             This is annotation provided by junit */

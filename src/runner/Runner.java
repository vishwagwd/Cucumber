package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="F:\\vishwa\\Amar\\Features\\maps.feature",glue="stepdefinitions",
monochrome=true,dryRun=false,plugin={"pretty","html:target/cucumber-reports"},
tags= {"@weekdays"})

public class Runner {
	
	

}

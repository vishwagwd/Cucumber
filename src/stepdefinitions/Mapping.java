
package stepdefinitions;

import java.util.Map;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.asserts.SoftAssert;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Mapping {
	WebDriver driver;
	SoftAssert softassert = new SoftAssert();
	
	//vishwa
	@Before
	public void before() {
		
		System.setProperty("webdriver.chrome.driver", "F:\\vishwa\\chromedriver.exe");
		driver = new ChromeDriver();
		
	}
	
	//this will be executed  after all the code
	@After
	
	public void after() {
		
		driver.close();
	}

	@Given("^user is on the login page\\.$")
	public void user_is_on_the_login_page() throws Throwable {
		
		driver.get("http://mobilpro.e-softsys.com/forms/userlogin.aspx");
		driver.manage().window().maximize();
		Thread.sleep(1000);
	}

	@Then("^user enters the username and password$")
	public void user_enters_the_Username_and_Password(DataTable Credentials) throws Throwable {
		Thread.sleep(1000);
		for (Map<String, String> data : Credentials.asMaps(String.class, String.class)) {

			driver.findElement(By.name("txtUserID")).sendKeys(data.get("username"));

			driver.findElement(By.xpath("//*[@id=\"txtPassword\"]")).sendKeys(data.get("password"));

		}

	}

	@Then("^login will be successfull\\.$")
	public void login_will_be_successfull() throws Throwable {

		driver.findElement(By.xpath("//*[@id=\"cmdLogin\"]")).click();
		String ExpectedTitle = "TimeEntry Calendar";
		softassert.assertEquals(ExpectedTitle, driver.getTitle());
		System.out.println("Assert Passed");
		softassert.assertNotEquals(ExpectedTitle, driver.getTitle());
		System.out.println("Assert Not Passed");
		driver.findElement(By.className("ColToday1")).click();

	}

	@Then("^user fills all the details regarding the time entry$")
	public void user_fills_all_the_details_regarding_the_time_entry(DataTable Entries) throws Throwable {
		
		for (Map<String, String> update : Entries.asMaps(String.class, String.class)) {

			Select project = new Select(driver.findElement(By.name("cboProject")));
			project.selectByVisibleText(update.get("Project"));
			Thread.sleep(3000);

			Select Job = new Select(driver.findElement(By.name("cboJob")));
			Job.selectByVisibleText(update.get("Job"));

			Select Task = new Select(driver.findElement(By.name("cboTask")));
			Task.selectByVisibleText(update.get("Task"));

			driver.findElement(By.name("txtTetTime")).sendKeys(update.get("Timespent"));
			driver.findElement(By.name("txtTetDiary")).sendKeys(update.get("Diary"));
			driver.findElement(By.name("cmdSave")).click();
			Thread.sleep(2000);

			

		}

		

	}
	

@Then("^send the mail automatically$")
public void send_the_mail_automatically(DataTable email) throws Throwable {
	
	
	String parent = driver.getWindowHandle();
	System.out.println("Parent window id is"+ parent);
	
	driver.findElement(By.name("btnPrintTimeSheet")).click();
	
	Set<String> allwindows = driver.getWindowHandles();
	int count = allwindows.size();
	
	System.out.println("Total window"+ count);
	
	for(String child : allwindows)
	{
		
		if(!parent.equalsIgnoreCase(child))
		{
			driver.switchTo().window(child);
			
			WebElement row1 = driver.findElement(By.id("txtFrom"));
			row1.clear();
			
			for(Map<String, String>id : email.asMaps(String.class, String.class))
				{
					row1.sendKeys(id.get("From"));
					
					driver.findElement(By.id("txtTo")).sendKeys(id.get("To"));
				}
			
			driver.findElement(By.name("btnSend")).click();
						driver.close();
		}
	}
	
	driver.switchTo().window(parent);
}

	@Given("^fill the details to comeplete the expenses entry\\.$")
	public void fill_the_details_to_comeplete_the_expenses_entry() throws Throwable {
	    
		driver.findElement(By.xpath("//*[@id=\"uscMenu_Toolbar1\"]/tbody/tr/td/table/tbody/tr/td[9]/font/b/a")).click();
		driver.findElement(By.xpath("//*[@id=\"lblTECal\"]/table/tbody/tr[3]/td[2]/table/tbody/tr[2]/td[1]")).click();
		WebElement date=driver.findElement(By.name("txtDate"));
		date.click();
		date.sendKeys("7/06/2020");
		
		Select proj = new Select(driver.findElement(By.name("cboProject")));
		proj.selectByVisibleText("Administration");
		
		Select job = new Select(driver.findElement(By.name("cboJob")));
		job.selectByVisibleText("General Administration");
		
		Select item = new Select(driver.findElement(By.name("cboItem")));
		item.selectByVisibleText("Lunch");
		
		driver.findElement(By.name("txtExpAmt")).sendKeys("200");
		driver.findElement(By.name("uscTranBut$cmdSave")).click();
		
		driver.close();
	    
	}


}

/*
 * package stepdefinitions;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; import
 * org.openqa.selenium.chrome.ChromeDriver; import
 * org.testng.asserts.SoftAssert;
 * 
 * import cucumber.api.java.en.Given; import cucumber.api.java.en.Then;
 * 
 * 
 * public class Steps { WebDriver driver; SoftAssert softassert = new
 * SoftAssert();
 * 
 * @Given("^user is on the login page\\.$") public void
 * user_is_on_the_login_page() throws Throwable {
 * 
 * System.setProperty("webdriver.chrome.driver",
 * "E:\\vishwa\\chromedriver.exe"); driver = new ChromeDriver();
 * driver.get("http://mobilpro.e-softsys.com/forms/userlogin.aspx");
 * driver.manage().window().maximize(); Thread.sleep(1000); }
 * 
 * @Then("^user enters the \"([^\"]*)\" and \"([^\"]*)\"$") public void
 * user_enters_the_Username_and_Password(String username, String password)
 * throws Throwable { Thread.sleep(1000);
 * 
 * driver.findElement(By.name("txtUserID")).sendKeys(username);
 * 
 * 
 * driver.findElement(By.xpath("//*[@id=\"txtPassword\"]")).sendKeys(password);
 * 
 * 
 * 
 * 
 * }
 * 
 * @Then("^login will be successfull\\.$") public void
 * login_will_be_successfull() throws Throwable {
 * 
 * driver.findElement(By.xpath("//*[@id=\"cmdLogin\"]")).click(); String
 * ExpectedTitle = "TimeEntry Calendar"; softassert.assertEquals(ExpectedTitle,
 * driver.getTitle()); System.out.println("Assert Passed");
 * softassert.assertNotEquals(ExpectedTitle, driver.getTitle());
 * System.out.println("Assert Not Passed"); driver.close();
 * 
 * }
 * 
 * 
 * 
 * }
 */
package ucll.project.ui;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertEquals;

public class HomePageTest {

    private static WebDriver driver;

    @BeforeClass
    public static void SetupChromeDriver() {
        // Setup the Chrome driver for the whole class
        driver = ChromeDriverHelper.getDriver();
    }

    @AfterClass
    public static void CloseChrome() {
        // close it in the end, comment this away to keep chrome open
        driver.close();
    }

    @Test
    public void VisitHomePageTest() {

        driver.get(Config.BASE_URL);
        assertEquals("Hello world!", driver.getTitle());

    }

}

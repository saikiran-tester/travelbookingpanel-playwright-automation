import {test, expect} from "@playwright/test";
test.describe("User Registration", ()=>{

    test("TC-001 - User Registration with Valid Details", async ({ page }) => {

    await page.goto("https://demo.travelbookingpanel.com/home?lang=en")
    await page.getByText("Sign Up").click()
    await page.getByRole("link", { name: /Customer Signup/ }).click();
   await page.locator("input[name='first_name']").fill("Vijay");
   await page.locator("input[name='last_name']").fill("kumar");
   await page.getByPlaceholder("you@example.com").fill("vijaykumar69@example.com");
   await page.getByPlaceholder("Min. 8 characters").fill("password123");
   await page.getByPlaceholder("Repeat password").fill("password123");
   await page.getByText(" Create Account").click();
   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
   
})

})



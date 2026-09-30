import {test, expect} from "@playwright/test";
test.describe("Registration Validation", ()=>{

    test("TC-002 – Registration Validation", async ({ page }) => {

    await page.goto("https://demo.travelbookingpanel.com/home?lang=en")
    await page.getByText("Sign Up").click()
    await page.getByRole("link", { name: /Customer Signup/ }).click();
   await page.locator("input[name='first_name']").fill("");
   await page.locator("input[name='last_name']").fill("");
   await page.getByPlaceholder("you@example.com").fill("");
   await page.getByPlaceholder("Min. 8 characters").fill("");
   await page.getByPlaceholder("Repeat password").fill("");
   await page.getByText(" Create Account").click();
   await expect(page.locator("input[name='first_name']"))
  .toHaveJSProperty("validationMessage", "Please fill out this field.");
   
})

})

import {test, expect} from "@playwright/test";


test.describe("Change the  User Password", () => {

  test("TC-016-Change the  User Password", async ({page}) => {

    await page.goto("https://demo.travelbookingpanel.com/home?lang=en");
   await page.getByRole("link", { name: "Login" }).click();
   await page.getByPlaceholder("you@example.com").fill("passwordtest@example.com");
   await page.getByPlaceholder("Password").fill("Password@123");
   await page.locator("#loginBtn").click();

    await page.getByRole('main').getByRole("link", { name: "Edit Profile" }).click();
    
    await page.locator("input[name='current_password']").fill("Password123");
    await page.locator("input[name='password']").fill("Password123");
    await page.locator("input[name='password_confirmation']").fill("Password123");
    await page.getByRole('button', { name: 'Update Password' }).click();
    await expect(page.getByText("Password changed successfully.")).toBeVisible();
  })
})
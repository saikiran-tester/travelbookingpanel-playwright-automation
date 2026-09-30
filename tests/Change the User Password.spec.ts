import {test, expect} from "@playwright/test";
import {login} from "../utils/login";

test.describe("Change the  User Password", () => {

  test("TC-016-Change the  User Password", async ({page}) => {

    await login(page);

    await page.getByRole('main').getByRole("link", { name: "Edit Profile" }).click();
    
    await page.locator("input[name='current_password']").fill("password123");
    await page.locator("input[name='password']").fill("Password123");
    await page.locator("input[name='password_confirmation']").fill("Password123");
    await page.getByRole('button', { name: 'Update Password' }).click();
    await expect(page.getByText("Password changed successfully.")).toBeVisible();
  })
})
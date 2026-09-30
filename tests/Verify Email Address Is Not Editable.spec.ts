import {test, expect} from "@playwright/test";
import {login} from "../utils/login";

test.describe("Verify Email Address Is Not Editable", () => {

  test("TC-015-Verify Email Address Is Not Editable", async ({page}) => {

    await login(page);

    //verify email field disply
    await page.getByRole('main').getByRole("link", { name: "Edit Profile" }).click();
    await expect(page.locator("input[value='vijaykumar69@example.com']")).toBeVisible();
    await expect(page.locator("input[type='email']")).toBeDisabled();
    


  })
})
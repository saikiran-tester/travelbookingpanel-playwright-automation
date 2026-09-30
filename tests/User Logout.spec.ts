import {test, expect} from "@playwright/test";
import {login} from "../utils/login";

test.describe("User Logout", () => {

  test("TC-017-User Logout", async ({page}) => {

    await login(page);

    await page.getByRole("button", { name: /Logout/ }).last().click();

    await expect(page.getByText("Welcome Back")).toBeVisible();
  })
})
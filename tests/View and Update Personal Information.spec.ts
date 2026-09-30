import {test, expect} from "@playwright/test";
import {login} from "../utils/login";

test.describe("View and Update Personal Information", () => {

  test("TC-014-View and Update Personal Information", async ({page}) => {

    await login(page);

        // Edit Profile
    await page.getByRole('main').getByRole("link", { name: "Edit Profile" }).click();
    await expect(page.getByRole("heading", { name: "Profile" })).toBeVisible();

    // Verify Personal Information fields
    await expect(page.locator("select[name='title']")).toBeVisible();
   await expect(page.locator("input[name='first_name']")).toBeVisible();
    await expect(page.locator("input[name='last_name']")).toBeVisible();
    await expect(page.locator("input[value='vijaykumar69@example.com']")).toBeVisible();
    await expect(page.locator("input[name='phone']")).toBeVisible();
    await expect(page.locator("select[name='country']")).toBeVisible();
    await expect(page.locator("input[name='state']")).toBeVisible();
    await expect(page.locator("input[name='zip_code']")).toBeVisible();
    await expect(page.locator("textarea[name='address']")).toBeVisible();

    // Update Personal Information
    await page.locator("select[name='title']").selectOption("Mr");
    await page.locator("input[name='first_name']").fill("sanjay");
    await page.locator("input[name='last_name']").fill("Vijay")
    await page.locator("select").filter({ hasText: "Code" }).selectOption({ label: "+92" });
    await page.locator("input[name='phone']").fill("9879654322")
    await page.locator("select[name='country']").selectOption("United States");
    await page.locator("input[name='state']").fill("Florida");
    await page.locator("input[name='zip_code']").fill("654231");
    await page.locator("textarea[name='address']").fill("123 main st");
    await page.getByRole('button', { name: 'Update Profile' }).click();
    await expect(page.getByText("Profile updated successfully")).toBeVisible();
    


  })
})


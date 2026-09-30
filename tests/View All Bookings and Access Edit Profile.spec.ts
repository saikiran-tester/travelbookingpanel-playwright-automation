import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

test.describe("View All Bookings and Access Edit Profile", () => {

  test("TC-013-View All Bookings and Access Edit Profile", async ({ page }) => {

    await login(page);

    // View All → My Bookings
    await page.getByRole("link", { name: "View All" }).click();
    await expect(page.getByRole("heading", { name: "My Bookings" })).toBeVisible();

    // Return to Customer Dashboard
    await page.getByRole("link", { name: "Dashboard", exact: true }).click(); 
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

    // Edit Profile
    await page.getByRole('main').getByRole("link", { name: "Edit Profile" }).click();
    await expect(page.getByRole("heading", { name: "Profile" })).toBeVisible();

  });
});
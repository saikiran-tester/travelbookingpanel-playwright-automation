import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

test.describe("View and Filter Booking Records by Service Module", () => {

  test("TC-00-8: View and Filter Booking Records by Service Module", async ({ page }) => {

    await login(page);
    await page.getByText("My Bookings").click();
    await page.getByText("All Bookings").click();
    //View Booking Records
    await expect(page.getByText("Manage Your Bookings", { exact: true })).toBeVisible();
    await expect(page.locator("div[class='flex items-center gap-1 p-3 border-b border-gray-100 overflow-x-auto'] a:nth-child(1)")).toBeVisible();
    await expect(page.locator("main[class='agent-main-content'] a:nth-child(2)")).toBeVisible();
    await expect(page.locator("main[class='agent-main-content'] a:nth-child(3)")).toBeVisible();
     await expect(page.locator("main[class='agent-main-content'] a:nth-child(4)")).toBeVisible();
     await expect(page.locator("main[class='agent-main-content'] a:nth-child(5)")).toBeVisible();

    //Filter Booking Records
    await page.locator("main[class='agent-main-content'] a:nth-child(3)").click();
    await expect(page.getByText("Flight", { exact: true }).first()).toBeVisible();
  });

});
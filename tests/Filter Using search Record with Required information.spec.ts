import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

test.describe("Filter Using search Record with Required information", () => {

  test("TC-010-Filter Using search Record with Required information", async ({ page }) => {

    await login(page);

    // My Bookings column headers
    await page.getByText("My Bookings").click();
    await page.getByText("All Bookings").click();
    await page.getByPlaceholder("Search records...").pressSequentially("20260924121855");
    await expect(page.locator("#bookingTable tbody tr:visible")).toHaveCount(1);
    await expect(page.locator("#bookingTable tbody tr").first()).toContainText("20260924121855");
  });
});
import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

test.describe("View Flight Booking Records", () => {

  test("TC-027-View Flight Booking Records", async ({ page }) => {

    await login(page);

    await page.getByText("My Bookings").click();
    await page.getByText("All Bookings").click();

    //Verify that the completed flight booking record is displayed.
    await expect(page.locator("#bookingTable tbody tr").nth(1)).toContainText("20260924121127");
await expect(page.locator("#bookingTable tbody tr").nth(1)).toContainText("Flight");
await expect(page.locator("#bookingTable tbody tr").nth(1)).toContainText("Confirmed");
await expect(page.locator("#bookingTable tbody tr").nth(1)).toContainText("Paid");
await expect(page.locator("#bookingTable tbody tr").nth(1)).toContainText("USD 282.71");
await expect(page.locator("#bookingTable tbody tr").nth(1)).toContainText("ZU442I");
await expect(page.locator("#bookingTable tbody tr").nth(1)).toContainText("Sep 24, 2026");

  })

})
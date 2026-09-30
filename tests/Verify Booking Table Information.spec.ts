import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

test.describe("Verify Booking Table Information", () => {

  test("TC-009-Verify Booking Table Information", async ({ page }) => {

    await login(page);

    // My Bookings column headers
    await page.getByText("My Bookings").click();
    await page.getByText("All Bookings").click();
    await expect(page.getByRole("columnheader", { name: "Invoice" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "Module" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "Booking" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "Payment" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "Price" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "PNR" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "Date" })).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "Actions" })).toBeVisible();
    // My Bookings table data
    await expect(page.locator("#bookingTable tbody tr").first()).toContainText("20260924121855");
await expect(page.locator("#bookingTable tbody tr").first()).toContainText("Flight");
await expect(page.locator("#bookingTable tbody tr").first()).toContainText("Confirmed");
await expect(page.locator("#bookingTable tbody tr").first()).toContainText("Paid");
await expect(page.locator("#bookingTable tbody tr").first()).toContainText("USD 4,188.49");
await expect(page.locator("#bookingTable tbody tr").first()).toContainText("EUZX6N");
await expect(page.locator("#bookingTable tbody tr").first()).toContainText("Sep 24, 2026");
await expect(page.locator("#bookingTable tbody tr").first()).toContainText("Invoice");

  });
});
import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

test.describe("View Recent Booking Records", () => {

  test("TC-012-View Recent Booking Records", async ({ page }) => {

    await login(page);

    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

    // Verify Recent Bookings section
    await expect(page.getByRole("heading", { name: "Recent Bookings" })).toBeVisible();

    // Verify required booking information
    await expect(page.getByText("Invoice", { exact: true })).toBeVisible();
    await expect(page.getByText("Module", { exact: true })).toBeVisible();
    await expect(page.getByText("Status", { exact: true })).toBeVisible();
    await expect(page.getByText("Payment", { exact: true })).toBeVisible();
    await expect(page.getByText("Price", { exact: true })).toBeVisible();
    await expect(page.getByText("Date", { exact: true })).toBeVisible();
    const recentBooking = page.locator("table tbody tr").first();

await expect(recentBooking).toBeVisible();
await expect(recentBooking).toContainText("20260924121855");
await expect(recentBooking).toContainText("Flight");
await expect(recentBooking).toContainText("Confirmed");
await expect(recentBooking).toContainText("Paid");
await expect(recentBooking).toContainText("USD 4,188.49");
await expect(recentBooking).toContainText("Sep 24, 2026");

  });
});
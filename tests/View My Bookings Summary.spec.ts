import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

test.describe("View My Bookings Summary", () => {

  test("TC-007-View My Bookings Summary", async ({ page }) => {

    await login(page);
    await page.getByText("My Bookings").click();
    await page.getByText("All Bookings").click();
    await expect(page.getByText("Total Bookings")).toBeVisible();
    await expect(page.getByText("Booking Status")).toBeVisible();

await expect(page.getByText("Confirmed", { exact: true }).first()).toBeVisible();
await await expect(page.getByText("Pending", { exact: true }).first()).toBeVisible();
await expect(page.getByText("Cancelled", { exact: true }).first()).toBeVisible();

await expect(page.getByText("Payment Status")).toBeVisible();

await expect(page.getByText("Paid", { exact: true }).first()).toBeVisible();
await expect(page.getByText("Unpaid", { exact: true }).first()).toBeVisible();
await expect(page.getByText("Refunded", { exact: true }).first()).toBeVisible();

  });

});
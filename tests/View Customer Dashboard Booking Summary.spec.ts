import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

test.describe("View Customer Dashboard Booking Summary", () => {

  test("TC-011-View Customer Dashboard Booking Summary", async ({ page }) => {

    await login(page);

    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

    await expect(page.getByText("Total Bookings")).toBeVisible();
    await expect(page.getByRole('paragraph').filter({ hasText: 'Confirmed'})).toBeVisible();
    await expect(page.getByText("Pending", { exact: true })).toBeVisible();
    await expect(page.getByText("Cancelled", { exact: true })).toBeVisible();

  });
});
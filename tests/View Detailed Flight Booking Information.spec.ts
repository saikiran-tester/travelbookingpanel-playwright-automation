import { test, expect } from "@playwright/test";
import { login } from "../utils/login";

test.describe("View Detailed Flight Booking Information", () => {

  test("TC-28-View Detailed Flight Booking Information", async ({ page }) => {

    await login(page);

    await page.getByText("My Bookings").click();
    await page.getByText("All Bookings").click();
   
    //Verify that the completed flight booking record is displayed.
    await expect(page.getByText("Manage Your Bookings")).toBeVisible();

    const [invoicePage] = await Promise.all([
      page.waitForEvent("popup"),
      //Select the available action for the flight booking record.
   await page.getByRole("link",{name:"Invoice"}).first().click(),

    ]);

    await invoicePage.waitForLoadState("domcontentloaded");

    //Verify that the booking details are displayed.

     await expect(invoicePage.getByText("Flight Details", {exact:true})).toBeVisible();
    

     await expect(invoicePage.getByText("Invoice",{exact:true})).toBeVisible();

     await expect(invoicePage.getByText("Confirmed",{exact:true})).toBeVisible();

     await expect(invoicePage.getByText("Completed",{exact:true})).toBeVisible();

     await expect(invoicePage.getByText("USD").nth(2)).toBeVisible();

     await expect(invoicePage.getByText("EUZX6N",{exact:true})).toBeVisible();

     await expect(invoicePage.getByText("24 Sep 2026",{exact:true})).toBeVisible();

     await expect(invoicePage.getByText("Traveller Information",{exact:true})).toBeVisible();

     await expect(invoicePage.getByText("Print")).toBeVisible();

     await expect(invoicePage.getByText("Send Email")).toBeVisible();

     await expect(invoicePage.getByText("20260924121855", { exact: true })).toBeVisible();


  });
});
import { test, expect } from "@playwright/test";
import { login } from "../utils/login";
import { goToFlightSearch } from "../utils/flight";

test.describe("Filter Flight Search Results", () => {

  test.skip("TC-019-Filter Flight Search Results", async ({ page }) => {
    test.setTimeout(60000);

    await login(page);
    await goToFlightSearch(page);

    // FROM
    await page.locator("#oneWayBtn").click();
    await page.locator("#flightFromBtn").click();
    await page.locator("#flightFromSearch").fill("Mumbai");
    await page.locator("#flightFromList .airport-item[data-name='Mumbai']").waitFor({ state: "visible" });
    await page.locator("#flightFromList .airport-item[data-name='Mumbai']").click();

    // TO
    await page.locator("#flightToBtn").click();
    await page.locator("#flightToSearch").fill("madras");
    await page.getByText("Madras", { exact: true }).click();

    // DEPARTURE DATE
    await page.locator("#flightDepartureDate").click();

    for (let i = 0; i < 3; i++) {
      await page.locator(".flatpickr-next-month").first().click();
    }

    await page.locator('.flatpickr-day[aria-label="December 14, 2026"]').click();

    // PASSENGERS
    await page.locator("#flightPassengerBtn").click();

    await page.locator(
      "//button[@data-type='adult']//i[@class='fas fa-plus text-[#0077BE] text-[10px]']"
    ).click();

    // CLASS
    await page.locator("#flightClassBtn").click();
    await page.locator("#flightClassList .class-item[data-class='business']").click();

    // SEARCH
    await page.locator("#flightSearchBtn").click();


// Verify flight results are displayed
//`Before click No of Stop filter Flight Count
    const flightCards = page.locator(".flight-card");

    await expect(flightCards.first()).toBeVisible();
    await expect(page.locator("#flightCount")).toHaveText(/\d+/);

    //---------------------------------------
    const flightCount = await flightCards.count();

    console.log(`Before click No of Stop filter Flight Count: ${flightCount} `);

    await page.locator("input[value='0']").click()

    //`after click No of Stop filter Flight Count
    const flightCards1 = page.locator(".flight-card");

    await expect(flightCards1.nth(1)).toBeVisible();
    await expect(page.locator("#flightCount")).toHaveText(/\d+/);
    //---------------------------------------
    const flightCount1 = await flightCards1.count();

    console.log(`After click No of Stop filter Flight Count: ${flightCount1} `);


    



    for (let i = 0; i < flightCount; i++) {

      const flightCard = flightCards.nth(i);

      

      /*
      // Airline logo
      await expect(
        flightCard.locator("img[alt='Airline Logo']")
      ).toBeVisible();

      // Route
      await expect(
        flightCard.locator("p").filter({ hasText: /\s+to\s+/ }).first()
      ).not.toHaveText("");

      // Travel date
      await expect(
        flightCard.locator("p.text-sm.text-gray-500").first()
      ).not.toHaveText("");

      // Total fare
      await expect(
        flightCard.locator("p").filter({ hasText: "USD" }).first()
      ).toContainText("USD");

      // Departure time
      await expect(
        flightCard.locator("p.text-3xl").first()
      ).not.toHaveText("");

      // Arrival time
      await expect(
        flightCard.locator("p.text-3xl").last()
      ).not.toHaveText("");

      // Duration
      await expect(
        flightCard.locator("p.text-xs.text-gray-600").filter({
          hasText: /^\d+:\d+$/
        }).first()
      ).toBeVisible();

      // Book option
      await expect(
        flightCard.getByRole("button", { name: /Book/ })
      ).toBeVisible();*/
    }
  });
});
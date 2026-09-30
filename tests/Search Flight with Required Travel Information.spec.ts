import {test, expect} from "@playwright/test";
import { login } from "../utils/login";
import { goToFlightSearch} from "../utils/flight";

test.describe("Search Flight with Required Travel Information", ()=>{

    test("TC-006-Search Flight with Required Travel Information", async ({ page }) => {
    await login(page);
    await goToFlightSearch(page);
    //FROM
    await page.locator("#oneWayBtn").click();
    await page.locator("#flightFromBtn").click();
    await page.locator("#flightFromSearch").fill("mumbai");
    await page.locator("#flightFromList .airport-item[data-name='Mumbai']").waitFor({state: "visible"});
    await page.locator("#flightFromList .airport-item[data-name='Mumbai']").click();
    //TO
    await page.locator("#flightToBtn").click();
    await page.locator("#flightToSearch").fill("madras");
    await page.getByText("Madras", { exact: true }).click();
    //depaturedate
    await page.locator("#flightDepartureDate").click();
    for (let i = 0; i < 3; i++) {
    await page.locator(".flatpickr-next-month").first().click();
   }

    await page.locator('.flatpickr-day[aria-label="December 18, 2026"]').click();
    await page.locator("#flightPassengerBtn").click();

    //Passengers count
    
   for (let i = 0; i < 1; i++) {
    //await page.locator("#flightPassengerDisplay").click();
    await page.locator("//button[@data-type='adult']//i[@class='fas fa-plus text-[#0077BE] text-[10px]']").click();
   }

   //class section 

  
   await page.locator("#flightClassBtn").click();

  await page.locator("#flightClassList .class-item[data-class='business']").click();
   
   //click on search button
   await page.locator("#flightSearchBtn").click();
   //assertion
   await expect(page.locator("#flightCount")).toHaveText(/\d+/);
   


})

})
import {test, expect} from "@playwright/test";
import { login } from "../utils/login";
test.describe("Navigate to Flight Service", ()=>{

    test("TC-005-Navigate to Flight Service", async ({ page }) => {
    await login(page);
   await page.locator("button[onclick=\'toggleMobileMenu()\']").click
   await page.getByRole("link", { name: "Flight" }).click();
   await expect(page.locator("#flightSearchBtn")).toBeVisible();
   
})

})
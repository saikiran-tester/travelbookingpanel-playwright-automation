import { expect, type Page } from "@playwright/test";

export async function goToFlightSearch(page: Page) {
     await page.locator("button[onclick=\'toggleMobileMenu()\']").click
   await page.getByRole("link", { name: "Flight" }).click();

   
}
import { expect, type Page } from "@playwright/test";

export async function login(page: Page) {
    await page.goto("https://demo.travelbookingpanel.com/home?lang=en")
    await page.getByRole("link", { name: "Login" }).click();
    //await page.locator("//a[@class='btn-signin px-4 py-2 font-semibold rounded-lg transition duration-300 text-sm flex items-center gap-1.5']//i[@class='fas fa-right-to-bracket']").click();
    await page.getByPlaceholder("you@example.com").fill("vijaykumar69@example.com");
    await page.getByPlaceholder("Password").fill("Password123");
    await page.locator("#loginBtn").click();
}
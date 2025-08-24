// tests/button.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Button story", () => {
  test("renders and responds to click", async ({ page }) => {
    await page.goto("/iframe.html?id=example-button--primary");
    const button = page.getByRole("button", { name: "Button" });
    await expect(button).toBeVisible();
    await button.click();
  });
});

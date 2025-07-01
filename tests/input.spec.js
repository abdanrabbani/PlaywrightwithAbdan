import { test, expect } from '@playwright/test';

test('form interaction example', async ({ page }) => {
  await page.goto('https://httpbin.org/forms/post');
  //check the present field
  
  // Fill out a form
  await page.fill('input[name="custname"]', 'John Doe');
  await page.fill('input[name="custtel"]', '123-456-7890');
  await page.fill('input[name="custemail"]', 'john@example.com');
  await page.check('input[value="large"]');
  await page.check('input[name="topping"][value="cheese"]');
  //await page.getByRole('input', { name: /Preferred delivery time/i }).fill('15:00');
  await page.fill('input[name="delivery"]', '15:00');
  await page.getByRole('textbox', { name: /Delivery instructions/i }).fill('Cibubur');
  // Submit form
  await page.getByRole('button', { name: /Submit order/i }).click();
  //await page.click('input[type="submit"]');
  
  // Verify submission
  await expect(page.locator('pre')).toContainText('John Doe');
  await page.waitForTimeout(3000);
});
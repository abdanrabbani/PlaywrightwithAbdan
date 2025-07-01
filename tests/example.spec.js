// tests/example.spec.js
import { test, expect } from '@playwright/test';

test('basic navigation and interaction', async ({ page }) => {
  // Navigate to a page
  await page.goto('https://example.com');
  
  // Check page title
  await expect(page).toHaveTitle(/Example/);
  
  // Find and click a link
  await page.click('text=More information');
  
  // Wait for navigation and verify URL
  await expect(page).toHaveURL(/.*iana.org.*/);
});


test('handling dynamic content', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Wait for specific element to appear
  await page.waitForSelector('.dynamic-content');
  
  // Wait for network request to complete
  await page.waitForResponse('**/api/data');
  
  // Take screenshot
  await page.screenshot({ path: 'example.png' });
});
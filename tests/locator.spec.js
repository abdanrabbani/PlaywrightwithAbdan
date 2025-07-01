import { test, expect } from '@playwright/test';

test('different locator strategies', async ({ page }) => {
  await page.goto('https://example.com');
  
  // By text content
  await page.locator('text=Click me').click();
  await page.locator('text=/Sign in/i').click(); // regex, case insensitive
  
  // By CSS selector
  await page.locator('.btn-primary').click();
  await page.locator('#submit-button').click();
  await page.locator('button[type="submit"]').click();
  
  // By data-testid (recommended for testing)
  await page.locator('[data-testid="login-button"]').click();
  
  // By role (accessibility-friendly)
  await page.locator('role=button[name="Submit"]').click();
  await page.locator('role=textbox[name="Email"]').fill('test@example.com');
  
  // By placeholder
  await page.locator('[placeholder="Enter your email"]').fill('user@test.com');
  
  // Combining locators
  await page.locator('.form-group').locator('input[type="email"]').fill('test@example.com');
  
  // Filter locators
  await page.locator('button').filter({ hasText: 'Submit' }).click();
  await page.locator('div').filter({ has: page.locator('text=Important') }).click();
});

test('working with multiple elements', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Get all matching elements
  const buttons = page.locator('button');
  const count = await buttons.count();
  console.log(`Found ${count} buttons`);
  
  // Iterate through elements
  for (let i = 0; i < count; i++) {
    const buttonText = await buttons.nth(i).textContent();
    console.log(`Button ${i}: ${buttonText}`);
  }
  
  // Get first/last element
  await buttons.first().click();
  await buttons.last().click();
  
  // Get nth element
  await buttons.nth(2).click();
});

test('advanced element interactions', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Hover over element
  await page.locator('.dropdown-trigger').hover();
  
  // Double click
  await page.locator('.editable-text').dblclick();
  
  // Right click
  await page.locator('.context-menu-trigger').click({ button: 'right' });
  
  // Check if element is visible/enabled
  const isVisible = await page.locator('.modal').isVisible();
  const isEnabled = await page.locator('button').isEnabled();
  
  if (isVisible) {
    await page.locator('.modal .close-button').click();
  }
  
  // Get element attributes and text
  const href = await page.locator('a').getAttribute('href');
  const text = await page.locator('h1').textContent();
  const innerHTML = await page.locator('.content').innerHTML();
});


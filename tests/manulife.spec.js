// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto
  ('https://www.moneyhero.com.hk/en/travel-insurance?destinations=Japan&endDate=2025-10-01&hasTriggeredSearch=true&noOfAdults=1&noOfChildren=0&startDate=2025-09-16&travelAsFamily=false&tripType=SINGLE_PLAN');
 await expect(page).toHaveTitle(/Compare/);
 })

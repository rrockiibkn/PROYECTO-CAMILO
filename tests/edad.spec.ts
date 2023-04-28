import { test, expect } from '@playwright/test';

test('edad', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('Hernandez2015');
  await page.getByRole('navigation').locator('input[name="password"]').click();
  await page.getByRole('navigation').locator('input[name="password"]').fill('Vale022414?');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('Age', { exact: true }).click();
  await page.getByLabel('Age', { exact: true }).fill('28');
  await page.getByRole('button', { name: 'Save' }).click();
});
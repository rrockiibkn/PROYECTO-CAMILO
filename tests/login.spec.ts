import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('Hernandez2015');
  await page.getByRole('navigation').locator('input[name="password"]').click();
  await page.getByRole('navigation').locator('input[name="password"]').fill('Vale022414?');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Hi, camilo').click();
});
const { test, expect } = require('@playwright/test');

test('Check add game page', async ({ page }) => {
    await page.goto('http://localhost:8081/add-game');
    const form = await page.$('div');
    expect(form).toBeTruthy();
  });
  
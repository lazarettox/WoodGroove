import { test, expect } from '@playwright/test';

// przejście na stronę
test('Nagłówek jest widoczny', async ({ page }) => {
await page.goto('https://woodgrovedemo.com/');

  // nagłówek główny
  const header1 = page.locator('#headerContainer > nav > div > a.navbar-brand');
  await expect(header1).toHaveText('Woodgrove Groceries');

  const header = page.locator('#header > div.inner-header > div > div > div:nth-child(1) > h1');
  await expect(header).toHaveText('Welcome to Woodgrove Groceries demo');

  // opis pod nagłówkiem
  const description = page.locator('#header > div.inner-header > div > div > div:nth-child(2) > div');
  await expect(description).toContainText('Microsoft Entra External ID offers solutions that let you quickly add intuitive, user-friendly sign-in and sign-up experiences for your external apps. Woodgrove Groceries live demo illustrates several authentication experiences for common retail scenarios.');
});

test('Link do video jest widoczny oraz aktywny', async ({ page }) => {
  await page.goto('https://woodgrovedemo.com/');

  const VideoLink = page.locator('#header > div.inner-header > div > div > div:nth-child(2) > div > div > a')
   await expect(VideoLink).toHaveAttribute('href','https://learn.microsoft.com/en-us/entra/external-id/customers/reference-training-videos#visit-our-video-library');

   await VideoLink.click();
   await expect(page).toHaveURL(
  'https://learn.microsoft.com/en-us/entra/external-id/customers/reference-training-videos#visit-our-video-library');
})






//widocznosc navbar

// widoczność nagłówka

//widoczność opisu

//widoczność nagłówka h4


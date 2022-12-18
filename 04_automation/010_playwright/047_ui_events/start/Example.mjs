import { chromium } from "@playwright/test";

// @see セレクターのチェーンの利用方法(>>)
// https://playwright.dev/docs/selectors#chaining-selectors

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const inputLocator = page.locator('//*[@id="__next"]/div/div[1]/label/input');
  await page.waitForTimeout(2000);
  await inputLocator.type('美');

  const pager3Locator = await page.locator(".page-link.page-number >> nth=2");
  await pager3Locator.click();
  

  // CSS セレクターで要素を取得
  const cardsLocator = await page.locator(".cards.list-group-item");
  // const parentLocator = await pageTitleLocator.locator('..')
  // const pageTitle = await parentLocator.innerHTML();
  const cardsCount =  await cardsLocator.count();
  console.log(cardsCount);

  // await browser.close();

})();

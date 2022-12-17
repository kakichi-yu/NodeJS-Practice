import { chromium } from "@playwright/test";

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    // const htmlStr = await page.content();
    // console.log(htmlStr);

    // CSS Selector
    const pageTitleLocator = await page.locator(".navbar-brand");
    const pageTitle = await pageTitleLocator.innerText();
    // console.log(pageTitle);

    // String Selector
    const textLocator = await page.locator("text=名刺管理アプリ");
    const pageText = await textLocator.innerText();
    console.log(textLocator)

    // xPath Selector
    const xPathLocator = await page.locator("//*[@id=\"__next\"]/nav/div/a");
    const xPathText = await xPathLocator.innerText();
    console.log(xPathText);

    await browser.close();
})();


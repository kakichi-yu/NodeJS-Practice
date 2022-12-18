import { chromium } from "@playwright/test";
import * as fs from "fs";
import { Parser } from "json2csv";
import env from "dotenv";
env.config();

/**
 * 練習問題
 * 3ページ目の役職が係長の人物名と会社名をすべてtest-data.csvに出力しなさい。
 * ※会社名が取れない場合にも処理が止まらないように例外処理を追加してください。
 * 
 * "company","name"
 * "山本金属株式会社","28 伊藤 友美"
 */
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.TARGET_URL);

  // pageer3Locator,forcount,if(役職)
  const pager3Locator = page.locator(".page-link.page-number >> nth=2");
  await pager3Locator.click();

  const cardLocators = page.locator('.cards.list-group-item');
  const cardsCount = await cardLocators.count();
  const fetchedCards = [];
  try {
    for (let i = 0; i < cardsCount; i++) {
      const cardLocator = cardLocators.locator(`nth=${i} >> a`);
      await cardLocator.click();

      const companyName = await page.locator('.company').textContent();
      const divisionName = await page.locator(".division").textContent();
      const name = await page.locator(".name").textContent();

      if (divisionName.match("係長")) {
        fetchedCards.push({
          company: companyName,
          division: divisionName,
          name: name
        })
      }

      const backLocator = page.locator('text=戻る');
      await backLocator.click();
    }

  } catch (error) {
    console.error(e);
  }

  // console.log(fetchedCards);
  const parser = new Parser();
  const csv = parser.parse(fetchedCards);
  fs.writeFileSync(process.env.OUTPUT_FILE, csv);

  await browser.close();
})();

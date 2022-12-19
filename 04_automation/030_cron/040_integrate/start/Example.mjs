import cron from "node-cron";
import { addEmployeeToGS } from "./google_sheet.mjs";
import { sendEmail } from "./email.mjs";

cron.schedule("23 8 * * *", () => {
    main();
})

async function main() {
    const dt = new Date;
    const dtStr = dt.toDateString();
    const sheetURL = `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}`;
    try {
        await addEmployeeToGS();
        sendEmail("処理が成功しました", `処理時刻：${dtStr} \n URL:`)
    } catch (e) {
        sendEmail("エラーが発生しました", `エラー発生時刻：${dtStr} \n ${e}`);
    }
}
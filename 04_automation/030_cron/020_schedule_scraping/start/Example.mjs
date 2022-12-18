import { addEmployeeToGS } from "./google_sheet.mjs";
import cron from "node-cron";

cron.schedule("23 8 * * *", () => {
    addEmployeeToGS();
})
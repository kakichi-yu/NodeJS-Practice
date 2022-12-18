import { GoogleSpreadsheet } from "google-spreadsheet";
import env from "dotenv";
env.config();
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const secrets = require("../../../google_secret.json");

// 1JMdpmWcPLzfbIrOe_wUPEbn2TpclU9L3vdfy9g56H-g
(async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    })

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells("A1:C4");

    const a1 = sheet.getCell(0,0);
    // const b2 = sheet.getCellByA1("B5")

    // console.log("b2", b2.value);
})();
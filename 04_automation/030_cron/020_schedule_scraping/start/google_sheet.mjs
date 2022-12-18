import { GoogleSpreadsheet } from 'google-spreadsheet';
import env from 'dotenv';
import { getEmployeesByScraping  } from './scraping.mjs';
env.config();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secret.json');

async function addEmployeeToGS(){
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle[ "scraping" ];

  const employees = await getEmployeesByScraping();
  const rows = await sheet.addRows(employees);
  rows.forEach(row => async() => {await row.save();
    
  });
};

export { addEmployeeToGS }
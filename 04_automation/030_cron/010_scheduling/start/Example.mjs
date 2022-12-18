import cron from "node-cron";

cron.schedule('* * * * * *', () => console.log("毎秒実施"));
cron.schedule('3 * * * * *', () => console.log("3秒ごと実施"));
// 's(optional) m h d w y'
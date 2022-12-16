// console.log('hello, node.js');
// fileへの書き込み
const fs = require("fs");
const path = require("path");

// console.log(__dirname);
// __dirname currentDirまでのpath

const distPath = path.resolve(__dirname, "..", "dist","test.txt");
console.log(distPath);

// fs.writeFileSync(distPath, "HELLO,Node.js");

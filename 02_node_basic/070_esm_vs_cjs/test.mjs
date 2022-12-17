import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log(__filename);
// console.log(__dirname);

// const __dirname2 = fileURLToPath(new URL('.', import.meta.url)); // "."はPathを指定しない


// console.log(new URL('.', import.meta.url));

const require = createRequire(import.meta.url)
const jsonObj = require('./sample.json');
console.log(jsonObj)
import * as http from 'http';
import express from 'express';

const PORT = 8080;
const app = express();

app.get('/', function(req, res) {
    res.json({message : 'hello', number: 1, array: [ "banaba","orange"]}); // objで返すとjsonに変換
})

app.listen(PORT, function() {
    console.log(`Server start: http://localhost:${PORT}`)
});

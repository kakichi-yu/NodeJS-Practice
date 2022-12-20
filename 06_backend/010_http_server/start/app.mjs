import * as http from "http"; //NodeJS標準

// http.createServer(callback(){})
// nodemon JSの記述をすぐに反映させる
const server = http.createServer(function(req, res){
    console.log(req.url);
    res.end("godd night");
})

server.listen(8080);
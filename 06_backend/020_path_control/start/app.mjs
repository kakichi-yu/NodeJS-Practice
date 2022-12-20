import * as http from "http";

// req.urlに対してif文の条件分岐はあまりしない。explessを使う。
const server = http.createServer(function(req, res) {
    console.log(req.url);
    if(req.url == "/hello"){
        res.end("hello")
        return;
    }
    if(req.url == "/bye"){
        res.end('bye');
        return;
    }
    res.end("other");
});

server.listen(8080);
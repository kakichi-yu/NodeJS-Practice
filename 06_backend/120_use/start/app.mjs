import express from 'express';

/*
# useとexpress
## ルートハンドラとミドルウェア
- request -> (middleware) -> route handler
- use vs get (部分一致 vs 完全一致)

## next()の使い方
- nextの必要性
- next後の処理も実行される
− nextで例外処理を呼び出す 
  - res.sendの多重呼び出しを防ぐ
*/

const PORT = 8080;
const app = express();

app.use(express.json());

// ミドルウェア：ルートハンドラの前(後)に行われる処理
app.use('/', function(req, res, next) {
  console.log("/ start");
  next("error");
});

// ルートハンドラ：パスとメソッドに紐付くメインの処理
// 1つのrouteHandlerに対し１つのゲットメソッド
app.get('/', function(req, res, next) {
  console.log("/ get")
});

//errorHandler
app.use(function(error,req,res,next){
  if(res.headersSent){
    return;
  }
  res.json({ error: error });
})

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});

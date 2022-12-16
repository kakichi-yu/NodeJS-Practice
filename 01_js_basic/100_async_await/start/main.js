// 非同期処理（Await/async）
let a = 0;


// resolve()が宣言されるまでwaitする
// 親ﾒｿｯﾄﾞには asyncをつける
// Promiseのメソッドである
// 従来のcatchをしたい場合は、try~catch文
init();
async function init(){
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                resolve(a)
            }, 2000);
        })
        console.log(a);
    } catch (e) {
        console.log("catch",e)
    }
}
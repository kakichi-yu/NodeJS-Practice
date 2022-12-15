// 同期処理（順次実行）
let a = 0;
console.log(a);

// 非同期処理
new Promise((resolve, reject) => {
    // setTimeout()が読み込まれた後
    // resolve()実行し、then(/*処理*/)
    // reject()はresolveが実行されなかったときにcatch(/*処理*/)
    setTimeout(() => {
        a = 1;
        resolve(a)
        reject(a)
    }, 2000);
}).then((b) => {
    console.log(b);
    return b;
}).then((b) => {
    console.log(b * 2);
}).catch(() => {
    console.log("reject");
})


// setTimeout(() => {
//     a = 1;
//     console.log(a);
// }, 2000);

console.log(a);
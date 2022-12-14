const arry = [10, 20, 30, 40];
const newArry = [];

arry.forEach(element => {
    if(element * 2 > 50){
        newArry.push(element * 2);
    }
});

console.log(newArry);

// mapﾒｿｯﾄﾞ　配列に対しforEachしている
const newArry2 = arry.map((val, i, arry) => {
    console.log(val, i, arry)
})

// filterﾒｿｯﾄﾞ　配列に対し条件ﾌｨﾙﾀする
const newArry3 = newArry2.filter(val => val > 50);

console.log(newArry2);
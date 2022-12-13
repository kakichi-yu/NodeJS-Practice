
// Annonimous Function
function fn(number) {
  return number * 2;
}

const fnNum = function(number){
  return number * 2;
}

// Arrow Function
const fnArrow = (number) => {
  return number * 2;
}

//Objectを返す時は()ﾘﾃﾗﾙで返す
const fnArrowObj = (number) =>  ({
  result: number * 2
})
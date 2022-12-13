
// node Element DOM DOMObject
const h1Element = document.querySelector("h1");
console.dir(h1Element);

h1Element.textContent = "変更後のタイトル";

const button = document.querySelector("button");
const clickFn = (e) => {
    console.dir(e.target);
    console.log("click");
}
button.addEventListener("click", clickFn);
// e is event
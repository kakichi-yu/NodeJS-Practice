/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const getBtn = document.getElementById("btn-get");
const saveBtn = document.getElementById("btn-save");
const inputUrl = document.getElementById("input-url");
const img = document.querySelectorAll("img");
const msg = document.getElementById("msg");
const result = document.getElementById("result");

getBtn.addEventListener("click", () => {

    const targetUrl = inputUrl.value;

    const imgUrls = ["http://localhost:3000/villa-1.jpg", "http://localhost:3000/villa-2.jpg"];

    let imgHtmlStr = ""
    imgUrls.forEach(imgUrl => {
        imgHtmlStr += `<img src="${imgUrl}" />`
    });
    result.innerHTML = imgHtmlStr;
})

saveBtn.addEventListener("click", () => {
    const result = "success";
    const MSGs = {
        "success": "保存に成功しました",
        "failed": "失敗しました",
        "cancel": "中断しました"
    };

    msg.textContent = MSGs[result]
})
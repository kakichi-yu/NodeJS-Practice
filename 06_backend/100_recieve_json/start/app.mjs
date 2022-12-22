import * as http from 'http';
import express from 'express';

const PORT = 8080;
const app = express();

app.use(express.json());

//JSONをCLIから飛ばす
app.get('/', function (req, res) {
  res.send(`
    <form action="/result" method="POST">
      <input type="text" name="title">
      <input type="text" name="description">
      <input type="submit">
    </form>
    <script>
    const formEl = document.querySelector("form");
    formEl.onsubmit = function(event){
      event.preventDefault(); 
      const title = formEl[0].value;
      const desc = formEl[1].value;

      const data = {
        title,
        desc
      }
      fetch("/result", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data) 
      }).then(async((res) => {
        const data = await return res.json();
        console.log(data)
      }))
    }
    </script>
    `);
});

app.post('/result', function (req, res) {
  const params = req.body;
  console.log(params);
  // res.json({ msg: "sucsses"});
});

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});

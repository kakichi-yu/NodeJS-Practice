import express from "express"
import apiRoutes from "./server/api-routes/index.mjs"
import "./server/helpers/db.mjs"
import env from "dotenv"
env.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api", apiRoutes);

app.listen(port, () => {
    console.log(`Server Start : http://localhost:${port}`)
})
import env from "dotenv";
env.config();
import { MongoClient, ServerApiVersion, } from "mongodb";
import assert from "assert";

// const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(function (err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
// });

async function getCollection(){
    try{
        await client.connect();
        const db =  client.db("bookshelf");
        return  db.collection("books");
    }catch{
        console.log("NG")
        await client.close();
    }
}

await getAllBooks();
async function getAllBooks(){
    const col = await getCollection();
    const cursor = col.find({});
    const result = await cursor.toArray();
    console.log(result);

    await client.close();
}
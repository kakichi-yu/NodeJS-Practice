import env from 'dotenv';
env.config();

import { MongoClient, ServerApiVersion } from 'mongodb';
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function getCollection() {
  try {
    console.log(client)
    await client.connect();
    const db = client.db('bookshelf');
    return db.collection('books');
  } catch {
    // await client.close();
  }
}

getAllBooks();
async function getAllBooks() {
  const col = await getCollection();
  console.log(col);
  // const cursor = col.find();
  // const result = await cursor.toArray();
  // console.log(result);

//   await client.close();
}

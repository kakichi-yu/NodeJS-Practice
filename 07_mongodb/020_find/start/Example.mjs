import env from 'dotenv';
env.config();

import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function getCollection() {
  try {
    await client.connect();
    const db = client.db('bookshelf');
    return db.collection('books');
  } catch {
    await client.close();
  }
}
// クエリ
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://www.mongodb.com/docs/manual/reference/operator/query/regex/

getAllBooks();
async function getAllBooks() {
  const col = await getCollection();
  debugger;
  // let cursor = col.find({ $or: [{ rating: 3 }, { title: "潮騒" }] });
  // let cursor = col.find({ _id: new ObjectId("63566ef3c58f15f29410dc90") })
  let cursor = col.find({ rating: { $gt: 2, $lte: 5 } }).sort({ rating: 1 })
  const result = await cursor.toArray();
  console.log(result);

  await client.close();
}

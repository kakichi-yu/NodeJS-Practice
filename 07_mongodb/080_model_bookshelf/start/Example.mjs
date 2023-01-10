import mongoose, { connect, Schema, model, Mixed } from 'mongoose';
import env from 'dotenv';
env.config();

/**
String: 文字列
Number: 数値
Date: 日付
Buffer: バイナリデータ
Boolean: 真偽
Mixed: なんでもOK
ObjectId: Mongo固有のID
Array: 配列
Decimal128: 浮動小数点
Map: マップ
Schema: 他のスキーマ
 */
connect(process.env.MONGO_URI);

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, },
  rating: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
  comment: { type: String, required: true },
  dt: {
    type: Date,
    set: function (newVal) {
      return new Date(newVal);
    },
    get: function (val) {
      return val instanceof Date ? val : new Date(val)
    }
  },
  arry: [String],
  anything: Mixed,
}, { timestamps: true });
const Book = model('Book', bookSchema);

const books = new Book();
books.title = 'Zildjian';
books.description = "description";
books.rating = "5";
books.comment = "comment";

books.save().then((doc) => {
  console.log(doc._id)
  mongoose.connection.close();
});

// await init();
// async function init() {
//   const registerdBook = await book.save();
//   console.log(registerdBook._id);
//   mongoose.connection.close();
// }

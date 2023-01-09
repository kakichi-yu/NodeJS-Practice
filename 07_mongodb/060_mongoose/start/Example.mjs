import mongoose from "mongoose"
import env from "dotenv"
// const mongoose = require('mongoose');
env.config();
mongoose.connect(process.env.MONGO_URI);

const Cat = mongoose.model('Book', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
import { connect, Schema, model } from "mongoose"
import env from "dotenv"
// const mongoose = require('mongoose');
env.config();
// mongoose.connect(process.env.MONGO_URI);
connect(process.env.MONGO_URI)
// const catSchema = new mongoose.Schema({ name: String })
const catSchema = new Schema({
    name: { type: String, required: true },
    size: { type: Number, required: true },
    bool: { type: Boolean, default: false },
    dt: {
        type: Date,
        set: function (newVal) { return new Date(newVal); },
        get: function (val) { return val instanceof Date ? value : new Date(val); }
    },
    arry: []
})
// const Cat = mongoose.model('Cat', catSchema); //schemaCLASS
const Cat = model('Cat', catSchema);

const kitty = new Cat({ name: 'Zildjian' });
kitty.size = 100;
kitty.dt = "2023-01-09"
kitty.save().then(() => console.log('meow'));
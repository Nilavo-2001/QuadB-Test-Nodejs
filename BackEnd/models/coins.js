import mongoose from "mongoose";

const coinSchema = new mongoose.Schema({
    name: String,
    last: String,
    buy: String,
    sell: String,
    volume: String,
    base_unit: String,
})

const coindb = mongoose.model("coins", coinSchema);

export default coindb;
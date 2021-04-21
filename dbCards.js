// data schema to outline structure of tinder cards within database

import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model("Cards", cardSchema);
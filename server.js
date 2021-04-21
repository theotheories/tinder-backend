import express from  "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:yaXLjR9BGVxWYhoz@cluster0.h7tki.mongodb.net/tinderDB?retryWrites=true&w=majority"

// middlewares
app.use(express.json());
app.use(Cors());

// db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// api endpoints - get, post, update....
app.get("/", (request, response) => response.status(200).send("hello"));
app.post("/cards", (request, response) => {
    const dbCard = request.body;
    Cards.create(dbCard, (error, data) => {
        if (error) {
            response.status(500).send(error);
        };
        response.status(201).send(data);
    })
});
app.get("/cards", (request, response) => {
    Cards.find((error, data) => {
        if (error) {
            response.status(500).send(error);
        };
        response.status(200).send(data);
    })
});


// listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
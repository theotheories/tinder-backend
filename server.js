import express from  "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// App config
const app = express();
const { PORT, USERNAME_AND_PASSWORD, DB_NAME }  = process.env;


const connection_url = `mongodb+srv://${USERNAME_AND_PASSWORD}@${DB_NAME}?retryWrites=true&w=majority`

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
app.post("/tinder/cards", (request, response) => {
    const dbCard = request.body;
    Cards.create(dbCard, (error, data) => {
        if (error) {
            response.status(500).send(error);
        };
        response.status(201).send(data);
    })
});
app.get("/tinder/cards", (request, response) => {
    Cards.find((error, data) => {
        if (error) {
            response.status(500).send(error);
        };
        response.status(200).send(data);
    })
});


// listener
app.listen(PORT, () => console.log(`listening on localhost: ${PORT}`));
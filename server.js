import express from  "express";
import mongoose from "mongoose";

// App config
const app = express();
const port = process.env.PORT || 8001;

// middlewares

// db config

// api endpoints
app.get("/", (request, response) => response.status(200).send("hello"));

// listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
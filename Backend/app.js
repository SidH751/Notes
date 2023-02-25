const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();
dotenv.config();

const notesRouter = require('./Routers/Notes')

app.use(express.json())
app.use('/notes', notesRouter);

mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);
const con = mongoose.connection;
con.on('open', () => {
    console.log("connected to db");
})


app.listen(8000, () => {
    console.log("Server started");
});
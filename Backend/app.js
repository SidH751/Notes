const express = require('express');

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express();

const notesRouter = require('./Routers/Notes')

app.use(express.json())
app.use('/notes', notesRouter);

mongoUrl = "mongodb+srv://SidH:123789456@notesdb.4hrur8x.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl);
const con = mongoose.connection;
con.on('open', () => {
    console.log("connected to db");
})


app.listen(8000, () => {
    console.log("Server started");
});
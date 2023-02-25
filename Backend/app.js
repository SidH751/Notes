const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set('strictQuery', false);
const app = express();
dotenv.config();


const notesRouter = require('./Routers/Notes')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/notes', notesRouter);

mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);
const con = mongoose.connection;
con.on('open', () => {
    console.log("connected to db");
})


app.listen(port, () => {
    console.log(`Server started ${port}`);
});
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const hintRoutes = require('./routes/hints');
const cors = require('cors');

const app = express();

// middleware
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// routes
app.use('/api/hints', hintRoutes);

// connect to DB, then begin listening
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to DB");
        app.listen(process.env.PORT, () => {
            console.log("Listening on port", process.env.PORT);
        });
    })
    .catch(e => {
        console.log(e);
    });

import express from 'express';
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello Senati, Buenas Noches!');
});

const port string = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
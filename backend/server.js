import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get ('/products', (req, res) => {
    res.send('Server is ready...');
});
app.listen(5000, () => {
    console.log('Server started at  http://localhost:5000');
    });


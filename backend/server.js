import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';



const app = express();

app.listen(5000, () => {
    console.log('Server started at  http://localhost:5000');
    });


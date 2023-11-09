import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const app = express();



mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log('MongoDB connection error:', err);
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

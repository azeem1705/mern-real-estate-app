import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/authRoute.js';
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

app.use(express.json());
app.use("/api/v1/auth",authRouter)


app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import kaleidoscopeRoutes from './routes/kaleidoscopeRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/kaleidoscope',kaleidoscopeRoutes);

app.get('/', async(req,res)=>{
    res.send("<h1>Hello from Kaleidoscope!</h1>");
})

const startServer = async ()=>{

    try {
        connectDB(process.env.MONGODB_URL)
    
        app.listen(8000 , ()=>{
        console.log(`App is running on Port: 8000`)
        })
    }

    catch (error) {
        console.log(error);
    }

}

startServer();
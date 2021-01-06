import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import apiRoutes from './routes/api.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware for properly sending requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/posts',postRoutes);
app.use('/api', apiRoutes);
//app.use('/posts', postsRoute);

mongoose.connect( process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => 
        app.listen(PORT, () =>
            console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
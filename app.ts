import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import router  from './routes';
import mongoDbConnect from './configDb/connectMongo';
dotenv.config();
const app = express();   
mongoDbConnect();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/v1', router);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
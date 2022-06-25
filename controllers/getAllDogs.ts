import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios'
import sortDogsApi from '../utils/dataSort';

const url = `${process.env.URL_API_DOG}${process.env.API_KEY}`;

const getAlldogs = async (req: Request, res: Response) => {
    try{
        const dogsApi = await axios.get(url);
        const dataSort = dogsApi.data.map((dog:sortDogsApi) => sortDogsApi(dog));
        return res.json(dataSort);

    }catch(err){
        console.log(err);
        return res.status(500).send(err);
    }
         
 
};

export default getAlldogs;
import { Router, Request, Response } from 'express';
import { Dogs } from '../models/dogs';
import { units, Idog } from '../utils/units';
import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios'
import sortDogsApi from '../utils/dataSort';

const url = `${process.env.URL_API_DOG}${process.env.API_KEY}`;

const getAlldogs = async (req: Request, res: Response) => {
    try{
        const dogsApi = await axios.get(url);
        const dataSort = dogsApi.data.map((dog:sortDogsApi) => sortDogsApi(dog));
        const dogsDb = await Dogs.find();
        const dogsMap = dogsDb.map((dog:Idog) => units(dog));

        //call back sort
        const SortArray=(x:Idog, y:Idog)=>{
            return x.name.localeCompare(y.name);
          };
        const response = dataSort.concat(dogsMap).sort((SortArray));
        return res.json(response);

    }catch(err){
        console.log(err);
        return res.status(500).send(err);
    }
         
 
};

export default getAlldogs;
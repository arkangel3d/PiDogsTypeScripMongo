import axios from 'axios';
import {  Request, Response } from 'express';
import { Dogs } from '../models/dogs';
import { Temperaments } from '../models/temperamts';
import sortDogsApi from '../utils/dataSort';
import { units, Idog } from '../utils/units';

const url = `${process.env.URL_API_DOG}${process.env.API_KEY}`;
interface ItemDog {
    id : number;
    name : string;
    temperament : [string];
};
const reFillterTemperaments = async (req: Request, res: Response) => {
    try{
        const dogsApi = await axios.get(url);
        const dataSort = dogsApi.data.map((dog:sortDogsApi) => sortDogsApi(dog));
        const dogsDb = await Dogs.find();
        const dogsMap = dogsDb.map((dog:Idog) => units(dog));
        const getTemperamentDataBase = await Temperaments.find();

        let response = dataSort.concat(dogsMap);
        let temperamentDog = getTemperamentDataBase.map((element) => {
            let arrayDogs : Array<ItemDog> = [];
            response.forEach((dog:Idog) => {
              //let arrayTemperamets = dog.temperament?.split(", ");
        
              if (dog.temperament?.some((t:String) => t === element.name)) {
                arrayDogs.push({id:dog.id,name:dog.name,temperament:dog.temperament});
              }
            });
            let obj = {
              id : element.id,
              temperament: element.name,
              raza: arrayDogs,
            };
            return obj;
          });
          res.json(temperamentDog);

    }catch(err){
        console.log(err);
        return res.status(500).send(err);
    };
};
export default reFillterTemperaments;
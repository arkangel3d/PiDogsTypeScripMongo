import { Dogs } from '../models/dogs';
import axios from 'axios';
import { Request, Response } from 'express';
import sortDogsApi from '../utils/dataSort';
const getDogById = async (req: Request, res: Response) => {
    const  id  = req.params.id;
    try {
        if(Number(id) > 300){
            const dog = await Dogs.findOne({id: id});
            if(dog){
                return res.json(dog);
            };
            return res.json({ msg: "id no encontrado" })
        };
        const url = `${process.env.URL_API_DOG}${process.env.API_KEY}`;
        const dogsApi = await axios.get(url);
       
        const dog = dogsApi.data.find((dog: any) => dog.id === Number(id));
        
        if(dog){
           const response = sortDogsApi(dog);
            return res.json(response);
        }
        return res.json({ msg: " no encontrado" })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

export default getDogById;
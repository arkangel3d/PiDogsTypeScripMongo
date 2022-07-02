import { Request, Response } from 'express';
import { Dogs } from '../models/dogs';
import { units, Idog } from '../utils/units';
import { Query } from 'mongoose';
const getMyDogs = async (req: Request, res: Response) => {
    
    try {
        const dogs = await Dogs.find().select('-_id');
        const dogsData = dogs.map((dog: Idog) => units(dog));
        return res.json(dogsData);
    } catch (error) {
        return res.status(500).send(error);
    }
    

};

export default getMyDogs;
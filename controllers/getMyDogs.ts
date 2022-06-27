import { Request, Response } from 'express';
import { Dogs } from '../models/dogs';

const getMyDogs = async (req: Request, res: Response) => {
    
    try {
        const dogs = await Dogs.find();
        return res.json(dogs);
    } catch (error) {
        return res.status(500).send(error);
    }
    

};

export default getMyDogs;
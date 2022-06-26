import { Request, Response } from 'express';
import { Dogs } from "../models/dogs";

const createDog = async (req: Request, res: Response) => {
    try {
        const dog = await Dogs.create(req.body);
        return res.json(dog);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

export default createDog;
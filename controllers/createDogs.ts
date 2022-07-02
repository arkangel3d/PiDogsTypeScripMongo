import { Request, Response } from 'express';
import { Dogs } from "../models/dogs";
import idGenerator from "../utils/idGenerator";
const createDog = async (req: Request, res: Response) => {
    const { name, life_span } = req.body;
    let id = await idGenerator(name, life_span);
    req.body.id = id;
    try {
        const dog = await Dogs.create(req.body);
        return res.status(201).json(dog);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

export default createDog;
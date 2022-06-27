import { Request, Response } from 'express';
import { Dogs } from "../models/dogs";

const updateDog = async (req: Request, res: Response) => {
    const { action } = req.query;
    const id = req.body.id;
    try {
        if(action === 'update'){
        const dog = await Dogs.findOneAndUpdate(id, req.body);
        return res.status(201).send('It has updated')
        };
        if(action === 'delete'){
            const dog = await Dogs.findOneAndDelete(id);
            return res.status(201).send('erased dog');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

export default updateDog;
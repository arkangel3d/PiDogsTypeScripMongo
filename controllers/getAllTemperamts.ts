import {Request, Response} from 'express';
import { Temperaments } from "../models/temperamts";

const getAllTemperamts = async (req: Request, res: Response) => {
    try {
        const temperamts = await Temperaments.find();
        return res.json(temperamts);
    } catch (error) {
        return res.status(500).send(error);
    };
};

export default getAllTemperamts;
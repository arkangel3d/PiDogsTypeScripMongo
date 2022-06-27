import copyTemp from '../utils/copyTemperaments';
import { Request, Response } from 'express';
import axios from 'axios';

const copyTemps = async (req: Request, res: Response) => {
 const url = `${process.env.URL_API_DOG}${process.env.API_KEY}`;
 const dataApi = await axios.get(url); 
 try {
    await copyTemp(dataApi.data);
    return res.send('temperamentos copiados');
 } catch (error) {
    return res.send('temperamentos no copiados, o fueron copiados anteriormente');
 }
};

export default copyTemps;
import { Request, Response } from 'express';
import dataDogs from '../utils/dataDogs';


const getAlldogs = async (req: Request, res: Response) => {
    const query = req.query.name;
    try{
          const dogs = await dataDogs(query);
          return res.json(dogs);

    }catch(err){
        console.log(err);
        return res.status(500).send(err);
    }
         
 
};

export default getAlldogs;
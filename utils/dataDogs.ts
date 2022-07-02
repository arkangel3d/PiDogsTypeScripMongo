import axios from 'axios';
import { Dogs } from '../models/dogs';
import { units, Idog } from '../utils/units';
import sortDogsApi from './dataSort';
const dataDogs = async (query:any) => {
    const url = `${process.env.URL_API_DOG}${process.env.API_KEY}`;
    try{
        const dogsApi = await axios.get(url);
        const dataSort = dogsApi.data.map((dog:sortDogsApi) => sortDogsApi(dog));
        const dogsDb = await Dogs.find();
        const dogsMap = dogsDb.map((dog:Idog) => units(dog));
    
        //call back sort
        const SortArray=(x:Idog, y:Idog)=>{
            return x.name.localeCompare(y.name);
          };
        const response = dataSort.concat(dogsMap).sort((SortArray));
        if(query){
            return response.filter((dog:Idog) => dog.name.toLowerCase().includes(query.toLowerCase()));
        }
        return response;
    }
    catch(err){
        console.log(err);
        return err;
    }
};

export default dataDogs;
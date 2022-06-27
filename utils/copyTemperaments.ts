import { Temperaments } from '../models/temperamts';

const copyTemp = async(objs:any)=>{
    let temperaments:any = []
    objs.map((dog:any)=>{
        let dataTemperament = dog.temperament?.split(', ');
         dataTemperament?.forEach((element:any)=>{
            
          temperaments.push(element)
         })
      })
      
    let temperamentFill = [...new Set(temperaments)]
    
    
    await Promise.all(temperamentFill.map(async(temp)=> {
        if(temp){
            
            return await Temperaments.create({name:temp})
        }
    }));
   
   
};

export default copyTemp;
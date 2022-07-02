import { Temperaments } from '../models/temperamts';

const copyTemp = async(objs:any)=>{
    let temperaments:Array<String> = []
    objs.map((dog:any)=>{
        let dataTemperament = dog.temperament?.split(', ');
         dataTemperament?.forEach((element:String)=>{
            
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
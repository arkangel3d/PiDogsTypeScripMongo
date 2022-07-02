import { Dogs } from '../models/dogs';
let idGenerator= async (name:String,life_span:String) =>{
    let id = 0;
    let validate = true;
    while(validate){
        let num1 = Number(life_span.slice(0,1));
        let num2 = name.length;
        let num3 = Math.floor(Math.random()*13);
        let num4 = Math.floor(Math.random()*157);
          id =300+num2+num1*num3*num4;
        let validateId= await Dogs.findOne({id});
        if(!validateId){
            validate=false
        };
    };
     return id;
    };

    export default idGenerator;
import { Schema, model } from 'mongoose';



interface Itemperamts {
    name: string;
  };

  const temperamentsSchema = new Schema<Itemperamts>({
   
    name: { 
        type: String, 
        required: true, 
        unique: true
    },
    
  });

  export const Temperaments = model<Itemperamts>('Temperaments', temperamentsSchema);
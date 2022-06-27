import { Schema, model } from 'mongoose';



interface Idogs {
    id: number;
    name: string;
    height: any;
    weight: any;
    life_span: string;
    image: string;
    temperament: [string];
 
  }

  const dogsSchema = new Schema<Idogs>({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: { 
        type: String, 
        required: true 
    },
    height: { 
        type:   Object, 
        required: true,
    },
    weight: { 
        type: Object, 
        required: true ,
    },
    life_span: { 
        type: String, 
        required: true 
    },
    image: {
        type: String,
        required: true,
    },
    temperament: {
        type: [String],
    }
    
  });

  export const Dogs = model<Idogs>('Dogs', dogsSchema);
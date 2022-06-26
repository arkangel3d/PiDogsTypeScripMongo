import { Schema, model, VirtualType } from 'mongoose';


interface Idata {
    imperial: string;
    metric: string;
  
  }
interface Idogs {
    id: number;
    name: string;
    height: any;
    weight: any;
    life_span: string;
    imperial: string;
    metric: string;
    heightConvertions: string;
    weightConvertions: string;
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
    
  });

  dogsSchema.virtual('heightConvertions').
  get(function() {
    let value = this.height;
      
    let nums = value?.split(" - ");

    const toMetric1 = Math.round(Number(nums[0]) * 2.54).toString();
    const toMetric2 = Math.round(Number(nums[1]) * 2.54).toString();
    const metric = `${toMetric1} - ${toMetric2}`;

    return { imperial: value, metric: metric };
    });
    dogsSchema.virtual('weightConvertions').
    get(function() {
        let value = this.weight;
        let nums = value?.split(" - ");
          const toMetric1 = Math.round(Number(nums[0]) / 2.2).toString();
          const toMetric2 = Math.round(Number(nums[1]) / 2.2).toString();
          const metric = `${toMetric1} - ${toMetric2}`;

          return { imperial: value.toString(), metric: metric };
        });

  export const Dogs = model<Idogs>('Dogs', dogsSchema);
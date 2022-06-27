
// interface Idog {
 
//     id: number;
//     name: string;
//     height:{
//     imperial: string;
//     metric: string;
//     };
//     weight:{
//         imperial: string;
//         metric: string;
//     };
//     life_span: string;
//     temperament: [string];
//     image: {
//         url: string
//     };
   
//   }
interface Idog {
    id: number;
    name: string;
    height: any;
    weight: any;
    life_span: string;
    image: string;
    temperament: [string];
 
  }

const units = (dog:Idog)=>{
    let dogHeight = dog.height;
    let dogWeight = dog.weight;
    
          let numsDogHeight = dogHeight?.split(" - ");
          const toMetric1 = Math.round(Number(numsDogHeight[0]) / 2.2).toString();
          const toMetric2 = Math.round(Number(numsDogHeight[1]) / 2.2).toString();
          const metric = `${toMetric1} - ${toMetric2}`;

          let numsDogWeight = dogWeight?.split(" - ");

          const toMetric1W = Math.round(Number(numsDogWeight[0]) * 2.54).toString();
          const toMetric2W = Math.round(Number(numsDogWeight[1]) * 2.54).toString();
          const metricW = `${toMetric1} - ${toMetric2}`;

          

    let dogData = {
       
        id: dog.id,
        name: dog.name,
        height:{
            imperial: dogHeight,
            metric: metric
        },
        weight:{
            imperial: dogWeight,
            metric: metricW
        },
        life_span: dog.life_span,
        temperament: dog.temperament,
        image : {
            url : dog.image
        }

    };
    return dogData;
};
export {units, Idog};
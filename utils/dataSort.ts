

interface image{
  
    url : string
}
interface sortDogsApi{
        id : number;
        name : string;
        height : string;
        weight : string;
        life_span : string;
        temperament : string;
        image : image;
}

let sortDogsApi = (dog: sortDogsApi)=>{
       
    
    let dogData = {
        id: dog.id,
        name: dog.name,
        height: dog.height,
        weight: dog.weight,
        life_span: dog.life_span,
        temperament: dog.temperament?.split(", "),
        image : {
     
            url : dog.image.url
        }

    }
    return dogData;
};

export default sortDogsApi;
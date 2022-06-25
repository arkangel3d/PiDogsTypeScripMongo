

interface image{
    id : string,
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
        temperament: dog.temperament,
        image : {
            id : dog.image.id,
            url : dog.image.url
        }

    }
    return dogData;
};

export default sortDogsApi;
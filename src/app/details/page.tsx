import Dog from "@/app/types/dog";

function DogDetails(dog: Dog){
    return(
        <p>{dog.name}</p>    
    )
}
export default DogDetails;
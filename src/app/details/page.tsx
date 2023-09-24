import Dog from "@/app/types/dog";

function DogDetails(searchParams?:[key: string] | string[]){
    let dog!:Dog;
    if (searchParams != undefined){
        console.log(searchParams.toString);
        //const obj = JSON.parse(searchParams.toString());
        //dog = obj;
    }
    return(
        //<p>{dog.name}</p> 
        <p>detail</p>
    )
}
export default DogDetails;
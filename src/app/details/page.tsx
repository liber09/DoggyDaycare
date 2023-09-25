import Dog from "@/app/types/dog";

function DogDetails(searchParams:string){
    let dog!:Dog;
    if (searchParams != undefined){
        console.log(searchParams);
        const obj = JSON.parse(searchParams);
        //dog = obj;
    }
    return(
        //<p>{dog.name}</p> 
        <p>detail</p>
    )
}
export default DogDetails;
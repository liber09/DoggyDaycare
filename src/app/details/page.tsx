"use client"
import Dog from "@/app/types/dog";
import { useSearchParams } from "next/navigation";

function DogDetails(){
        
        const searchParams = useSearchParams()
        const obj = searchParams.get("object");
        console.log(obj);
        if(obj != null){
            const dog = JSON.parse(obj);
            console.log(dog);
        }
        
    
    return(
        <p>{dog.name}</p> 
    )
}
export default DogDetails;
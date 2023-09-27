"use client"
import styles from './page.module.scss'
import Dog from "@/app/types/dog";
import { useSearchParams } from "next/navigation";
import Image from 'next/image';

const GenderImage = (condition: string) => {
    if (condition == "female"){
        return (
            <Image className={styles.genderImage}
                src={"/../images/female.png"}
                alt={"Female gender symbol"}
                height={50}
                width={50}>
            </Image>
        )
    }
    if (condition == "male"){
        return (
            <Image className={styles.genderImage}
                src={"/../images/male.png"}
                alt={"Male gender symbol"}
                height={50}
                width={50}>
            </Image>
        )
    }else{
        return (
            <div>condition</div>
        )
    }
}

function DogDetails(){
    const owner = {name:"testnissen", lastName:"nisse", phoneNumber:"23489072"}
    let dog:Dog = {name:"Test", age:4, chipNumber:"sd87324",sex:"male",breed:"test", img:"", present:false, owner: owner }
    const searchParams = useSearchParams()
    const obj = searchParams.get("object");
    if(obj != null){
        dog = JSON.parse(obj);
    }
        
    return(
        <div className={styles.container}>
            <div className={styles.card}>
            <Image className={styles.image}
                                src={dog.img.toString()}
                                alt={"image of dog.name"}
                                height={300}
                                width={300}
                            ></Image>
            <p className={styles.dogName}>{dog.name}</p>
            <p>Age: {dog.age.toString()}</p>
            <p>{dog.breed}</p>
            <p>{dog.chipNumber}</p>
            <p>{dog.sex}</p>
            <p><span className={styles.ownerName}>{dog.owner.name}</span><span className={styles.ownerLastName}>{dog.owner.lastName}</span></p>
            <p>{dog.owner.phoneNumber}</p>
            
            </div>
        </div>  
    )
}
export default DogDetails;
"use client"
import styles from './page.module.scss'
import Dog from "@/app/types/dog";
import { useSearchParams } from "next/navigation";
import Image from 'next/image';

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
            <div className={styles.namePresentContainer}>
                <div className={dog.present === true ? styles.present : styles.notPresent}></div>
                <p className={dog.sex === 'female' ? styles.dogNameFemale : styles.dogNameMale}>{dog.name}</p>
            </div>
            <p>Age: {dog.age.toString()}</p>
            <p>Breed: {dog.breed}</p>
            <p>Chipnumber: {dog.chipNumber}</p>
            <div className={styles.ownerInfo}>
                <p><span className={styles.ownerName}>{dog.owner.name}</span><span className={styles.ownerLastName}>{dog.owner.lastName}</span></p>
                <p>{dog.owner.phoneNumber}</p>
            </div>
            
            
            </div>
        </div>  
    )
}
export default DogDetails;
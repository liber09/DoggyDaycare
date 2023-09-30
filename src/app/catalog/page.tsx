/* eslint-disable @next/next/no-async-client-component */
"use client"
import { Key } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Dog from '../types/dog';
import Dialog from '@/components/dialog/Dialog';
import { useSearchParams } from "next/navigation";

const getDogs = async () => {

    const res = await fetch('https://api.jsonbin.io/v3/b/650d039e12a5d37659816079');

    if (!res.ok) {
        throw new Error("Could not retrieve dogs");
    }
    return res.json();
}

const Catalog = async () => {
    const owner = {name:"testnissen", lastName:"nisse", phoneNumber:"23489072"}
    let dog:Dog = {name:"Test", age:4, chipNumber:"sd87324",sex:"male",breed:"test", img:"", present:false, owner: owner }
    const searchParams = useSearchParams()
    const obj = searchParams.get("object");
    if(obj != null){
        dog = JSON.parse(obj);
    }

    const dogs = await getDogs();
    dogs.record.sort(function(x:Dog,y:Dog){
        return(x.present === y.present) ? 0 : x.present? -1 : 1;
    })
    return (
        <>
            <div className={styles.container}>
                <ul className={styles.dogList}>
                    {dogs.record.map((dog:Dog, index:Key) => (
                        <Link key={dog.chipNumber} className={styles.link} href={{ pathname: '/catalog', query:{showDialog:'y', object: JSON.stringify(dog)}}}>
                            <li className={styles.dogListItem} key={index}>
                                <div className={styles.card}>   
                                    <Image className={styles.image}
                                        src={dog.img.toString()}
                                        alt={`image of a ${dog.breed}`}
                                        height={100}
                                        width={100}
                                    ></Image>
                                    <div className={styles.namePresentContainer}>
                                        <div className={dog.present === true ? styles.present : styles.notPresent}></div>
                                        <p className={dog.sex === 'female' ? styles.dogNameFemale : styles.dogNameMale}>{dog.name}</p>
                                    </div>
                                    <p className={styles.dogAge}>Age: {dog.age.toString()}</p>
                                    
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            <Dialog title={dog.name} returnLink={"/catalog"}>
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
            </Dialog>
        </>
    )
}
export default Catalog;
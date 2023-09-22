import { Key } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';

interface Dog{
    name: String;
    sex: String;
    breed: String;
    img: string;
    present: boolean;
    age: Number;
    chipNumber: String;
    owner: Owner;
}

interface Owner{
    name: String;
    lastName: String;
    phoneNumber: String;
}

const getDogs = async () => {
    const res = await fetch('https://api.jsonbin.io/v3/b/650d039e12a5d37659816079');

    if (!res.ok) {
        throw new Error("Could not retrieve dogs");
    }
    return res.json();
}


const Catalog = async () => {
    const dogs = await getDogs();
    return (
        <div className={styles.container}>
            <ul className={styles.dogList}>
            {dogs.record.map((dog:Dog, index:Key) => (
                <li className={styles.dogListItem} key={index}>
                    <div className={styles.card}>
                        <Image
                            src={dog.img.toString()}
                            alt={"image of dog.name"}
                            height={100}
                            width={100}
                        ></Image>
                        <p>Name: {dog.name}</p>
                        <p>Sex: {dog.sex}</p>
                        <p>Age: {dog.age.toString()}</p>
                        <p>Breed: {dog.breed}</p>
                        <p>Owner: {dog.owner.name}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>
        
    )
}

export default Catalog;
import { Key } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import Dog from '../types/dog';

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
                <Link className={styles.link} href={'/details'}>
                    <li className={styles.dogListItem} key={index}>
                        <div className={styles.card}>
                            <Image className={styles.image}
                                src={dog.img.toString()}
                                alt={"image of dog.name"}
                                height={100}
                                width={100}
                            ></Image>
                            <p className={styles.dogName}>{dog.name}</p>
                            <p className={styles.dogGender}>Gender: {dog.sex}</p>
                            <p className={styles.dogAge}>Age: {dog.age.toString()}</p>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
        </div>
        
    )
}

export default Catalog;
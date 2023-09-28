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
    dogs.record.sort(function(x:Dog,y:Dog){
        return(x.present === y.present) ? 0 : x.present? -1 : 1;
    })
    return (
        <div className={styles.container}>
            <ul className={styles.dogList}>
            {dogs.record.map((dog:Dog, index:Key) => (
                <Link key={dog.chipNumber} className={styles.link} href={{ pathname: '/details', query:{object: JSON.stringify(dog)}}}>
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
    )
}
export default Catalog;
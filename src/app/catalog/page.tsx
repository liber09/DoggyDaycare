import { Key } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';

interface Dog{
    name: String;
    sex: String;
    breed: String;
    img: String;
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
        <div>
            <ul>
            {dogs.record.map((dog:Dog, index:Key) => (
                <li key={index}>
                    <p>Name: {dog.name}</p>
                    <p>Sex: {dog.sex}</p>
                    <p>Age: {dog.age.toString()}</p>
                    <p>Breed: {dog.breed}</p>
                    <p>Owner: {dog.owner.name}</p>
                    <p>_____________________</p>
                
                    </li>
            ))}
        </ul>
        </div>
        
    )
}

export default Catalog;
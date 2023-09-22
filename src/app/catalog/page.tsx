"use client"
import { useEffect, useState } from 'react';
import styles from './page.module.scss'

export default async function Catalog() {

    let [data, setData] = useState(false);

    useEffect(() => {
        const fetchData = async () =>{
            const res =  await fetch("https://api.jsonbin.io/v3/b/650d039e12a5d37659816079");
            data =  await res.json();
        }
        setData(true);
    }, [])
    return (
    <div>
        <p>Catalog page</p>
        {data}
    </div>
    )
}
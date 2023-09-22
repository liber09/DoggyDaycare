"use client"
import { useEffect, useState } from 'react';
import styles from './page.module.scss'

export default function Catalog() {

    const [data, setData] = useState(false);

    useEffect(() => {
        setData(true);
    }, [])
    return (
    <div>
        <p>Catalog page</p>
        {data}
    </div>
    )
}
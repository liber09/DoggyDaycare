"use client"
import { useState, useEffect } from 'react'
import styles from './menu.module.scss'
import Link from 'next/link'

export default function Menu() {
    const[isOpen,setIsOpen] = useState(false);

    function handleClick(this: any){
        setIsOpen(!isOpen);
    }
    function handleLinkClick(){
        if(isOpen){
            setIsOpen(false);
        }
    }



    return (
    <nav className={isOpen === false ? styles.main_nav : styles.main_nav_open}>
        <button onClick={handleClick} className={isOpen === false ? styles.main_nav_toggle : styles.main_nav_toggle_open}></button>
        <menu className={isOpen === false ? styles.main_menu : styles.main_menu_open}>
            <Link onClick={handleLinkClick} className={styles.link} href={"/catalog"}><li className={isOpen === false ? styles.main_menu_item : styles.main_menu_item_open}>Catalog</li></Link>
            <Link onClick={handleLinkClick} className={styles.link} href={"/register"}><li className={isOpen === false ? styles.main_menu_item : styles.main_menu_item_open}>Register dog</li></Link>
            <Link onClick={handleLinkClick} className={styles.link} href={"/employees"}><li className={isOpen === false ? styles.main_menu_item : styles.main_menu_item_open}>Employees</li></Link>
            <Link onClick={handleLinkClick} className={styles.link} href={"/schedule"}><li className={isOpen === false ? styles.main_menu_item : styles.main_menu_item_open}>Schedule</li></Link>
        </menu>
    </nav>
    )
}
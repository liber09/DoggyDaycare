import styles from './page.module.css'
import Link from 'next/link'

export default function Menu() {
    return (
    <nav className={styles.main_nav}>
        <button className={styles.main_nav_toggle}></button>
        <menu className={styles.main_menu}>
            <Link href={"/"}><li className={styles.main_menu_item}>Catalog</li></Link>
            <Link href={"/"}><li className={styles.main_menu_item}>Register dog</li></Link>
            <Link href={"/"}><li className={styles.main_menu_item}>Employees</li></Link>
            <Link href={"/"}><li className={styles.main_menu_item}>Schedule</li></Link>
        </menu>
    </nav>
    )
}
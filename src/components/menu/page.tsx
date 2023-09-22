import styles from './page.module.scss'
import Link from 'next/link'

export default function Menu() {
    return (
    <nav className={styles.main_nav}>
        <button className={styles.main_nav_toggle}></button>
        <menu className={styles.main_menu}>
            <Link href={"/catalog"}><li className={styles.main_menu_item}>Catalog</li></Link>
            <Link href={"/register"}><li className={styles.main_menu_item}>Register dog</li></Link>
            <Link href={"/employees"}><li className={styles.main_menu_item}>Employees</li></Link>
            <Link href={"/schedule"}><li className={styles.main_menu_item}>Schedule</li></Link>
        </menu>
    </nav>
    )
}
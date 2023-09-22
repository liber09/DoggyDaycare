import styles from './page.module.scss'

export default function Catalog() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Schedule</h1>
            <p>Here you can see a schedule for both dogs and employees</p>
        </div>
    )
}
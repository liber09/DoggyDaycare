import styles from './page.module.scss'

export default function Schedule() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Schedule</h1>
            <p className={styles.info}>Here you can see a schedule for both dogs and employees</p>
        </div>
    )
}
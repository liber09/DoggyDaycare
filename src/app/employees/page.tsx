import styles from './page.module.scss'

export default function Catalog() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Employees</h1>
        <p>Here you can see all our employees</p>
    </div>
    )
}
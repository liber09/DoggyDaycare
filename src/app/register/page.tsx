import styles from './page.module.scss'

export default function Catalog() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Register new dog</h1>
            <p className={styles.info}>Here you can register new dogs that arrive to our daycare center</p>
        </div>
        
    )
}
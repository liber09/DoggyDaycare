import styles from './footer.module.scss'

export default function Footer() {
    return (
      <div className={styles.container}>
      <footer className={styles.footer}>
        <p>(c)2023 Happy tails doggy daycare</p>
      </footer>
      </div>
    )
  }
import styles from './page.module.css'
import Image from 'next/image'

export default function Header() {
    return (
      <main className={styles.header}>
        <Image src={"/../images/cartoon-dogs.png"} alt="Logo with 5 cartoon dogs" width="200" height="136"></Image>
        <p className={styles.title}>Doggy Daycare</p>
      </main>
    )
  }
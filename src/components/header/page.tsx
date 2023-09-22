import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
      <main className={styles.header}>
        <Link href={"/"}><Image className={styles.logo} src={"/../images/cartoon-dogs.png"} alt="Logo with 5 cartoon dogs" width="100" height="68"></Image></Link>
        <p className={styles.title}>Doggy Daycare</p>
      </main>
    )
  }
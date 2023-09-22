import styles from './page.module.scss'
import Image from 'next/image'
import Menu from '../menu/page'

export default function Header() {
    return (
      <main className={styles.header}>
        <Image className={styles.logo} src={"/../images/cartoon-dogs.png"} alt="Logo with 5 cartoon dogs" width="100" height="68"></Image>
        <p className={styles.title}>Doggy Daycare</p>
        <Menu></Menu>
      </main>
    )
  }
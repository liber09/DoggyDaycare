import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
      <main className={styles.header}>
        <Link href={"/login"}>
          <Image className={styles.login} 
            src={"/../images/login.png"}
            alt="Login icon" 
            width="100" 
            height="100">
          </Image>
        </Link>
        <Link href={"/"}>
          <Image className={styles.logo} 
            src={"/../images/logo.png"} 
            alt="Logo with 5 cartoon dogs" 
            width="500" 
            height="500">
          </Image>
        </Link>
        
      </main>
    )
  }
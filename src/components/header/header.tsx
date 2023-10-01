"use client"
import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import LoginDialog from '../loginDialog/LoginDialog'
import Login from '../login/login'

export default function Header() {
    return (
      <>
        <header className={styles.header}>
          <Link href={"/"}>
            <Image className={styles.logo} 
              src={"/../images/logo.png"} 
              alt="Logo with a puppy dog playing with a butterfly" 
              width="500" 
              height="500">
            </Image>
          </Link>
          <Link href={{ pathname: 'login', query:{showLoginDialog:'y'}}}>
            <Image className={styles.login} 
              src={"/../images/login.png"}
              alt="Login icon" 
              width="100" 
              height="100">
            </Image>
          </Link>
          
        </header>

        <LoginDialog title={"Login"} returnLink={"/"}>
          <div className={styles.container}>
            <Login></Login>
          </div>
        </LoginDialog>
      </>
    )
  }
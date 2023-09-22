import Image from 'next/image'
import styles from './page.module.scss'
import Header from '@/components/header/page'

export default function Home() {
  return (
    
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to doggy daycare</h1>
    </main>
  )
}

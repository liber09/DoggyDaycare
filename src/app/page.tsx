import Image from 'next/image'
import styles from './page.module.scss'


export default function Home() {
  return (
    
    <main className={styles.main}>
      <Image className={styles.hero}
        src={"/../images/hero.png"}
        alt={"Hero image of a dog in a snowy landscape"}
        height={2356}
        width={3534}>
      </Image>
      <div className={styles.break}></div>
      <div className={styles.welcomeContainer}>
        <p className={styles.welcomeMessage}>
          Please allow us to make your everydaylife easier
        </p>
        <button className={styles.bookButton}>Make booking</button>
        <Image className={styles.welcomeImage}
          src={"/../images/dogwalking.jpg"}
          alt={"A man out walking with his dog. A bron/red dog."}
          height={944}
          width={542}>
        </Image>
      </div>
      
    </main>
  )
}

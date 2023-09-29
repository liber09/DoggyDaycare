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
      
    </main>
  )
}

import Image from 'next/image'
import styles from './page.module.scss'


export default function Home() {
  return (
    
    <main className={styles.main}>
      <Image className={styles.hero}
        src={"/../images/hero.png"}
        alt={"Image of a dog running towards the camera in a grass landscape"}
        height={2356}
        width={3534}>
      </Image>
      
    </main>
  )
}

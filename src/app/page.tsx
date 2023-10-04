import Image from 'next/image'
import styles from './page.module.scss'


export default function Home() {
  return (
    
    <main className={styles.main}>
      <Image className={styles.hero}
        src={"https://imageupload.io/ib/SMvfV7bUd7OoG6O_1696446684.png"}
        alt={"Image of a dog running towards the camera in a"}
        height={2356}
        width={3534}>
      </Image>
      <div className={styles.break}></div>
      <div className={styles.welcomeContainer}>
        <p className={styles.welcomeMessage}>
          Please allow us to make your everydaylife easier
        </p>
        <div className={styles.bookingButtonContainer}>
          <button className={styles.bookButton}>Make booking</button>
        </div>
        <Image className={styles.welcomeImage}
          src={"https://imageupload.io/ib/32uX6lacwtrjEQM_1696446682.jpg"}
          alt={"A man out walking with his dog. A brown/red dog."}
          height={944}
          width={542}>
        </Image>
      </div>
      
    </main>
  )
}

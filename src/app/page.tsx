import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <div>
            <Image
              src="/assets/Sprite_0492_Terrestre_chromatique_HOME.png"
              alt="Shaymin image"
              width={512}
              height={512}
              priority
              className={styles.shaymin}
            />
        </div>
    </main>
  )
}

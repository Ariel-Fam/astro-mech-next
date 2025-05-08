import Image from "next/image"
import styles from "../styles/HeroSection.module.css"


export default function HeroSection(){

        return(

            <section className={styles.hero}>
                <Image
                src="/images/hero_bg.png"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={80}
                priority
                />

                <div className={styles.overlay}>

                    <Image
                    src="/images/launch_logo.png"
                    alt="Main Logo"
                    width={400}
                    height={400}
                    />

                    <h1 className={styles.t1}>Astro Mech</h1>

                    <p className={styles.t2}>Join us as we explore the Ai generated planetary system called Cosmae.</p>

                </div>

            </section>
        )

}



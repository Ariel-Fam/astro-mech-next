import Image from "next/image"
import styles from "../styles/TextCard.module.css"



export default function TextCard({title, iconSrc, children}){


    return(

        <div className={styles.card}>

            <Image
            src={iconSrc}
            alt={`${title} icon`}
            height={200}
            width={200}
            className={styles.icon}
            />
            
            {/* <h3 className={styles.title}>{title}</h3> */}

            <p className={styles.body}>{children}</p>

    

        </div>
    )
}
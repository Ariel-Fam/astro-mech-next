"use client"

import React from "react";
import Image from "next/image";
import styles from "@/styles/planet_template.module.css"
export default function aerthys() {

    return(

        <>
        
        
        <section className={styles.hero}>

            <Image
            src="/planets/aerthys.png"
            alt="background"
            objectFit="cover"
            quality={80}
            layout="fill"
            priority
            />


            <div className={styles.overlay}>

                <Image
                src="/images/aerthys.png"
                alt="main logo"
                height={170}
                width={170}
                className={styles.image}
                quality={100}
                />

            </div>

        </section>

        <h1 className={styles.font} > Planet Description</h1>


        <div className="flex flex-col content items-center">

        <h3 className={styles.describe}>Imagine a realm where pastel dunes ripple beneath a lavender horizon, and dew-flecked blossoms unfurl in hidden alcoves. Here, a soft murmur of air currents carries the distant promise of rain, while towering spires of alabaster stone stand watch over glistening lakes. Bioluminescent moss carpets winding paths, guiding the curious through secret grottoes and along crystalline waterways. As twilight deepens, the sky ignites with prismatic radiance, painting every curve of the terrain in shifting hues. In this serene dominion, each footstep uncovers a new marvel—inviting you to wander, to pause, and to lose yourself in the boundless poetry of the unknown.</h3>
        </div>



        <h1 className={styles.font} > Planet Statistics</h1>


        <div className="flex flex-col content items-center">



        <table className={styles.mytable}>

            

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

            




        </tbody>




        </table>
        </div>


        
        
        </>


    )

}
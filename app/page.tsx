"use client"

import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import TextCard from '../components/TextCard'
import styles from '../styles/Home.module.css'
import FooterSection from "../components/FooterSection"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const cardData = [
  {
    title: "Aerthys",
    iconSrc: '/images/aerthys.png',
    body: 'A whimsical and enchanting name that conjures up images of a world with delicate landscapes, whispering winds, and a gentle climate, perhaps with vast expanses of clouds and mist-shrouded valleys.'
  },
  {
    title: 'Cosmara',
    iconSrc: '/images/cosmara.png',
    body: 'A serene and tranquil name that evokes feelings of peace and harmony, perfect for a terrestrial paradise.'
  },
  {
    title: 'Elyria',
    iconSrc: '/images/elyria.png',
    body: 'A world where music, art, and creativity flourish, perhaps with cities built into crystal spires or floating islands where the inhabitants cultivate their passions and talents.'
  },
  {
    title: "Kairos",
    iconSrc:"/images/kairos.png",
    body:"A planet where the passage of time is marked by significant events, cycles, and transformations, possibly with advanced technologies that manipulate chronology and causality."
  },
  {
    title: "Luminaria",
    iconSrc:"/images/luminaria.png",
    body:"A shining name that captures the beauty and radiance of a starlit world, perhaps with a thick atmosphere that scatters light in mesmerizing ways."
  },
  {
    title: "Nexarion",
    iconSrc:"/images/Nexarion.png",
    body:"A strong and sturdy name that suggests a planet with a robust infrastructure and a connection to its neighboring worlds, possibly with a rich history of interplanetary trade and commerce."
  },
  {
    title: "Stellaluna",
    iconSrc:"/images/stellaluna.png",
    body:"a world where stars are born, die, or undergo other transformations, perhaps with advanced astronomical research facilities and observatories that study the cosmos"
  },
  {
    title: "Terraverde",
    iconSrc:"/images/terraverde.png",
    body:"A terrestrial planet teeming with lush green forests, sparkling lakes, and diverse ecosystems, possibly with a strong emphasis on environmental stewardship and conservation."
  }
]

export default function Home() {

  const router = useRouter();


  // const changeRoute = (route:string) => {

  //   router.push(`/${route}`)

  // }

  let title = "*";

  const href = `/${title}`


  return (
    <>
      <Head>
        <title>Cosmae View</title>
        <meta name="description" content="A Next.js landing page example" />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>

      <HeroSection />

      

      <main className={styles.main}>
        <h2>Here are Cosmae's wide range of Planets that can be explored:</h2>
        <div className={styles.cardsGrid}>
          {cardData.map(({ title, iconSrc, body }) => (


            <Link key={title} href={href.replace("*", title.toLowerCase())}>


            <TextCard key={title} title={title} iconSrc={iconSrc}>
              {body}
            </TextCard>
            </Link>

          

            
          ))}

          
        </div>
      </main>

      <FooterSection />


    </>
  )
}

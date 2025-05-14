"use client"

import React from "react";
import Image from "next/image";
import styles from "@/styles/planet_template.module.css"
import Link from "next/link";

export default function aerthys() {


    const planetDesribe = "Visualize a domain where every zephyr carries a gentle serenade, and corridors of light refract through towering glass pinnacles, casting kaleidoscopic patterns across alabaster terraces. Here, levitating isles drift upon soft currents, each crowned with open-air ateliers where denizens coax color and form from the ether. Sonorous fountains pulse in sync with communal chorales, their ripples weaving through mosaic courtyards lined with intricate reliefs of past masterpieces. Suspended bridges of spun quartz connect floating sanctuaries, inviting wayfarers to explore galleries aloft or to join spontaneous gatherings beneath iridescent lanterns. In this realm of boundless inspiration, every structure hums with the echo of collective ingenuity—beckoning souls to shape their visions into living symphonies of light and stone."
    const orbitalData = 
        {
            mass: "6.10 × 10^24 kg (≈ 1.02 Earth masses)",
            gravity: "9.9 m/s² (≈ 1.01 g; supports elegant architecture)",
            orbitalPeriod: "365.8 days (a year of symphonic seasons)",
            rotationPeriod: "23.1 hours (day–night cycles tuned like melodies)"

        }

    const atmosphericComposition = {
        nitrogen: "76.8 % by volume",
        oxygen: "21.5 % by volume",
        argon: "1.0 % by volume (carries the refrains of wind instruments)",
        carbonDioxide: "0.04 % by volume (nourishes floating gardens)",
        waterVapor: "0.66 % by volume (mists that amplify sound)",
        neon: "30 ppm (glints within crystal city spires"
    }
    
    const geolodicalData = {
        meanRadius: "6,400 km (≈ 1.00 Earth radii)",
        equatorialCircumference: "40,200 km",
        volume: "1.10 × 10^12 km³",
        surfaceArea: "515 million km²"
    }

    const hydrologicalData ={
        mistAndCloudCoverage: "~60 % (entirely draped in soft vapors)",
        lakesAndSeas: "14 % (canals flowing past floating isles)",
        iceAndCrystals: "4 % (frosted amphitheaters on high peaks)",
        averageLakeDepth: "3,600 m",
        totalWaterVolume: "1.25 billion km³"
    }

    const magneticAndGeophysicalData = {
        magneticFieldStrength: "3.2 × 10⁻⁵ T (harmonic resonance with lithic crystals)",
        geothermalGradient: " 18–38 °C/km (warm underground grottoes tuned by tonal springs)",
    }

    const solarAndStellarData = {
        hostStarLuminosity: " 0.98 L☉ (a gentle, golden-hued sun)",
        starSurfaceTemp: "5,650 K (soft light ideal for artists)",
        solarIrradiance: "1,320 W/m² (filtered through artful cloudscapes)"

    }

    const auroralAndGeomagneticData = {
        haloStormCylce: " ~32 days (light ribbons that pulse as living music)",
        skyGlowArchs: "continuous multi-hued arcs dancing at twilight",
        magneticReconnectionEvents: "synchronized with dawn’s first chorus"
    }

    const planetaryMotionData = {
        eccentricity: "0.009 (nearly circular, for stable creative rhythm)",
        olbliquiy: "18° (graceful seasonal shifts in light and color)",
        precessionPeriod: "25,500 years (long-term evolution of cultural epochs)"

    }

    const tectonicAndSeismicData = {

        seismicWaveSpeed: "6.4 km/s (through crystal-infused bedrock)",
        plateBoundaryLength: "~55,000 km (fault lines rich in artistic mineral veins)",
        quakesPerYear: "~9 million (mostly gentle “stone-song” tremors)"
    }

    return(

        <>
        
        
        <section className={styles.hero}>

            <Image
            src="/planets/elyria.png"
            alt="background"
            objectFit="cover"
            quality={80}
            layout="fill"
            priority
            />


            <div className={styles.overlay}>

                <Image
                src="/images/elyria.png"
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

        <h3 className={styles.describe}>{planetDesribe}</h3>
        </div>



        <h1 className={styles.font} > Planet Statistics</h1>


        <div className="flex flex-col content items-center">

        <h1 className="text-3xl mb-10">Orbital Data:</h1>

        <table className={styles.mytable}>

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>Mass</td>
            <td>{orbitalData.mass}</td>
        </tr>

        <tr>
            <td>
                Gravity
            </td>


            <td>
                {orbitalData.gravity}
            </td>
        </tr>

        <tr>
            <td>
                Orbital Period
            </td>

            <td>

                {orbitalData.orbitalPeriod}
            </td>
        </tr>


        <tr>
            <td>
                Rotational Period
            </td>

            <td>
                {orbitalData.rotationPeriod}
            </td>
        </tr>
        </tbody>

        </table>


        <h1 className="text-3xl mb-10">Atmospheric Conditions:</h1>


        <table className={styles.mytable}>

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>Nitrogen</td>
            <td>{atmosphericComposition.nitrogen}</td>
        </tr>

        <tr>
            <td>
                Oxygen
            </td>


            <td>
                {atmosphericComposition.oxygen}
            </td>
        </tr>

        <tr>
            <td>
                Argon
            </td>

            <td>

                {atmosphericComposition.argon}
            </td>
        </tr>


        <tr>
            <td>
                Carbon Dioxide
            </td>

            <td>
                {atmosphericComposition.oxygen}
            </td>
        </tr>

        <tr>
            <td>
                Water Vapour
            </td>

            <td>
                {atmosphericComposition.waterVapor}
            </td>
        </tr>

        <tr>
            <td>
                Neon
            </td>

            <td>
                {atmosphericComposition.neon}
            </td>
        </tr>

        </tbody>

        </table>




        <h1 className="text-3xl mb-10">Geological Data:</h1>


        <table className={styles.mytable}>

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>Mean Radius</td>
            <td>{geolodicalData.meanRadius}</td>
        </tr>

        <tr>
            <td>
                Equilateral Circumference
            </td>


            <td>
                {geolodicalData.equatorialCircumference}
            </td>
        </tr>

        <tr>
            <td>
                Volume
            </td>

            <td>

                {geolodicalData.volume}
            </td>
        </tr>


        <tr>
            <td>
                Surface Area
            </td>

            <td>
                {geolodicalData.surfaceArea}
            </td>
        </tr>
        </tbody>

        </table>

        <h1 className="text-3xl mb-10">Hydrological Data:</h1>


        <table className={styles.mytable}>

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>Mist and Cloud Coverage</td>
            <td>{hydrologicalData.mistAndCloudCoverage}</td>
        </tr>

        <tr>
            <td>
                Lakes and Inland Seas
            </td>


            <td>
                {hydrologicalData.lakesAndSeas}
            </td>
        </tr>

        <tr>
            <td>
                Ice and Crystal Formations
            </td>

            <td>

                {hydrologicalData.iceAndCrystals}
            </td>
        </tr>


        <tr>
            <td>
                Average Lake Depth
            </td>

            <td>
                {hydrologicalData.averageLakeDepth}
            </td>
        </tr>

        <tr>
            <td>
                Total Water Volume
            </td>

            <td>
                {hydrologicalData.totalWaterVolume}
            </td>
        </tr>
        </tbody>

        </table>


        <h1 className="text-3xl mb-10">Magnetic and Geophysical Data:</h1>


        <table className={styles.mytable}>

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>Geothermal Gradient</td>
            <td>{magneticAndGeophysicalData.geothermalGradient}</td>
        </tr>

        <tr>
            <td>
                Magnetic Field Strength
            </td>


            <td>
                {magneticAndGeophysicalData.magneticFieldStrength}
            </td>
        </tr>

        </tbody>

        </table>


        <h1 className="text-3xl mb-10">Auroral and Geomagnetic Data:</h1>


        <table className={styles.mytable}>

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>Halo Storm Cycle</td>
            <td>{auroralAndGeomagneticData.haloStormCylce}</td>
        </tr>

        <tr>
            <td>
                Skyglow Arcs
            </td>


            <td>
                {auroralAndGeomagneticData.skyGlowArchs}
            </td>
        </tr>


        <tr>
            <td>
                Magnetic Reconnection Events
            </td>


            <td>
                {auroralAndGeomagneticData.magneticReconnectionEvents}
            </td>
        </tr>

        </tbody>

        </table>



        <h1 className="text-3xl mb-10">Planetary Motion Data:</h1>


        <table className={styles.mytable}>

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>Halo Storm Cycle</td>
            <td>{planetaryMotionData.eccentricity}</td>
        </tr>

        <tr>
            <td>
                Obliquity
            </td>


            <td>
                {planetaryMotionData.olbliquiy}
            </td>
        </tr>


        <tr>
            <td>
                Precession Period
            </td>


            <td>
                {planetaryMotionData.precessionPeriod}
            </td>
        </tr>

        </tbody>

        </table>


        <h1 className="text-3xl mb-10">Tectonic Motion Data:</h1>


        <table className={styles.mytable}>

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>Seismic Wave Speed</td>
            <td>{tectonicAndSeismicData.seismicWaveSpeed}</td>
        </tr>

        <tr>
            <td>
                Plate Boundary Length
            </td>


            <td>
                {tectonicAndSeismicData.plateBoundaryLength}
            </td>
        </tr>


        <tr>
            <td>
                Quakes per Year
            </td>


            <td>
                {tectonicAndSeismicData.quakesPerYear}
            </td>
        </tr>

        </tbody>

        </table>

        <h1 className="text-3xl mb-10">Solar and Stellar Data:</h1>


        <table className={styles.mytable}>

        <thead>
            <tr>
                <th>Stat</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>

        <tr>
            <td>Host Star Luminosity</td>
            <td>{solarAndStellarData.hostStarLuminosity}</td>
        </tr>

        <tr>
            <td>
                Star Surface Temperature
            </td>


            <td>
                {solarAndStellarData.starSurfaceTemp}
            </td>
        </tr>


        <tr>
            <td>
                Solar Irradiance
            </td>


            <td>
                {solarAndStellarData.solarIrradiance}
            </td>
        </tr>

        </tbody>

        </table>





        </div>



        <div className="flex flex-row justify-center ">

            <Link href="/cosmara">
            
            <button className={styles.buttonNav1}>Previous Page</button>
            </Link>

            <Link href="/kairos">
            
            <button className={styles.buttonNav2}>Next Planet</button>
            </Link>
        </div>

        
        <h1 className={styles.font}>Surface Preview</h1>

        

        <div className="flex flex-col align-center">

        <video src="/videos/elyria.mp4" loop autoPlay ></video>

        
        </div>




        
        
        </>


    )

}
"use client"

import React from "react";
import Image from "next/image";
import styles from "@/styles/planet_template.module.css"
import Link from "next/link";

export default function aerthys() {


    const planetDesribe = "Imagine a realm where pastel dunes ripple beneath a lavender horizon, and dew-flecked blossoms unfurl in hidden alcoves. Here, a soft murmur of air currents carries the distant promise of rain, while towering spires of alabaster stone stand watch over glistening lakes. Bioluminescent moss carpets winding paths, guiding the curious through secret grottoes and along crystalline waterways. As twilight deepens, the sky ignites with prismatic radiance, painting every curve of the terrain in shifting hues. In this serene dominion, each footstep uncovers a new marvel—inviting you to wander, to pause, and to lose yourself in the boundless poetry of the unknown."
    const orbitalData = 
        {
            mass: "7.85 × 10^24 kg (≈ 1.31 Earth masses)",
            gravity: "9.2 m/s² (≈ 0.94 g; gentle, skyward breeze)",
            orbitalPeriod: "420.5 days (one “year” under twin morning mists)",
            rotationPeriod: "30.2 hours (a dreamy, unhurried day)"

        }

    const atmosphericComposition = {
        nitrogen: "70.0% by volume",
        oxygen: "22.0% by volume",
        argon: "5.0 % by volume (whispers through the high meadows)",
        carbonDioxide: "0.7 % by volume (warms the valleys in soft glows)",
        waterVapor: "2.0 % by volume (ever-present clouds & mists)",
        neon: "200 ppm (faint, glowing auroral tints)"
    }
    
    const geolodicalData = {
        meanRadius: "7,200 km (≈ 1.13 Earth radii)",
        equatorialCircumference: "45,216 km",
        volume: "1.56 × 10^12 km³",
        surfaceArea: "650 million km²"
    }

    const hydrologicalData ={
        mistAndCloudCoverage: "~60 % (entirely draped in soft vapors)",
        lakesAndSeas: "~15 % of surface (mirror-like calm)",
        iceAndCrystals: "~5 % (frosted peaks & glowing glaciers)",
        averageLakeDepth: "1,200 m (deep, echoing waters)",
        totalWaterVolume: "0.98 billion km³"
    }

    const magneticAndGeophysicalData = {
        magneticFieldStrength: "2.5 × 10⁻⁵ T (auroral loops dance nightly)",
        geothermalGradient: "20–40 °C/km (warm subterranean springs)",
    }

    const solarAndStellarData = {
        hostStarLuminosity: " 0.85 L☉ (a slightly dimmer, golden-hued sun)",
        starSurfaceTemp: "5,200 K (soft, warm spectrum)",
        solarIrradiance: "1,100 W/m² (filtered through perpetual haze)"

    }

    const auroralAndGeomagneticData = {
        haloStormCylce: " ~35 days (when twin suns’ fields interact)",
        skyGlowArchs: "most vivid at high latitudes during twilight",
        magneticReconnectionEvents: "    frequent at dawn, painting the skies"
    }

    const planetaryMotionData = {
        eccentricity: "0.052 (slightly elongated orbit for seasonal mist shifts)",
        olbliquiy: "27° (lush seasonal contrasts in light and mist)",
        precessionPeriod: "23,500 years (long-term sky-song changes)"

    }

    const tectonicAndSeismicData = {

        seismicWaveSpeed: "6.0 km/s (through solid bedrock)",
        plateBoundaryLength: "~75,000 km (gently drifting crustal “islands”)",
        quakesPerYear: "~18 million (mostly faint, melodic tremors)"
    }

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

            <Link href="/">
            
            <button className={styles.buttonNav1}>Home Page</button>
            </Link>

            <Link href="/elyria">
            
            <button className={styles.buttonNav2}>Next Planet</button>
            </Link>
        </div>

        
        <h1 className={styles.font}>Surface Preview</h1>

        

        <div className="flex flex-col align-center">

        <video src="/videos/aerthys.mp4" loop autoPlay ></video>

        
        </div>




        
        
        </>


    )

}
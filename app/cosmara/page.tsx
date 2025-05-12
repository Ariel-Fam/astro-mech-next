"use client"

import React from "react";
import Image from "next/image";
import styles from "@/styles/planet_template.module.css"
import Link from "next/link";
export default function aerthys() {


    const planetDesribe = "Imagine an expanse of emerald meadows bathed in amber sunlight, where languid breezes carry the delicate perfume of night-blooming jasmine and golden lotus. Along meandering rivulets lined with ivory lilies, soft ripples shimmer like liquid glass. Tall silver-birch trees form natural cathedrals, their foliage quivering in a hushed concert that harmonizes with the distant call of songbirds. Blossoming hedgerows of hyacinth and primrose frame tranquil clearings, inviting wandering souls to rest upon moss-carpeted stones. Here, every breath feels like a chalice of serenity, each heartbeat aligning with the land’s slow rhythm—an earthly sanctuary woven from peace, balance, and the pure promise of rejuvenation."
    const orbitalData = 
        {
            mass: "75.40 × 10^24 kg (≈ 0.90 Earth masses)",
            gravity: "910.1 m/s² (≈ 1.03 g; pleasantly grounding)",
            orbitalPeriod: "320.0 days (a gently flowing year)",
            rotationPeriod: "22.6 hours (sunrise and sunset in soft embrace)"

        }

    const atmosphericComposition = {
        nitrogen: "75.0% by volume",
        oxygen: "23.0% by volume",
        argon: "1.5 % by volume (whispers through the high meadows)",
        carbonDioxide: "0.03 % by volume (warms the valleys in soft glows)",
        waterVapor: "0.47 % by volume (ever-present clouds & mists)",
        neon: "18 ppm (faint, glowing auroral tints)"
    }
    
    const geolodicalData = {
        meanRadius: " 6,000 km (≈ 0.94 Earth radii)",
        equatorialCircumference: "37,700 km",
        volume: " 9.05 × 10^11 km³³",
        surfaceArea: "452 million km²"
    }

    const hydrologicalData ={
        mistAndCloudCoverage: "58 % of the surface (tranquil blue seas)",
        lakesAndSeas: "12 % (crystal-clear waterways)",
        iceAndCrystals: "3 % (silent, shimmering expanses)",
        averageLakeDepth: "13,500 m (gently sloping shelves)",
        totalWaterVolume: "1.20 billion km³"
    }

    const magneticAndGeophysicalData = {
        magneticFieldStrength: "3.5 × 10⁻⁵ T (shields with a gentle hum)",
        geothermalGradient: "15–35 °C/km (warm springs dot the valleys)",
    }

    const solarAndStellarData = {
        hostStarLuminosity: "1.00 L☉ (a Sun-like, steady glow)",
        starSurfaceTemp: " 5,700 K (crisp, clear daylight)",
        solarIrradiance: "1,360 W/m² (softly filtered through thin clouds)"

    }

    const auroralAndGeomagneticData = {
        haloStormCylce: " ~30-day cycle (subtle ribbons of light at twilight)",
        skyGlowArchs: "most visible at high latitudes under calm skies",
        magneticReconnectionEvents: "gentle dawn glimmers"
    }

    const planetaryMotionData = {
        eccentricity: " 0.0050 (nearly circular, steadies the seasons)",
        olbliquiy: "15° (mild seasonal shifts, always harmonious)",
        precessionPeriod: "26,000 years (slow, graceful celestial dance)"

    }

    const tectonicAndSeismicData = {

        seismicWaveSpeed: "6.5 km/s (through solid crust)",
        plateBoundaryLength: "~50,000 km (softly drifting tectonic plates)",
        quakesPerYear: "~8 million (mostly imperceptible whispers)"
    }

    return(

        <>
        
        
        <section className={styles.hero}>

            <Image
            src="/planets/cosmara.png"
            alt="background"
            objectFit="cover"
            quality={80}
            layout="fill"
            priority
            />


            <div className={styles.overlay}>

                <Image
                src="/images/cosmara.png"
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

        </div>

        <div className="flex flex-row justify-center ">

            <Link href="/aerthys">
            
            <button className={styles.buttonNav1}>Previous Planet</button>
            </Link>

            <Link href="/elyria">
            
            <button className={styles.buttonNav2}>Next Planet</button>
            </Link>
        </div>

        
        <h1 className={styles.font}>Surface Preview</h1>




        <div className="flex flex-col align-center">

        <video src="/videos/cosmara.mp4" loop autoPlay ></video>

        
        </div>




        
        
        </>


    )

}

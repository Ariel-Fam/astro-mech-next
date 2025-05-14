"use client"

import React from "react";
import Image from "next/image";
import styles from "@/styles/planet_template.module.css"
import Link from "next/link";

export default function aerthys() {


    const planetDesribe = "Envision a realm where ancient canopies soar above emerald understories, their broad leaves filtering golden sunbeams onto meandering waterways that gleam like liquid crystal. Hidden springs bubble forth in secluded hollows, feeding tranquil pools that mirror drifting clouds and the silhouettes of songbirds in flight. Rolling hills are quilted with wildflowers in riotous hues, their delicate blooms beckoning pollinators to dance from petal to petal. In every glade, dedicated stewards tend saplings and tendrils, weaving living corridors that link forest, marsh, and meadow in harmonious balance. Stone-carved sanctuaries nestled beneath great boughs honor the promise of renewal, while networks of elevated boardwalks invite visitors to tread lightly, ever mindful of the fragile wonders below. Here, every breath is an affirmation of reciprocal care—inviting you to wander, to protect, and to celebrate a world renewed by reverence and vigilance."
    const orbitalData = 
        {
            mass: "5.67 × 10^24 kg (≈ 0.95 Earth masses)",
            gravity: "9.60 m/s² (≈ 0.98 g; comfortably Earth-like)",
            orbitalPeriod: "350.3 days (one “growing season” around its sun)",
            rotationPeriod: "24.5 hours (a day paced for wildlife rhythms)"

        }

    const atmosphericComposition = {
        nitrogen: "78.9 % by volume",
        oxygen: "20.7 % by volume",
        argon: "0.93 % by volume",
        carbonDioxide: "0.04 % by volume (balanced for plant photosynthesis)",
        methane: "1.8 ppm (from thriving wetlands)",
        neon: "15 ppm (used in high-precision spectrographs)"
    }
    
    const geolodicalData = {
        meanRadius: "6,350 km (≈ 0.99 Earth radii)",
        equatorialCircumference: "39,900 km",
        volume: "1.07 × 10^12 km³",
        surfaceArea: "507 million km²"
    }

    const hydrologicalData ={
        oceanicCoverage: "60 % of surface (deep blue seas teeming with life)",
        lakesAndSeas: "10 % (network of clear waterways)",
        iceAndCrystals: " 4 % (seasonally variable, nurturing meltwater)",
        averageLakeDepth:  "3,800 m",
        totalWaterVolume: "1.30 billion km"
    }

    const magneticAndGeophysicalData = {
        magneticFieldStrength: "3.0 × 10⁻⁵ T (protects from stellar winds)",
        geothermalGradient: "25–45 °C/km (supports hot springs in forested valleys)",
    }

    const solarAndStellarData = {
        hostStarLuminosity: "1.00 L☉ (a steady, life-nurturing sun)",
        starSurfaceTemp: "5,780 K (crisp daylight ideal for photosynthesis)",
        solarIrradiance: "1,360 W/m² (filtered through dynamic cloud cover)"
    }

    const auroralAndGeomagneticData = {
        chronoAuroralCycle: "~27 days (northern and southern lights dance on the horizon)",
        auroraSeaons: "moderate—peaks every 4 months with solar flares",
        magneticReconnectionEvents: "occasional at dusk, lighting up forest canopies"
    }

    const planetaryMotionData = {
        eccentricity: "0.018 (mild seasonal variation in insolation)",
        olbliquiy: "24° (balanced seasons for ecosystems)",
        precessionPeriod: "26,000 years (long-term climatic cycles)"

    }

    const tectonicAndSeismicData = {

        seismicWaveSpeed: "6.3 km/s (through mixed continental crust)",
        plateBoundaryLength: "~67,000 km (tectonic seams rich in mineral springs)",
        quakesPerYear: "~15 million (mostly minor, many dampened by water-saturated soils)"
    }

    return(

        <>
        
        
        <section className={styles.hero}>

            <Image
            src="/planets/terraverde.png"
            alt="background"
            objectFit="cover"
            quality={80}
            layout="fill"
            priority
            />


            <div className={styles.overlay}>

                <Image
                src="/images/terraverde.png"
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
                Methane
            </td>

            <td>
                {atmosphericComposition.neon}
            </td>
        </tr>

        <tr>
            <td>
                Neon
            </td>

            <td>
                {atmosphericComposition.methane}
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
            <td>{hydrologicalData.oceanicCoverage}</td>
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
                Average Ocean Depth
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
            <td>Chrono Auroral Cycle</td>
            <td>{auroralAndGeomagneticData.chronoAuroralCycle}</td>
        </tr>

        <tr>
            <td>
                Autrora Seasons
            </td>


            <td>
                {auroralAndGeomagneticData.auroraSeaons}
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

            <Link href="/stellaluna">
            
            <button className={styles.buttonNav1}>Previous Page</button>
            </Link>

            <Link href="/">
            
            <button className={styles.buttonNav2}>Home Page</button>
            </Link>

        </div>

        
        <h1 className={styles.font}>Surface Preview</h1>

        

        <div className="flex flex-col align-center">

        <video src="/videos/terraverde.mp4" loop autoPlay ></video>

        
        </div>
        
        
        </>


    )

}
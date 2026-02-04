"use client"

import React from "react";
import Image from "next/image";
import styles from "@/styles/planet_template.module.css"
import Link from "next/link";

export default function aerthys() {


    const planetDesribe = "Nexarion is a large terrestrial planet with mass approximately 1.54 times that of Earth, featuring elevated surface gravity (14.1 m/s², or 1.44 g) and extensive infrastructure supporting interplanetary commerce. The planetary surface is characterized by deep natural harbors with average depths of 4,800 meters and an interconnected canal network covering 20% of the surface area. Atmospheric composition includes methane (2.2 ppm) from industrial biological processes and elevated neon concentrations (0.6% by volume). The planet's strong magnetic field (5.0 × 10⁻⁵ T) provides reliable geomagnetic navigation references. Geothermal gradients of 35-60°C/km support substantial subsurface energy production, while the dense iron-rich bedrock (seismic wave speed: 7.0 km/s) provides stable foundations for heavy infrastructure."
    const orbitalData = 
        {
            mass: "9.20 × 10^24 kg (≈ 1.54 Earth masses)",
            gravity: "14.1 m/s² (≈ 1.44 g; solid footing for heavy cargo)",
            orbitalPeriod: " 510.7 days (one year of two market seasons)",
            rotationPeriod: "20.0 hours (efficient daylight for work and trade)"

        }

    const atmosphericComposition = {
        nitrogen: "74.5 % by volume",
        oxygen: "23.5 % by volume",
        argon: "3.0 % by volume",
        carbonDioxide: "0.6 % by volume (enhances refractive glow)",
        neon: " 0.6 % by volume (supports greenhouse-controlled domes)",
        methane: "2.2 ppm (from bustling bio-industries)"
    }
    
    const geolodicalData = {
        meanRadius: "7,800 km (≈ 1.22 Earth radii)",
        equatorialCircumference: "49,020 km",
        volume: "1.99 × 10^12 km³",
        surfaceArea: "760 million km²"
    }

    const hydrologicalData ={
        oceanicCoverage: "48 % of surface (deep harbors and trade lanes)",
        lakesAndSeas: "20 % (interconnected canal networks)",
        iceAndCrystals: " 4 % (mineral-rich ice fields)",
        averageLakeDepth:  " 4,800 m (natural deep-sea ports)",
        totalWaterVolume: "1.80 billion km³"
    }

    const magneticAndGeophysicalData = {
        magneticFieldStrength: "5.0 × 10⁻⁵ T (stable compass directions for navigation)",
        geothermalGradient: "35–60 °C/km (geothermal power hubs under major cities)",
    }

    const solarAndStellarData = {
        hostStarLuminosity: "1.10 L☉ (bright, steady starlight for trade convoys)",
        starSurfaceTemp: "5,800 K (clear, reliable solar days)",
        solarIrradiance: "1,300 W/m² (optimized for solar farms on plateaus)"
    }

    const auroralAndGeomagneticData = {
        chronoAuroralCycle: "~40-day period (winds that fill merchant sailcraft)",
        twilightResonanceBand: "glowing sky-paths near poles used for long-distance navigation",
        magneticReconnectionEvents: " frequent at dusk, powering sky-bridges"
    }

    const planetaryMotionData = {
        eccentricity: "0.022 (slight seasonal variation for shipping windows)",
        olbliquiy: "13° (mild seasonal shifts to regulate agricultural imports)",
        precessionPeriod: "24,000 years (long cycles of cultural exchange)"

    }

    const tectonicAndSeismicData = {

        seismicWaveSpeed: "7.0 km/s (through dense, trade-route-supporting bedrock)",
        plateBoundaryLength: "~60,000 km (tectonic “highways” lined with resource deposits)",
        quakesPerYear: "~10 million (mostly minor, with engineered damping systems)"
    }

    return(

        <>
        
        
        <section className={styles.hero}>

            <Image
            src="/planets/nexarion.png"
            alt="background"
            objectFit="cover"
            quality={80}
            layout="fill"
            priority
            />


            <div className={styles.overlay}>

                <Image
                src="/images/nexarion.png"
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
                {atmosphericComposition.methane}
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
                Twilight Resonance Band
            </td>


            <td>
                {auroralAndGeomagneticData.twilightResonanceBand}
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

            <Link href="/luminaria">
            
            <button className={styles.buttonNav1}>Previous Page</button>
            </Link>

            <Link href="/stellaluna">
            
            <button className={styles.buttonNav2}>Next Planet</button>
            </Link>

        </div>

        
        <h1 className={styles.font}>Surface Preview</h1>

        

        <div className="flex flex-col align-center">

        <video src="/videos/nexarion.mp4" loop autoPlay ></video>

        
        </div>




        
        
        </>


    )

}
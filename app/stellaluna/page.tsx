"use client"

import React from "react";
import Image from "next/image";
import styles from "@/styles/planet_template.module.css"
import Link from "next/link";

export default function aerthys() {


    const planetDesribe = "Stellaluna is a terrestrial exoplanet optimized for astronomical observation, featuring 52% oceanic coverage with high-reflectivity surface waters ideal for interferometric measurements. The planet orbits a G5V-type star with luminosity of 1.05 L☉, providing high-contrast illumination conditions. Atmospheric composition includes elevated argon content (3.5% by volume) and trace xenon (15 ppm) utilized in precision spectroscopic instrumentation. The planet's moderate axial tilt (22°) ensures balanced seasonal observation windows, while its rapid rotation period (19.7 hours) enables efficient sky coverage. Geological features include iron-rich mantle structures (seismic wave speed: 5.6 km/s) and rift zones suitable for vibration-isolated subsurface research facilities. The magnetic field strength of 4.8 × 10⁻⁵ T provides stable compass-based instrument alignment."
    const orbitalData = 
        {
            mass: "7.25 × 10^24 kg (≈ 1.21 Earth masses)",
            gravity: "10.8 m/s² (≈ 1.10 g; steady pull for ground-based telescopes)",
            orbitalPeriod: "402.7 days (one “stellar season” around its sun)",
            rotationPeriod: "19.7 hours (rapid days to scan the night sky)"

        }

    const atmosphericComposition = {
        nitrogen: "64.0 % by volume",
        oxygen: "21.0 % by volume",
        argon: "3.5 % by volume (echoes of past supernovae)",
        carbonDioxide: "0.45 % by volume (moderates greenhouse observatories)",
        neon: "200 ppm (glows faintly around polar research domes)",
        xenon: "15 ppm (used in high-precision spectrographs)"
    }
    
    const geolodicalData = {
        meanRadius: "6 900 km (≈ 1.08 Earth radii)",
        equatorialCircumference: "43 380 km",
        volume: "1.37 × 10^12 km³",
        surfaceArea: "596 million km²"
    }

    const hydrologicalData ={
        oceanicCoverage: "52 % (deep “mirror seas” reflect the starfields)",
        lakesAndSeas: " 14 % (calm basins for optical telescopes)",
        iceAndCrystals: " 4 % (mineral-rich ice fields)",
        averageLakeDepth:  "4 000 m",
        totalWaterVolume: "1.35 billion km³"
    }

    const magneticAndGeophysicalData = {
        magneticFieldStrength: "4.8 × 10⁻⁵ T (stable for compass-based alignments)",
        geothermalGradient: " 28–50 °C/km (hidden hot springs power deep-space arrays)",
    }

    const solarAndStellarData = {
        hostStarLuminosity: "1.05 L☉ (a slightly brighter star for clearer skies)",
        starSurfaceTemp: " 5 900 K (crisp, high-contrast daylight)",
        solarIrradiance: "1 420 W/m² (filtered by thin upper-atmosphere haze)"
    }

    const auroralAndGeomagneticData = {
        chronoAuroralCycle: " ~26 days (charged-particle surges light up research domes)",
        twilightResonanceBand: "moderate—peaks every 4 months with solar flares",
        magneticReconnectionEvents: "frequent at high latitudes, disrupting and inspiring new observations"
    }

    const planetaryMotionData = {
        eccentricity: "0.038 (moderate variation brings clearer skies in perihelion)",
        olbliquiy: "22° (balanced seasons for uninterrupted observing windows)",
        precessionPeriod: " 22 500 years (slow drift of celestial poles)"

    }

    const tectonicAndSeismicData = {

        seismicWaveSpeed: "5.6 km/s (through dense, iron-rich mantle)",
        plateBoundaryLength: "~72 000 km (rift zones leveraged for sub-surface observatories)",
        quakesPerYear: "~11 million (mostly faint “astro-tremors” monitored by chronoseismometers)"
    }

    return(

        <>
        
        
        <section className={styles.hero}>

            <Image
            src="/planets/stellaluna.png"
            alt="background"
            objectFit="cover"
            quality={80}
            layout="fill"
            priority
            />


            <div className={styles.overlay}>

                <Image
                src="/images/stellaluna.png"
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
                {atmosphericComposition.xenon}
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

            <Link href="/nexarion">
            
            <button className={styles.buttonNav1}>Previous Page</button>
            </Link>

            <Link href="/terraverde">
            
            <button className={styles.buttonNav2}>Next Planet</button>
            </Link>

        </div>

        
        <h1 className={styles.font}>Surface Preview</h1>

        

        <div className="flex flex-col align-center">

        <video src="/videos/stellaluna.mp4" loop autoPlay ></video>

        
        </div>
        
        
        </>


    )

}
"use client"

import React from "react";
import Image from "next/image";
import styles from "@/styles/planet_template.module.css"
import Link from "next/link";

export default function aerthys() {


    const planetDesribe = "Luminaria is a terrestrial exoplanet positioned within a stellar region exhibiting high concentrations of ionized hydrogen nebulae and active star-forming regions. The planet orbits a luminous F-type star (1.20 L☉) with elevated solar irradiance (1,450 W/m²), resulting in enhanced atmospheric scattering and persistent luminous phenomena. Surface geology features extensive basaltic plateaus and obsidian volcanic formations, while the atmosphere contains sulfur hexafluoride (0.02% by volume) contributing to increased optical density. The planetary magnetic field (4.2 × 10⁻⁵ T) generates prominent auroral displays at polar latitudes. High axial obliquity (31°) produces significant seasonal variations in stellar illumination, with extended twilight periods characterized by multi-spectral atmospheric refraction."
    const orbitalData = 
        {
            mass: "6.50 × 10^24 kg (≈ 1.09 Earth masses)",
            gravity: "11.2 m/s² (≈ 1.14 g; firmly luminous footing)",
            orbitalPeriod: "380.2 days (a year of shifting star-showers)",
            rotationPeriod: "18.4 hours (swift, glimmering dawns)"
        }

    const atmosphericComposition = {
        nitrogen: "68.0 % by volume",
        oxygen: "19.0 % by volume",
        argon: "3.0 % by volume",
        carbonDioxide: " 2.5 % by volume (enhances refractive glow)",
        neon: "120 ppm (subtle pink-and-purple hues at twilight)",
        sulfarHexaflouride: "0.02 % by volume (thickens the shimmer)"
    }
    
    const geolodicalData = {
        meanRadius: "6,800 km (≈ 1.07 Earth radii)",
        equatorialCircumference: " 42,740 km",
        volume: "1.32 × 10^12 km³",
        surfaceArea: "580 million km²"
    }

    const hydrologicalData ={
        oceanicCoverage: "65 % (liquid seas that glitter beneath starfall)",
        lakesAndSeas: "8 % (iridescent saline basins)",
        iceAndCrystals: "7 % (reflective fields of light)",
        averageLakeDepth:  " 4,200 m",
        totalWaterVolume: "1.52 billion km³"
    }

    const magneticAndGeophysicalData = {
        magneticFieldStrength: "4.2 × 10⁻⁵ T (vivid polar “light curtains”)",
        geothermalGradient: " 30–55 °C/km (hidden luminescent springs)",
    }

    const solarAndStellarData = {
        hostStarLuminosity: "1.20 L☉ (brighter, cool-white primary)",
        starSurfaceTemp: "6,000 K (crisp, radiant light)",
        solarIrradiance: "1,450 W/m² (intensely scattered through haze)"
    }

    const auroralAndGeomagneticData = {
        chronoAuroralCycle: "~28 days (when solar flares wake the poles)",
        twilightResonanceBand: "continuous dawn-to-dusk ribbons of multicolor light",
        magneticReconnectionEvents: "frequent at higher latitudes, painting the skies"
    }

    const planetaryMotionData = {
        eccentricity: "0.030 (mildly varying distance for light shifts)",
        olbliquiy: "31° (dramatic seasonal glows and long twilights)",
        precessionPeriod: "21,000 years (slow dance of orienting brilliance)"

    }

    const tectonicAndSeismicData = {

        seismicWaveSpeed: "5.8 km/s (through dense, crystalline crust)",
        plateBoundaryLength: "~80,000 km (drifting plates that spark phosphorescence at rifts)",
        quakesPerYear: " ~12 million (mostly gentle tremors shimmering the ground)"
    }

    return(

        <>
        
        
        <section className={styles.hero}>

            <Image
            src="/planets/luminaria.png"
            alt="background"
            objectFit="cover"
            quality={80}
            layout="fill"
            priority
            />


            <div className={styles.overlay}>

                <Image
                src="/images/luminaria.png"
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
                Sulfar Hexaflouride
            </td>

            <td>
                {atmosphericComposition.sulfarHexaflouride}
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

            <Link href="/kairos">
            
            <button className={styles.buttonNav1}>Previous Page</button>
            </Link>

            <Link href="/stellaluna">
            
            <button className={styles.buttonNav2}>Next Planet</button>
            </Link>

        </div>

        
        <h1 className={styles.font}>Surface Preview</h1>

        

        <div className="flex flex-col align-center">

        <video src="/videos/luminaria.mp4" loop autoPlay ></video>

        
        </div>




        
        
        </>


    )

}
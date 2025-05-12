"use client"

import React from "react";
import Image from "next/image";
import styles from "@/styles/planet_template.module.css"
import Link from "next/link";

export default function aerthys() {


    const planetDesribe = "Envision a realm where each era is heralded by grand milestones—towering monoliths raised at the turning of every epoch, their glyphs shifting with the ebb and flow of aeons. Here, colossal arches mark the dawn of new orders, while hidden archives safeguard instruments that tame the currents of destiny. Workshops of burnished alloy hum with resonant power, weaving echoes of yore and visions yet to dawn into a living tapestry of emergence. Beneath translucent domes, seekers trace spirals of heritage across crystal spheres, summoning reverberations of ages long past and glimpses of eras unborn. In this venerable dominion, every celestial revolution resonates through both stone and spirit—inviting voyagers to inscribe their own chapter upon the ever-unfolding ledger of existence."
    const orbitalData = 
        {
            mass: "8.30 × 10^24 kg (≈ 1.39 Earth masses)",
            gravity: "12.5 m/s² (≈ 1.27 g; steady underfoot despite temporal flux)",
            orbitalPeriod: "442.0 days (one “great cycle” of seasons and epochs)",
            rotationPeriod: "27.5 hours (each day marked by a “Chrono-Signal” event)"

        }

    const atmosphericComposition = {
        nitrogen: "72.0 % by volume",
        oxygen: "22.5 % by volume",
        argon: "3.0 % by volume (stable buffer for chronal reactors)",
        carbonDioxide: "0.8 % by volume (regulates time-warp fields)",
        krypton: "15 ppm (used in time-manipulation technologies)",
        neon: "100 ppm (faint glow heralding temporal shifts)"
    }
    
    const geolodicalData = {
        meanRadius: "7,400 km (≈ 1.16 Earth radii)",
        equatorialCircumference: "46,500 km",
        volume: "1.70 × 10^12 km³",
        surfaceArea: "690 million km²"
    }

    const hydrologicalData ={
        oceanicCoverage: "50 % (“Tide of Eras” currents that ebb in cycles)",
        lakesAndSeas: "18 % (flow in phase with lunar–solar chronometer)",
        iceAndCrystals: " 5 % (regions where time moves more slowly)",
        averageLakeDepth:  "3,800 m (depths echo past echoes)",
        totalWaterVolume: "1.10 billion km³"
    }

    const magneticAndGeophysicalData = {
        magneticFieldStrength: "3.8 × 10⁻⁵ T (syncs with planet’s chrono-magnetosphere)",
        geothermalGradient: "22–45 °C/km (chronal hotspots fuel temporal engines)",
    }

    const solarAndStellarData = {
        hostStarLuminosity: "0.95 L☉ (a slightly dimmer sun to stabilize chronal flux)",
        starSurfaceTemp: "5,650 K (steady light to anchor time-readings)",
        solarIrradiance: "1,250 W/m² (filtered through a temporal resonance haze)"

    }

    const auroralAndGeomagneticData = {
        chronoAuroralCycle: "~33 days (waves of light marking micro-epochs)",
        twilightResonanceBand: " long arcs of shifting color at dawn/dusk transition",
        magneticReconnectionEvents: "pulses in sync with the planet’s “Hour Signal"
    }

    const planetaryMotionData = {
        eccentricity: " 0.009 (nearly circular, for stable creative rhythm",
        olbliquiy: "18° (graceful seasonal shifts in light and color)",
        precessionPeriod: "25,500 years (long-term evolution of cultural epochs"

    }

    const tectonicAndSeismicData = {

        seismicWaveSpeed: "6.4 km/s (through crystal-infused bedrock)",
        plateBoundaryLength: " ~55,000 km (fault lines rich in artistic mineral veins)",
        quakesPerYear: "~9 million (mostly gentle “stone-song” tremors)"
    }

    return(

        <>
        
        
        <section className={styles.hero}>

            <Image
            src="/planets/kairos.png"
            alt="background"
            objectFit="cover"
            quality={80}
            layout="fill"
            priority
            />


            <div className={styles.overlay}>

                <Image
                src="/images/kairos.png"
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
                Krypton
            </td>

            <td>
                {atmosphericComposition.krypton}
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

            <Link href="/elyria">
            
            <button className={styles.buttonNav1}>Previous Page</button>
            </Link>

            <Link href="/luminaria">
            
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
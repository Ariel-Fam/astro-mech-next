// Example planets.ts configuration with better spacing
// Adjust your actual planets.ts file with these recommended values

export type PlanetId = 
  | "aerthys" 
  | "cosmara" 
  | "elyria" 
  | "kairos" 
  | "luminaria" 
  | "nexarion" 
  | "stellaluna" 
  | "terraverde";

export interface PlanetDef {
  id: PlanetId;
  name: string;
  modelUrl: string;
  orbitRadius: number;
  orbitSpeed: number;
  spinSpeed: number;
  scale: number;
  tilt: number;
  shortLore: string;
}

// ✅ RECOMMENDED: Increased orbit radii for better spacing
// The key is to space planets further apart so they don't overlap
export const COSMAE_PLANETS: PlanetDef[] = [
  {
    id: "aerthys",
    name: "Aerthys",
    modelUrl: "/models/aerthys.glb",
    orbitRadius: 8,      // Increase these values
    orbitSpeed: 0.5,
    spinSpeed: 0.3,
    scale: 0.8,          // Reduce individual scales
    tilt: 0.1,
    shortLore: "A tempestuous world of endless storms.",
  },
  {
    id: "cosmara",
    name: "Cosmara",
    modelUrl: "/models/cosmara.glb",
    orbitRadius: 12,     // Spread them out more
    orbitSpeed: 0.4,
    spinSpeed: 0.25,
    scale: 0.9,
    tilt: 0.05,
    shortLore: "A tranquil terrestrial paradise—balanced biomes and quiet oceans tuned for harmony.",
  },
  {
    id: "elyria",
    name: "Elyria",
    modelUrl: "/models/elyria.glb",
    orbitRadius: 16,     // Keep increasing
    orbitSpeed: 0.35,
    spinSpeed: 0.2,
    scale: 0.7,
    tilt: 0.15,
    shortLore: "Crystal formations pierce cloudy skies.",
  },
  {
    id: "kairos",
    name: "Kairos",
    modelUrl: "/models/kairos.glb",
    orbitRadius: 20,
    orbitSpeed: 0.3,
    spinSpeed: 0.4,
    scale: 0.85,
    tilt: 0.2,
    shortLore: "Time flows differently on this enigmatic world.",
  },
  {
    id: "luminaria",
    name: "Luminaria",
    modelUrl: "/models/luminaria.glb",
    orbitRadius: 24,
    orbitSpeed: 0.25,
    spinSpeed: 0.15,
    scale: 0.75,
    tilt: 0.08,
    shortLore: "Bioluminescent forests light the eternal twilight.",
  },
  {
    id: "nexarion",
    name: "Nexarion",
    modelUrl: "/models/nexarion.glb",
    orbitRadius: 28,
    orbitSpeed: 0.2,
    spinSpeed: 0.35,
    scale: 0.95,
    tilt: 0.12,
    shortLore: "A technological marvel suspended in rings of energy.",
  },
  {
    id: "stellaluna",
    name: "Stellaluna",
    modelUrl: "/models/stellaluna.glb",
    orbitRadius: 32,
    orbitSpeed: 0.15,
    spinSpeed: 0.28,
    scale: 0.7,
    tilt: 0.25,
    shortLore: "Twin moons create perpetual celestial dances.",
  },
  {
    id: "terraverde",
    name: "Terraverde",
    modelUrl: "/models/terraverde.glb",
    orbitRadius: 36,
    orbitSpeed: 0.1,
    spinSpeed: 0.18,
    scale: 0.8,
    tilt: 0.18,
    shortLore: "Lush jungles cover this verdant paradise.",
  },
];

// QUICK FIX GUIDE:
// ================
// 
// Problem: Planets overlapping and too big
// Solutions:
// 
// 1. INCREASE orbitRadius values (most important!)
//    - Start at 8 for innermost planet
//    - Add 4-5 units between each planet
//    - Outermost should be around 36-40
// 
// 2. REDUCE scale values
//    - Keep between 0.6 - 1.0
//    - Larger scales make planets bigger relative to orbit
// 
// 3. ADJUST camera position (in CosmaeExperience.tsx)
//    - Increase camera z position for wider view
//    - Current: position: [0, 14, 60]
//    - Try: position: [0, 20, 80] for wider view
// 
// 4. INCREASE maxDistance for camera zoom out
//    - Current: maxDistance={160}
//    - Try: maxDistance={200} or more
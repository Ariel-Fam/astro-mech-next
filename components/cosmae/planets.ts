export type PlanetId =
  | "aerthys"
  | "cosmara"
  | "elyria"
  | "kairos"
  | "luminaria"
  | "nexarion"
  | "stellaluna"
  | "terraverde";

export type SurfaceConditions = {
  gravity: string;
  dayLength: string;
  yearLength: string;
  temperature: string;
  surfacePressure: string;
};

export type PlanetStats = {
  classification: string;
  atmosphere: string;
  climate: string;
  notable: string[];
  civilization: string;
};

export type PlanetDef = {
  id: PlanetId;
  name: string;
  image: string;
  description: string;
  surfaceConditions: SurfaceConditions;

  // Visual properties
  color: string;
  emissive?: string;
  emissiveIntensity?: number;
  metalness: number;
  roughness: number;
  hasRings?: boolean;
  ringColor?: string;
  hasAtmosphere?: boolean;
  atmosphereColor?: string;

  // Scene tuning
  orbitRadius: number;
  orbitSpeed: number;
  spinSpeed: number;
  size: number;
  tilt: number;

  shortLore: string;
  stats: PlanetStats;
};

export const COSMAE_PLANETS: PlanetDef[] = [
  {
    id: "aerthys",
    name: "Aerthys",
    image: "/cosmae/aerthys.png",
    description: "A realm where pastel dunes ripple beneath a lavender horizon, and dew-flecked blossoms unfurl in hidden alcoves. Towering spires of alabaster stone stand watch over glistening lakes, while bioluminescent moss carpets winding paths through secret grottoes.",
    surfaceConditions: {
      gravity: "0.94g",
      dayLength: "30.2 hours",
      yearLength: "420.5 days",
      temperature: "15-28°C",
      surfacePressure: "1.1 atm",
    },
    color: "#9b8bb8",
    metalness: 0.2,
    roughness: 0.7,
    hasAtmosphere: true,
    atmosphereColor: "#c4b5fd",
    orbitRadius: 12,
    orbitSpeed: 0.12,
    spinSpeed: 0.3,
    size: 0.6,
    tilt: 0.15,
    shortLore: "Whimsical skies, mist valleys, and soft winds—an atmospheric world of cloud seas.",
    stats: {
      classification: "Temperate cloud-world",
      atmosphere: "70% Nitrogen, 22% Oxygen, 5% Argon",
      climate: "Gentle, humid, frequent mist cycles",
      notable: ["Mist-shrouded valleys", "Bioluminescent moss paths", "Prismatic twilight skies"],
      civilization: "Sparse settlements in elevated ridges",
    },
  },
  {
    id: "cosmara",
    name: "Cosmara",
    image: "/cosmae/cosmara.png",
    description: "An expanse of emerald meadows bathed in amber sunlight, where languid breezes carry the delicate perfume of night-blooming jasmine. Tall silver-birch trees form natural cathedrals, their foliage quivering in hushed harmony with distant songbirds.",
    surfaceConditions: {
      gravity: "1.03g",
      dayLength: "22.6 hours",
      yearLength: "320 days",
      temperature: "18-32°C",
      surfacePressure: "1.0 atm",
    },
    color: "#4aa3c7",
    metalness: 0.3,
    roughness: 0.5,
    hasAtmosphere: true,
    atmosphereColor: "#7dd3fc",
    orbitRadius: 18,
    orbitSpeed: 0.09,
    spinSpeed: 0.25,
    size: 0.8,
    tilt: 0.1,
    shortLore: "A tranquil terrestrial paradise—balanced biomes and quiet oceans tuned for harmony.",
    stats: {
      classification: "Terrestrial paradise",
      atmosphere: "75% Nitrogen, 23% Oxygen, 1.5% Argon",
      climate: "Mild seasons, low storm volatility",
      notable: ["Glass-smooth seas", "Silver-birch cathedrals", "Moss-carpeted clearings"],
      civilization: "Eco-cities integrated with nature",
    },
  },
  {
    id: "elyria",
    name: "Elyria",
    image: "/cosmae/elyria.png",
    description: "A domain where every zephyr carries a gentle serenade, and corridors of light refract through towering glass pinnacles. Levitating isles drift upon soft currents, crowned with open-air ateliers where denizens coax color and form from the ether.",
    surfaceConditions: {
      gravity: "1.01g",
      dayLength: "23.1 hours",
      yearLength: "365.8 days",
      temperature: "12-25°C",
      surfacePressure: "0.95 atm",
    },
    color: "#c75b93",
    emissive: "#db2777",
    emissiveIntensity: 0.1,
    metalness: 0.3,
    roughness: 0.5,
    hasRings: false,
    ringColor: undefined,
    orbitRadius: 26,
    orbitSpeed: 0.07,
    spinSpeed: 0.4,
    size: 0.5,
    tilt: 0.22,
    shortLore: "A world where music and art reign—crystal spires and floating isles host endless creation.",
    stats: {
      classification: "Crystal-archipelago world",
      atmosphere: "76.8% Nitrogen, 21.5% Oxygen, 1% Argon",
      climate: "Bright skies, strong updraft currents",
      notable: ["Floating island chains", "Crystal spire cities", "Kaleidoscopic light patterns"],
      civilization: "Creatives' guilds and floating academies",
    },
  },
  {
    id: "kairos",
    name: "Kairos",
    image: "/cosmae/kairos.png",
    description: "A realm where each era is heralded by grand milestones—towering monoliths at the turning of every epoch. Workshops of burnished alloy hum with resonant power, weaving echoes of the past and visions of futures yet to dawn.",
    surfaceConditions: {
      gravity: "1.27g",
      dayLength: "27.5 hours",
      yearLength: "442 days",
      temperature: "8-22°C",
      surfacePressure: "0.85 atm",
    },
    color: "#7b6b9e",
    emissive: "#8b5cf6",
    emissiveIntensity: 0.08,
    metalness: 0.3,
    roughness: 0.6,
    hasRings: true,
    ringColor: "#f0b429",
    orbitRadius: 35,
    orbitSpeed: 0.055,
    spinSpeed: 0.2,
    size: 0.7,
    tilt: 0.32,
    shortLore: "Time is culture here—events, cycles, and engineered chronology shape history itself.",
    stats: {
      classification: "Chrono-anomalous terrestrial",
      atmosphere: "72% Nitrogen, 22.5% Oxygen, 3% Argon",
      climate: "Sharp transitions, periodic phase shifts",
      notable: ["Epoch monoliths", "Temporal eddies", "Chrono-Signal events"],
      civilization: "Advanced chrono-tech societies",
    },
  },
  {
    id: "luminaria",
    name: "Luminaria",
    image: "/cosmae/luminaria.png",
    description: "An expanse draped in glowing nebulae, where crystalline observatories perch atop obsidian plateaus. Beneath domed amphitheaters, scholars convene amid holographic star maps, tracing the life cycles of galaxies in choreographed dance.",
    surfaceConditions: {
      gravity: "1.14g",
      dayLength: "18.4 hours",
      yearLength: "380.2 days",
      temperature: "20-35°C",
      surfacePressure: "1.2 atm",
    },
    color: "#f5b942",
    emissive: "#fbbf24",
    emissiveIntensity: 0.2,
    metalness: 0.4,
    roughness: 0.4,
    hasAtmosphere: true,
    atmosphereColor: "#fde68a",
    hasRings: false,
    ringColor: undefined,
    orbitRadius: 45,
    orbitSpeed: 0.04,
    spinSpeed: 0.3,
    size: 1.0,
    tilt: 0.08,
    shortLore: "A starlit jewel with a thick atmosphere that scatters light into mesmerizing halos.",
    stats: {
      classification: "Radiant aerosol world",
      atmosphere: "68% Nitrogen, 19% Oxygen, 3% Argon",
      climate: "Warm twilight belts, soft thermal gradients",
      notable: ["Prismatic halo skies", "Phosphorescent courtyards", "Reflecting pools"],
      civilization: "Light-harvesting cities and observatories",
    },
  },
  {
    id: "nexarion",
    name: "Nexarion",
    image: "/cosmae/nexarion.png",
    description: "A landscape crisscrossed by colossal arcing conduits spanning from harbor bulwarks to skyborne ports. Towering pylons of bronze and chrome anchor whirling cargo carousels, while glass-sheathed avenues hum with convoys gliding beneath neon pennants.",
    surfaceConditions: {
      gravity: "1.44g",
      dayLength: "20.0 hours",
      yearLength: "510.7 days",
      temperature: "10-28°C",
      surfacePressure: "1.15 atm",
    },
    color: "#a8b5d6",
    metalness: 0.4,
    roughness: 0.5,
    hasAtmosphere: true,
    atmosphereColor: "#c7d2fe",
    orbitRadius: 56,
    orbitSpeed: 0.032,
    spinSpeed: 0.22,
    size: 0.75,
    tilt: 0.18,
    shortLore: "A hub-world of infrastructure and interplanetary trade—built to move civilizations.",
    stats: {
      classification: "Industrial hub terrestrial",
      atmosphere: "74.5% Nitrogen, 23.5% Oxygen, 3% Argon",
      climate: "Variable, stabilized around trade corridors",
      notable: ["Orbital elevators", "Ringed transit loops", "Deep-sea ports"],
      civilization: "Commercial federations and port authorities",
    },
  },
  {
    id: "stellaluna",
    name: "Stellaluna",
    image: "/cosmae/stellaluna.png",
    description: "A world where newborn suns ignite in vibrant plumes and ancient giants collapse into shimmering remnants. Corridors of polished metal wind between adaptive telescopes, each calibrated to unravel the secrets of supernovae.",
    surfaceConditions: {
      gravity: "1.10g",
      dayLength: "19.7 hours",
      yearLength: "402.7 days",
      temperature: "-5 to 18°C",
      surfacePressure: "0.9 atm",
    },
    color: "#6b5b8a",
    emissive: "#8b5cf6",
    emissiveIntensity: 0.1,
    metalness: 0.3,
    roughness: 0.6,
    hasAtmosphere: true,
    atmosphereColor: "#a78bfa",
    orbitRadius: 70,
    orbitSpeed: 0.025,
    spinSpeed: 0.15,
    size: 0.55,
    tilt: 0.25,
    shortLore: "A cosmic research world—where stars are studied in birth, death, and transformation.",
    stats: {
      classification: "Observatory world",
      atmosphere: "64% Nitrogen, 21% Oxygen, 3.5% Argon",
      climate: "Cold nights, crisp days, minimal precipitation",
      notable: ["Obsidian plateau observatories", "Mirror seas", "Deep-space arrays"],
      civilization: "Scientific institutes and archivists",
    },
  },
  {
    id: "terraverde",
    name: "Terraverde",
    image: "/cosmae/terraverde.png",
    description: "A realm where ancient canopies soar above emerald understories, filtering golden sunbeams onto meandering waterways. Hidden springs bubble forth in secluded hollows, feeding tranquil pools that mirror drifting clouds.",
    surfaceConditions: {
      gravity: "0.98g",
      dayLength: "24.5 hours",
      yearLength: "350.3 days",
      temperature: "16-30°C",
      surfacePressure: "1.0 atm",
    },
    color: "#3a9d6e",
    metalness: 0.2,
    roughness: 0.65,
    hasAtmosphere: true,
    atmosphereColor: "#6ee7b7",
    orbitRadius: 85,
    orbitSpeed: 0.02,
    spinSpeed: 0.28,
    size: 0.85,
    tilt: 0.12,
    shortLore: "Lush forests, sparkling lakes, and diverse ecosystems—stewardship is the planet's ethos.",
    stats: {
      classification: "Green terrestrial biosphere",
      atmosphere: "78.9% Nitrogen, 20.7% Oxygen, 0.93% Argon",
      climate: "Balanced seasons, rich biodiversity",
      notable: ["Ancient canopy forests", "Crystal waterways", "Elevated boardwalks"],
      civilization: "Conservation councils and bio-architecture",
    },
  },
];

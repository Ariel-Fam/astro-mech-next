"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useCallback, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { COSMAE_PLANETS, type PlanetDef, type PlanetId } from "./planets";

/* -------------------------- Components -------------------------- */

function SelectionHalo({ radius }: { radius: number }) {
  return (
    <mesh rotation-x={Math.PI / 2}>
      <ringGeometry args={[radius * 1.4, radius * 1.55, 64]} />
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} side={THREE.DoubleSide} />
    </mesh>
  );
}

function OrbitRing({ r }: { r: number }) {
  return (
    <mesh rotation-x={Math.PI / 2}>
      <ringGeometry args={[r - 0.05, r + 0.05, 128]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.1} side={THREE.DoubleSide} />
    </mesh>
  );
}

function StarCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, dt) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += dt * 0.05;
    }
  });

  return (
    <group>
      {/* Central light source */}
      <pointLight intensity={44} distance={200} decay={1} color="#f56929" />
      
      {/* Star sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#f56929" />
      </mesh>
      
      {/* Glow layer */}
      <mesh scale={1.15}>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial color="#fff8dc" transparent opacity={0.4} />
      </mesh>

      {/* Outer corona */}
      <mesh scale={1.35}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial color="#ffeebb" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function Atmosphere({ radius, color }: { radius: number; color: string }) {
  return (
    <mesh scale={1.08}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} side={THREE.BackSide} />
    </mesh>
  );
}

function PlanetRings({ innerRadius, color }: { innerRadius: number; color: string }) {
  return (
    <mesh rotation-x={Math.PI / 2}>
      <ringGeometry args={[innerRadius * 1.4, innerRadius * 2.0, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
    </mesh>
  );
}

/* -------------------------- Planet Component -------------------------- */

function Planet({
  planet,
  selected,
  onSelect,
  registerRef,
}: {
  planet: PlanetDef;
  selected: boolean;
  onSelect: (id: PlanetId) => void;
  registerRef: (id: PlanetId, ref: THREE.Group | null) => void;
}) {
  const groupRef = useRef<THREE.Group | null>(null);
  const planetRef = useRef<THREE.Mesh>(null);
  const angleRef = useRef(Math.random() * Math.PI * 2);
  const [hovered, setHovered] = useState(false);

  // Create material once
  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: planet.color,
      emissive: planet.emissive || "#000000",
      emissiveIntensity: planet.emissiveIntensity || 0,
      metalness: planet.metalness,
      roughness: planet.roughness,
    });
  }, [planet]);

  useFrame((_, dt) => {
    const g = groupRef.current;
    const p = planetRef.current;
    if (!g) return;

    // Orbit around star
    angleRef.current += planet.orbitSpeed * dt;
    const x = Math.cos(angleRef.current) * planet.orbitRadius;
    const z = Math.sin(angleRef.current) * planet.orbitRadius;
    g.position.set(x, 0, z);

    // Spin on axis
    if (p) {
      p.rotation.y += planet.spinSpeed * dt;
    }
  });

  return (
    <group
      ref={(r) => {
        groupRef.current = r;
        registerRef(planet.id, r);
      }}
      rotation={[0, 0, planet.tilt]}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(planet.id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {/* Planet sphere */}
      <mesh ref={planetRef} material={material}>
        <sphereGeometry args={[planet.size, 32, 32]} />
      </mesh>

      {/* Atmosphere glow */}
      {planet.hasAtmosphere && planet.atmosphereColor && (
        <Atmosphere radius={planet.size} color={planet.atmosphereColor} />
      )}

      {/* Rings */}
      {planet.hasRings && planet.ringColor && (
        <PlanetRings innerRadius={planet.size} color={planet.ringColor} />
      )}

      {/* Selection indicator */}
      {selected && <SelectionHalo radius={planet.size} />}

      {/* Label */}
      {(hovered || selected) && (
        <Html distanceFactor={12} position={[0, planet.size + 1, 0]} transform>
          <div className="rounded-full bg-black/70 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm border border-white/20 whitespace-nowrap">
            {planet.name}
          </div>
        </Html>
      )}
    </group>
  );
}

/* -------------------------- Main Experience -------------------------- */

type PlanetRefMap = Record<PlanetId, THREE.Group | null>;

export default function CosmaeExperience() {
  const planets = COSMAE_PLANETS;

  const controlsRef = useRef<CameraControls | null>(null);
  const refs = useRef<PlanetRefMap>({
    aerthys: null,
    cosmara: null,
    elyria: null,
    kairos: null,
    luminaria: null,
    nexarion: null,
    stellaluna: null,
    terraverde: null,
  });

  const [selectedId, setSelectedId] = useState<PlanetId | null>(null);

  const selected = useMemo(
    () => planets.find((p) => p.id === selectedId) ?? null,
    [planets, selectedId]
  );

  const registerRef = useCallback((id: PlanetId, ref: THREE.Group | null) => {
    refs.current[id] = ref;
  }, []);

  const focusPlanet = useCallback(async (id: PlanetId) => {
    const g = refs.current[id];
    const c = controlsRef.current;
    if (!g || !c) return;

    const pos = new THREE.Vector3();
    g.getWorldPosition(pos);

    const planet = planets.find((p) => p.id === id);
    const distance = planet ? 4 + planet.size * 3 : 6;

    const camPos = pos.clone().add(new THREE.Vector3(distance, distance * 0.5, distance));
    await c.setLookAt(camPos.x, camPos.y, camPos.z, pos.x, pos.y, pos.z, true);
  }, [planets]);

  const selectPlanet = useCallback(
    (id: PlanetId) => {
      setSelectedId(id);
      focusPlanet(id);
    },
    [focusPlanet]
  );

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-black">
      {/* UI Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto absolute left-2 right-2 top-2 sm:left-4 sm:right-auto sm:top-4 sm:max-w-md rounded-2xl bg-black/70 sm:bg-black/60 p-3 sm:p-4 text-white backdrop-blur-md border border-white/10">
          <div className="text-xs sm:text-sm opacity-70">Cosmae System</div>
          <div className="text-lg sm:text-2xl font-semibold">Planetary Observatory</div>
          <div className="mt-1 sm:mt-2 text-xs sm:text-sm opacity-70">
            Drag to orbit &bull; Scroll to zoom &bull; Tap a planet to inspect
          </div>
        </div>

        {selected && (
          <div className="pointer-events-auto absolute inset-x-2 bottom-2 sm:inset-auto sm:right-4 sm:top-4 sm:w-[400px] max-h-[70vh] sm:max-h-[90vh] rounded-2xl bg-black/80 sm:bg-black/70 text-white backdrop-blur-md border border-white/10 overflow-hidden flex flex-col shadow-2xl">
            {/* Planet Image */}
            <div className="relative w-full h-32 sm:h-44 shrink-0">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <button
                className="absolute top-2 right-2 sm:top-3 sm:right-3 rounded-full bg-black/60 p-2 hover:bg-black/80 transition-colors"
                onClick={() => setSelectedId(null)}
              >
                <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-2 left-3 sm:bottom-3 sm:left-4">
                <div className="text-[10px] sm:text-xs opacity-80 font-medium">{selected.stats.classification}</div>
                <div className="text-xl sm:text-2xl font-semibold">{selected.name}</div>
              </div>
            </div>
            
            {/* Scrollable Content */}
            <div className="p-3 sm:p-4 overflow-y-auto flex-1 overscroll-contain">
              {/* Description */}
              <p className="text-sm leading-relaxed text-white/90">{selected.description}</p>
              
              {/* Surface Conditions Grid */}
              <div className="mt-3 sm:mt-4 pt-3 border-t border-white/10">
                <div className="text-[10px] sm:text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider">Surface Conditions</div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-white/10 rounded-lg p-2">
                    <div className="text-[10px] sm:text-xs text-white/60">Gravity</div>
                    <div className="text-sm font-medium text-white">{selected.surfaceConditions.gravity}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <div className="text-[10px] sm:text-xs text-white/60">Day Length</div>
                    <div className="text-sm font-medium text-white">{selected.surfaceConditions.dayLength}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <div className="text-[10px] sm:text-xs text-white/60">Year Length</div>
                    <div className="text-sm font-medium text-white">{selected.surfaceConditions.yearLength}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2">
                    <div className="text-[10px] sm:text-xs text-white/60">Temperature</div>
                    <div className="text-sm font-medium text-white">{selected.surfaceConditions.temperature}</div>
                  </div>
                </div>
                <div className="mt-2 bg-white/10 rounded-lg p-2">
                  <div className="text-[10px] sm:text-xs text-white/60">Surface Pressure</div>
                  <div className="text-sm font-medium text-white">{selected.surfaceConditions.surfacePressure}</div>
                </div>
              </div>
              
              {/* Atmosphere */}
              <div className="mt-3 sm:mt-4 pt-3 border-t border-white/10">
                <div className="text-[10px] sm:text-xs font-semibold text-white/70 mb-1 uppercase tracking-wider">Atmosphere</div>
                <div className="text-sm text-white/90">{selected.stats.atmosphere}</div>
              </div>
              
              {/* Climate */}
              <div className="mt-2 sm:mt-3">
                <div className="text-[10px] sm:text-xs font-semibold text-white/70 mb-1 uppercase tracking-wider">Climate</div>
                <div className="text-sm text-white/90">{selected.stats.climate}</div>
              </div>
              
              {/* Notable Features */}
              <div className="mt-3 sm:mt-4 pt-3 border-t border-white/10">
                <div className="text-[10px] sm:text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider">Notable Features</div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selected.stats.notable.map((feature, i) => (
                    <span key={i} className="text-[11px] sm:text-xs bg-white/15 px-2 py-1 rounded-full text-white/90">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Civilization */}
              <div className="mt-2 sm:mt-3 pb-2">
                <div className="text-[10px] sm:text-xs font-semibold text-white/70 mb-1 uppercase tracking-wider">Civilization</div>
                <div className="text-sm text-white/90">{selected.stats.civilization}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 40, 80], fov: 50, near: 0.1, far: 500 }}
        onPointerMissed={() => setSelectedId(null)}
        gl={{ antialias: true }}
      >
        {/* Deep space background */}
        <color attach="background" args={["#050510"]} />
        
        {/* Fog for depth */}
        <fog attach="fog" args={["#050510", 100, 300]} />

        {/* Lighting */}
        <ambientLight intensity={0.3} />

        {/* Star field */}
        <Stars radius={200} depth={50} count={2000} factor={3} fade speed={0.2} />

        <Suspense
          fallback={
            <Html center>
              <div className="rounded-xl bg-black/70 px-6 py-3 text-white backdrop-blur-sm border border-white/20">
                Loading Cosmae System...
              </div>
            </Html>
          }
        >
          {/* Central star */}
          <StarCore />

          {/* Orbit rings */}
          {planets.map((p) => (
            <OrbitRing key={`orbit-${p.id}`} r={p.orbitRadius} />
          ))}

          {/* Planets */}
          {planets.map((p) => (
            <Planet
              key={p.id}
              planet={p}
              selected={p.id === selectedId}
              onSelect={selectPlanet}
              registerRef={registerRef}
            />
          ))}
        </Suspense>

        <CameraControls
          ref={controlsRef}
          makeDefault
          smoothTime={0.5}
          dollySpeed={1.0}
          truckSpeed={1.0}
          minDistance={5}
          maxDistance={180}
        />
      </Canvas>
    </div>
  );
}

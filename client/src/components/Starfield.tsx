import { useEffect, useRef } from 'react';

export default function Starfield() {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starfieldRef.current) return;

    // Generate stars
    const numStars = 150;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${2 + Math.random() * 4}s`;
      starfieldRef.current.appendChild(star);
    }

    // Generate comets (shooting stars) - dramatically increased
    const numComets = 20;
    for (let i = 0; i < numComets; i++) {
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.top = `${Math.random() * 80}%`;
      comet.style.animationDelay = `${Math.random() * 15}s`;
      comet.style.animationDuration = `${6 + Math.random() * 8}s`;
      starfieldRef.current.appendChild(comet);
    }

    // Generate pulsars - dramatically increased
    const numPulsars = 15;
    for (let i = 0; i < numPulsars; i++) {
      const pulsar = document.createElement('div');
      pulsar.className = 'pulsar';
      pulsar.style.left = `${Math.random() * 100}%`;
      pulsar.style.top = `${Math.random() * 100}%`;
      pulsar.style.animationDelay = `${Math.random() * 3}s`;
      pulsar.style.animationDuration = `${1 + Math.random() * 2.5}s`;
      starfieldRef.current.appendChild(pulsar);
    }

    // Generate nebula clouds
    const numNebulae = 5;
    for (let i = 0; i < numNebulae; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';
      const size = 200 + Math.random() * 300;
      nebula.style.width = `${size}px`;
      nebula.style.height = `${size}px`;
      nebula.style.left = `${Math.random() * 100}%`;
      nebula.style.top = `${Math.random() * 100}%`;
      nebula.style.background = `radial-gradient(circle, rgba(168, 139, 250, 0.3) 0%, rgba(168, 139, 250, 0) 70%)`;
      nebula.style.animationDelay = `${Math.random() * 10}s`;
      nebula.style.animationDuration = `${25 + Math.random() * 20}s`;
      starfieldRef.current.appendChild(nebula);
    }

    // Generate distant galaxies
    const numGalaxies = 30;
    for (let i = 0; i < numGalaxies; i++) {
      const galaxy = document.createElement('div');
      galaxy.className = 'galaxy';
      galaxy.style.left = `${Math.random() * 100}%`;
      galaxy.style.top = `${Math.random() * 100}%`;
      galaxy.style.animationDelay = `${Math.random() * 5}s`;
      starfieldRef.current.appendChild(galaxy);
    }
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
}

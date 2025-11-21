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

    // Generate comets (shooting stars)
    const numComets = 8;
    for (let i = 0; i < numComets; i++) {
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.top = `${Math.random() * 60}%`;
      comet.style.animationDelay = `${Math.random() * 20}s`;
      comet.style.animationDuration = `${8 + Math.random() * 6}s`;
      starfieldRef.current.appendChild(comet);
    }

    // Generate pulsars
    const numPulsars = 5;
    for (let i = 0; i < numPulsars; i++) {
      const pulsar = document.createElement('div');
      pulsar.className = 'pulsar';
      pulsar.style.left = `${Math.random() * 100}%`;
      pulsar.style.top = `${Math.random() * 100}%`;
      pulsar.style.animationDelay = `${Math.random() * 2}s`;
      pulsar.style.animationDuration = `${1.5 + Math.random() * 2}s`;
      starfieldRef.current.appendChild(pulsar);
    }
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
}

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

    // Generate comets
    const numComets = 3;
    for (let i = 0; i < numComets; i++) {
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.top = `${Math.random() * 50}%`;
      comet.style.animationDelay = `${Math.random() * 15}s`;
      comet.style.animationDuration = `${12 + Math.random() * 8}s`;
      starfieldRef.current.appendChild(comet);
    }
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
}

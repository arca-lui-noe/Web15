'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [currentAnimal, setCurrentAnimal] = useState(0);
  
  const animals = [
    { name: 'kutya', emoji: '🐕', sound: 'Vau!' },
    { name: 'macska', emoji: '🐱', sound: 'Miau!' },
    { name: 'nyúl', emoji: '🐰', sound: 'Hoppi!' },
    { name: 'madár', emoji: '🐦', sound: 'Csip!' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimal((prev) => (prev + 1) % animals.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader-container">
      <style jsx>{`
        .preloader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          font-family: var(--font-nunito), sans-serif;
        }

        .vet-logo {
          margin-bottom: 2rem;
          text-align: center;
        }

        .stethoscope {
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
          animation: swing 2s ease-in-out infinite;
        }

        .clinic-name {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .clinic-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .animal-parade {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2rem 0;
          height: 120px;
        }

        .animal {
          font-size: 4rem;
          margin: 0 1rem;
          opacity: 0.3;
          transform: scale(0.8);
          transition: all 0.3s ease;
          animation: bounce 1s ease-in-out infinite;
        }

        .animal.active {
          opacity: 1;
          transform: scale(1.2);
          animation: bounce 0.8s ease-in-out infinite, glow 2s ease-in-out infinite;
        }

        .loading-text {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .sound-bubble {
          background: rgba(255, 255, 255, 0.9);
          color: #667eea;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: bold;
          font-size: 1.1rem;
          position: relative;
          animation: bubble 0.8s ease-in-out;
        }

        .sound-bubble::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid rgba(255, 255, 255, 0.9);
        }

        .progress-bar {
          width: 200px;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 2rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
          border-radius: 3px;
          animation: loading 2s ease-in-out infinite;
        }

        .paw-prints {
          position: absolute;
          top: 20%;
          left: 10%;
          opacity: 0.1;
          animation: float 3s ease-in-out infinite;
        }

        .paw-prints:nth-child(2) {
          top: 60%;
          right: 10%;
          left: auto;
          animation-delay: 1s;
        }

        @keyframes swing {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0) scale(var(--scale, 0.8)); }
          50% { transform: translateY(-20px) scale(var(--scale, 0.8)); }
        }

        @keyframes glow {
          0%, 100% { 
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
            --scale: 1.2;
          }
          50% { 
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.8));
            --scale: 1.3;
          }
        }

        @keyframes bubble {
          0% { transform: scale(0) translateY(20px); opacity: 0; }
          50% { transform: scale(1.1) translateY(-5px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }

        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        @media (max-width: 768px) {
          .animal {
            font-size: 3rem;
            margin: 0 0.5rem;
          }
          
          .clinic-name {
            font-size: 1.2rem;
          }
          
          .loading-text {
            font-size: 1rem;
          }
        }
      `}</style>

      {/* Tappancsok a háttérben */}
      <div className="paw-prints">🐾</div>
      <div className="paw-prints">🐾</div>

      {/* Rendelő logó */}
      <div className="vet-logo">
        <div className="stethoscope">🩺</div>
        <div className="clinic-name">Állatorvosi Rendelő</div>
        <div className="clinic-subtitle">Szeretettel várjuk kedvenceit</div>
      </div>

      {/* Állat parádé */}
      <div className="animal-parade">
        {animals.map((animal, index) => (
          <div
            key={animal.name}
            className={`animal ${index === currentAnimal ? 'active' : ''}`}
          >
            {animal.emoji}
          </div>
        ))}
      </div>

      {/* Betöltési szöveg és hangeffekt */}
      <div className="loading-text">
        Betöltés folyamatban...
        <div className="sound-bubble" key={currentAnimal}>
          {animals[currentAnimal].sound}
        </div>
      </div>

      {/* Haladásjelző */}
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
}
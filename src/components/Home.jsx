import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const container = document.querySelector('.home-container');
    if (!container) return;

    // Clear any existing particles to prevent duplicates
    const existingParticles = container.querySelectorAll('.particle');
    existingParticles.forEach(p => p.remove());

    // Particles (Blue Dots Dropping, 20 total)
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(particle);
      particles.push(particle);
      // Debug log to verify particle creation
      console.log(`Particle ${i} created at left: ${particle.style.left}`);
    }

    // Floating Creatures (7 total, positioned like your screenshot)
    const creatureImages = [
      '/creatures/float1.png',
      '/creatures/float2.png',
      '/creatures/float3.png',
      '/creatures/float4.png',
      '/creatures/float5.png',
      '/creatures/float6.png',
      '/creatures/float7.png',
    ];
    const creatures = [];
    const creatureCount = 7;
    for (let i = 0; i < creatureCount; i++) {
      const creature = document.createElement('div');
      creature.className = `floating-creature creature-${i}`;
      const positions = [
        { left: '7%', top: '17%' }, // Top-left
        { left: '45%', top: '13%' }, // Top-right
        { left: '15%', top: '60%' }, // Middle-left
        { left: '78%', top: '30%' }, // Middle-right
        { left: '15%', top: '65%' }, // Bottom-left
        { left: '75%', top: '68%' }, // Bottom-right
        { left: '45%', top: '70%' }, // Center (overlapping hero slightly, but z-index will handle)
      ];
      creature.style.left = positions[i].left;
      creature.style.top = positions[i].top;
      creature.style.backgroundImage = `url(${creatureImages[i]})`;
      creature.style.animationDelay = `${i * 1.5}s`; // Staggered delay for variety
      container.appendChild(creature);
      creatures.push(creature);
      // Debug log to verify creature positioning
      console.log(`Creature ${i} positioned at left: ${positions[i].left}, top: ${positions[i].top}`);
    }

    return () => {
      particles.forEach(p => p.remove());
      creatures.forEach(c => c.remove());
    };
  }, []);

  const connectPhantomWallet = async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } else {
        alert('Please install Phantom Wallet!');
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error('Phantom connection failed:', error);
      alert('Failed to connect Phantom Wallet');
    }
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">SymbioEngine</div>
        <ul className="links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About</a></li>
          <li><a href="#marketplace" onClick={(e) => { e.preventDefault(); navigate('/marketplace'); }}>Marketplace</a></li>
          <li><a href="#profile" onClick={(e) => { e.preventDefault(); navigate('/profile'); }}>Profile</a></li>
        </ul>
      </nav>

      <div className="hero">
        <h1>SymbioEngine</h1>
        <h2>Evolve Your Crypto Destiny</h2>
        <h3>/h3>
        <div className="button-group">
          <button className="evolve-btn" onClick={() => navigate('/evolve')}>
            Begin Evolution
          </button>
          <button className="wallet-btn" onClick={connectPhantomWallet}>
            {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...` : 'Connect Phantom'}
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 SymbioEngine - Powered by Blockchain</p>
      </footer>
    </div>
  );
};

export default Home;

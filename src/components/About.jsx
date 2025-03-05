import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <nav className="navbar">
        <div className="logo">SymbioEngine</div>
        <ul className="links">
          <li><a href="#home" onClick={() => navigate('/')}>Home</a></li>
          <li><a href="#about" onClick={() => navigate('/about')}>About</a></li>
          <li><a href="#marketplace" onClick={() => navigate('/marketplace')}>Marketplace</a></li>
          <li><a href="#profile" onClick={() => navigate('/profile')}>Profile</a></li>
        </ul>
      </nav>

      <div className="about-content">
        <h1>About SymbioEngine</h1>
        
        <section className="about-section">
          <h2>Introduction</h2>
          <p>
            Welcome to SymbioEngine, the cutting-edge platform where you can forge your crypto legacy by evolving digital creatures in a futuristic, cyberpunk universe. SymbioEngine combines blockchain technology with artificial evolution to create a unique experience—spawn, nurture, and evolve your creatures to unlock their full potential and earn rewards.
          </p>
        </section>

        <section className="about-section">
          <h2>Creature Evolution</h2>
          <p>
            Your journey begins with a cybernetic egg. Every 12-16 hours, your creature evolves, progressing through 6 stages, powered by advanced artificial intelligence (AI):
          </p>
          <ul>
            <li>Stage 1: Cyber Egg – The starting point, a glowing egg with neon circuits, analyzed by AI for initial traits.</li>
            <li>Stage 2: Neon Larva – A small, emerging robotic form with basic features, shaped by AI algorithms.</li>
            <li>Stage 3: Synth Cocoon – A transitional phase with intricate designs, refined by AI for unique patterns.</li>
            <li>Stage 4: Pulse Chrysalis – A vibrant, evolving form with enhanced abilities, optimized by AI learning.</li>
            <li>Stage 5: Quantum Hatchling – A near-complete creature with advanced mechanics, driven by AI creativity.</li>
            <li>Stage 6: Celestial Entity – A fully evolved, majestic creature ready for action, determined by AI rarity and traits.</li>
          </ul>
          <p>
            After 6 days (approximately 72-96 hours total), your AI-evolved creature reaches its final form, ready for trading or further engagement. The AI ensures each creature’s evolution is unique, influencing its rarity and capabilities.
          </p>
        </section>

        <section className="about-section">
          <h2>Rarity and Trading</h2>
          <p>
            Each creature has a rarity level (Common, Rare, Epic, Legendary) that determines its value in SymbioCoins, our native cryptocurrency. The exact rewards will be decided after the SymbioCoin launch, ensuring a dynamic and fair system. Once fully evolved, you can trade your creature for SymbioCoins, which are sent directly to your individual Phantom wallet address. The rarity is determined by SymbioEngine’s AI algorithm, making each creature unique.
          </p>
        </section>

        <section className="about-section">
          <h2>Wallet Integration</h2>
          <p>
            Every SymbioEngine user has a unique Phantom wallet address, integrated with the Solana blockchain. This wallet stores your SymbioCoins, tracks your creature data, and receives rewards. Connect your Phantom wallet to start evolving, trading, and managing your digital assets securely.
          </p>
        </section>

        <section className="about-section">
          <h2>Airdrop System</h2>
          <p>
            Join our airdrop to boost your SymbioEngine journey! After 3 days of a creature evolving, our AI system analyzes its rarity. On the 4th day, SymbioCoin holders can start earning SymbioCoins based on the creature’s rarity, but you must hold SymbioCoins to receive these rewards. Check our announcements for eligibility and claim your airdrop rewards in your Phantom wallet.
          </p>
        </section>

        <section className="about-section call-to-action">
          <h2>Join the Evolution</h2>
          <p>
            Start your journey today! Connect your <a href="#" onClick={() => navigate('/')}>Phantom wallet</a>, begin evolving your AI-powered creatures, and dive into the SymbioEngine universe. Together, let’s forge a new crypto legacy!
          </p>
          <button className="evolve-btn" onClick={() => navigate('/')}>
            Return to Home
          </button>
        </section>
      </div>

      <footer className="footer">
        <p>© 2025 SymbioEngine - Powered by Blockchain</p>
      </footer>
    </div>
  );
};

export default About;
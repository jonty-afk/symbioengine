import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Phantom wallet integration (simulated for demo, replace with actual Solana/Phantom SDK in production)
const connectPhantomWallet = async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      const response = await window.solana.connect();
      return response.publicKey.toString();
    } catch (err) {
      console.error('Failed to connect Phantom wallet:', err);
      alert('Failed to connect Phantom wallet. Please try again or install the Phantom extension.');
      return null;
    }
  } else {
    alert('Please install the Phantom wallet extension to use SymbioEngine!');
    return null;
  }
};

const Profile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPostLaunchPreview, setShowPostLaunchPreview] = useState(false);

  useEffect(() => {
    // Check if a username is stored in localStorage
    const storedUsername = localStorage.getItem('symbioUsername');
    if (storedUsername) {
      setUsername(storedUsername);
      fetchProfileData(storedUsername);
    } else {
      setShowNamePrompt(true);
    }
  }, []);

  const fetchProfileData = async (userName) => {
    setIsLoading(true);
    setError('');
    try {
      const walletAddr = await connectPhantomWallet();
      if (walletAddr) {
        setWalletAddress(walletAddr);
      } else {
        throw new Error('Wallet connection failed');
      }
    } catch (error) {
      setError('Failed to connect wallet. Please try again or install Phantom wallet.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const nameInput = e.target.name.value.trim();
    if (nameInput) {
      setUsername(nameInput);
      localStorage.setItem('symbioUsername', nameInput); // Store name in localStorage
      setShowNamePrompt(false);
      fetchProfileData(nameInput);
    } else {
      alert('Please enter a name!');
    }
  };

  if (showNamePrompt) {
    return (
      <div className="profile-container">
        <nav className="navbar">
          <div className="logo">SymbioEngine</div>
          <ul className="links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About</a></li>
            <li><a href="#marketplace" onClick={(e) => { e.preventDefault(); navigate('/marketplace'); }}>Marketplace</a></li>
            <li><a href="#profile" onClick={(e) => { e.preventDefault(); navigate('/profile'); }}>Profile</a></li>
          </ul>
        </nav>

        <div className="profile-content">
          <div className="name-prompt">
            <h1>Enter Your Name</h1>
            <form onSubmit={handleNameSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Type your name"
                className="name-input"
                autoFocus
              />
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>

        <div className="footer">
          <p>© 2025 SymbioEngine - Powered by Blockchain</p>
        </div>
      </div>
    );
  }

  // If no username or wallet, restrict access
  if (!username || !walletAddress) {
    return (
      <div className="profile-container">
        <nav className="navbar">
          <div className="logo">SymbioEngine</div>
          <ul className="links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About</a></li>
            <li><a href="#marketplace" onClick={(e) => { e.preventDefault(); navigate('/marketplace'); }}>Marketplace</a></li>
            <li><a href="#profile" onClick={(e) => { e.preventDefault(); navigate('/profile'); }}>Profile</a></li>
          </ul>
        </nav>

        <div className="profile-content">
          <h1>Profile Access Restricted</h1>
          <p>Please enter your name and connect your wallet to access your profile.</p>
          <button className="access-btn" onClick={() => setShowNamePrompt(true)}>Enter Name</button>
          {!walletAddress && (
            <button className="connect-wallet-btn" onClick={() => fetchProfileData(username)}>Connect Wallet</button>
          )}
        </div>

        <div className="footer">
          <p>© 2025 SymbioEngine - Powered by Blockchain</p>
        </div>
      </div>
    );
  }

  // Sample post-launch data for preview
  const postLaunchPreview = {
    symbioCoins: 750,
    tradingHistory: [
      { date: 'Mar 5, 2025', creature: 'Cyber Phoenix', action: 'Bought', price: '50 SBC' },
      { date: 'Mar 6, 2025', creature: 'Synth Beetle', action: 'Sold', price: '30 SBC' },
    ],
    airdropStatus: 'Claimed: 100 SBC on Mar 4, 2025',
    evolutionProgress: { total: 30, last: 'Mar 7, 2025' },
  };

  return (
    <div className="profile-container">
      <nav className="navbar">
        <div className="logo">SymbioEngine</div>
        <ul className="links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About</a></li>
          <li><a href="#marketplace" onClick={(e) => { e.preventDefault(); navigate('/marketplace'); }}>Marketplace</a></li>
          <li><a href="#profile" onClick={(e) => { e.preventDefault(); navigate('/profile'); }}>Profile</a></li>
        </ul>
      </nav>

      <div className="profile-content">
        <h1 className="profile-title">Profile</h1>
        <div className="launch-notice">
          <p>SymbioCoins have not launched yet. Once launched, all trading, airdrop, and full features will be available. You can still check out our Evolve feature!</p>
        </div>
        <h2 className="welcome-message">Welcome, {username}!</h2>

        <div className="profile-grid">
          <div className="profile-card wallet-card">
            <h3>Wallet Information</h3>
            {isLoading ? (
              <p className="loading">Connecting wallet...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              <>
                <p>Wallet Address: {walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4)}</p>
                <p>SymbioCoin Balance: <span className="placeholder">Available after launch</span></p>
              </>
            )}
          </div>

          <div className="profile-card creatures-card">
            <h3>Preview Creature</h3>
            <p className="creature-preview-text">Creatures will be available after SymbioCoin launch!</p>
          </div>

          <div className="profile-card evolution-card">
            <h3>Evolution Preview</h3>
            <p>Track your creature evolutions here after launch.</p>
          </div>
        </div>

        <button
          className="preview-btn"
          onClick={() => setShowPostLaunchPreview(!showPostLaunchPreview)}
        >
          View Post-Launch Preview
        </button>

        {showPostLaunchPreview && (
          <div className="post-launch-preview">
            <h3>Post-Launch Profile Preview</h3>
            <p>SymbioCoin Balance: {postLaunchPreview.symbioCoins} SBC</p>
            <p>Trading History (Sample): {postLaunchPreview.tradingHistory[0].date} - {postLaunchPreview.tradingHistory[0].action} {postLaunchPreview.tradingHistory[0].creature} for {postLaunchPreview.tradingHistory[0].price}</p>
            <p>Airdrop Status: {postLaunchPreview.airdropStatus}</p>
            <p>Evolution Progress: {postLaunchPreview.evolutionProgress.total} total, Last: {postLaunchPreview.evolutionProgress.last}</p>
          </div>
        )}
      </div>

      <div className="footer">
        <p>© 2025 SymbioEngine - Powered by Blockchain</p>
      </div>

      {/* Neon Particles (20 for Profile, but style is in app.css) */}
      <div className="particle particle-0"></div>
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
      <div className="particle particle-6"></div>
      <div className="particle particle-7"></div>
      <div className="particle particle-8"></div>
      <div className="particle particle-9"></div>
      <div className="particle particle-10"></div>
      <div className="particle particle-11"></div>
      <div className="particle particle-12"></div>
      <div className="particle particle-13"></div>
      <div className="particle particle-14"></div>
      <div className="particle particle-15"></div>
      <div className="particle particle-16"></div>
      <div className="particle particle-17"></div>
      <div className="particle particle-18"></div>
      <div className="particle particle-19"></div>
    </div>
  );
};

export default Profile;
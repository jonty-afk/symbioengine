import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Marketplace = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState('price-asc');
  const [filterRarity, setFilterRarity] = useState('all');
  const [filterPriceRange, setFilterPriceRange] = useState([0, 1000]); // Dynamic max price (placeholder 1000 SBC pre-launch)
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 6;

  // Expanded sample marketplace listings (pre-launch placeholder data, price fixed at '111')
  const listings = [
    { id: 1, name: 'Cyber Phoenix', rarity: 'Legendary', price: '111', seller: '0x1234...5678' },
    { id: 2, name: 'Quantum Serpent', rarity: 'Epic', price: '111', seller: '0x5678...9012' },
    { id: 3, name: 'Neon Scorpion', rarity: 'Rare', price: '111', seller: '0x9012...3456' },
    { id: 4, name: 'Synth Beetle', rarity: 'Common', price: '111', seller: '0x3456...7890' },
    { id: 5, name: 'Celestial Panther', rarity: 'Legendary', price: '111', seller: '0x7890...1234' },
    { id: 6, name: 'Plasma Dragon', rarity: 'Epic', price: '111', seller: '0x2345...6789' },
    { id: 7, name: 'Lunar Wolf', rarity: 'Rare', price: '111', seller: '0x6789...0123' },
    { id: 8, name: 'Glowing Jellyfish', rarity: 'Common', price: '111', seller: '0x0123...4567' },
    { id: 9, name: 'Shadow Tiger', rarity: 'Legendary', price: '111', seller: '0x4567...8901' },
    { id: 10, name: 'Electric Owl', rarity: 'Epic', price: '111', seller: '0x8901...2345' },
  ];

  // Enhanced sample recent trades (pre-launch placeholder data, without volume, price fixed at '111', no timestamp, no status)
  const [recentTrades, setRecentTrades] = useState([
    { id: 1, creature: 'Cyber Phoenix', action: 'Buy', buyer: '0x1234...5678', seller: '0x5678...9012', price: '111', txId: 'TX123ABC' },
    { id: 2, creature: 'Quantum Serpent', action: 'Sell', buyer: '0x9012...3456', seller: '0x2345...6789', price: '111', txId: 'TX456DEF' },
    { id: 3, creature: 'Neon Scorpion', action: 'Buy', buyer: '0x6789...0123', seller: '0x3456...7890', price: '111', txId: 'TX789GHI' },
    { id: 4, creature: 'Celestial Panther', action: 'Sell', buyer: '0x0123...4567', seller: '0x7890...1234', price: '111', txId: 'TX012JKL' },
    { id: 5, creature: 'Plasma Dragon', action: 'Buy', buyer: '0x4567...8901', seller: '0x8901...2345', price: '111', txId: 'TX567MNO' },
  ]);

  useEffect(() => {
    // Simulate periodic updates to recent trades (placeholder for real-time data, without volume, price fixed at '111', no timestamp, no status)
    const interval = setInterval(() => {
      setRecentTrades(prevTrades => {
        const newTrade = {
          id: prevTrades.length + 1,
          creature: ['Plasma Dragon', 'Lunar Wolf', 'Shadow Tiger', 'Synth Beetle', 'Electric Owl'][Math.floor(Math.random() * 5)],
          action: Math.random() > 0.5 ? 'Buy' : 'Sell',
          buyer: `0x${Math.random().toString(16).slice(2, 8)}...${Math.random().toString(16).slice(-4)}`,
          seller: `0x${Math.random().toString(16).slice(2, 8)}...${Math.random().toString(16).slice(-4)}`,
          price: '111',
          txId: `TX${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        };
        return [newTrade, ...prevTrades.slice(0, 5)]; // Keep only the latest 5 trades
      });
    }, 3000); // Update every 3 seconds for faster simulation

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Sort, filter, and paginate listings
  const sortedAndFilteredListings = listings
    .filter(listing => 
      filterRarity === 'all' || listing.rarity.toLowerCase() === filterRarity.toLowerCase()
    )
    .filter(listing => 
      listing.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(listing => 
      listing.price >= filterPriceRange[0] && listing.price <= filterPriceRange[1]
    )
    .sort((a, b) => {
      if (sortOption === 'price-asc') return parseInt(a.price) - parseInt(b.price);
      if (sortOption === 'price-desc') return parseInt(b.price) - parseInt(a.price);
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
      if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
      if (sortOption === 'rarity-asc') return a.rarity.localeCompare(b.rarity);
      if (sortOption === 'rarity-desc') return b.rarity.localeCompare(a.rarity);
      return 0;
    });

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = sortedAndFilteredListings.slice(indexOfFirstListing, indexOfLastListing);
  const totalPages = Math.ceil(sortedAndFilteredListings.length / listingsPerPage);

  const handleBuy = (listingId) => {
    alert(`Trading is unavailable until SymbioCoin launch for listing ID ${listingId}.`);
  };

  const handleTradeBuy = (tradeId) => {
    alert(`Trading is unavailable until SymbioCoin launch for trade ID ${tradeId}.`);
  };

  return (
    <div className="marketplace-container">
      <nav className="navbar">
        <div className="logo">SymbioEngine</div>
        <ul className="links">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About</a></li>
          <li><a href="#marketplace" onClick={(e) => { e.preventDefault(); navigate('/marketplace'); }}>Marketplace</a></li>
          <li><a href="#profile" onClick={(e) => { e.preventDefault(); navigate('/profile'); }}>Profile</a></li>
        </ul>
      </nav>

      <div className="marketplace-content">
        <h1>Marketplace</h1>
        <div className="pre-launch-text">
          <p>Trading is not open yet. SymbioCoins and full marketplace features will be available after launch!</p>
        </div>

        <div className="marketplace-layout">
          <div className="marketplace-main">
            <div className="marketplace-controls">
              <input
                type="text"
                placeholder="Search creatures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-select">
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
                <option value="rarity-asc">Rarity: Low to High</option>
                <option value="rarity-desc">Rarity: High to Low</option>
              </select>
              <select value={filterRarity} onChange={(e) => setFilterRarity(e.target.value)} className="filter-select">
                <option value="all">All Rarities</option>
                <option value="legendary">Legendary</option>
                <option value="epic">Epic</option>
                <option value="rare">Rare</option>
                <option value="common">Common</option>
              </select>
              <input
                type="range"
                min="0"
                max={Math.max(...listings.map(l => parseInt(l.price)), 1000)} // Dynamic max based on listings or 1000 SBC
                value={filterPriceRange[1]}
                onChange={(e) => setFilterPriceRange([filterPriceRange[0], parseInt(e.target.value)])}
                className="price-slider"
              />
              <span>Max Price: {filterPriceRange[1]} SBC</span>
              <button className="my-listings-btn" onClick={() => alert('My Listings feature will be available after SymbioCoin launch.')}>My Listings</button>
            </div>

            <div className="featured-listings">
              <h2>Featured Listings</h2>
              <p>Featured creatures will be highlighted here after launch!</p>
            </div>

            <div className="listings">
              {currentListings.map((listing) => (
                <div key={listing.id} className="listing-container">
                  <div className="listing-card">
                    <h4>{listing.name}</h4>
                    <p>Rarity: {listing.rarity}</p>
                    <p>Price: {listing.price} SBC</p>
                    <p>Seller: {listing.seller}</p>
                  </div>
                  <div className="marketplace-actions">
                    <button className="buy-btn" onClick={() => handleBuy(listing.id)} disabled>Buy</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                Next
              </button>
            </div>
          </div>

          <div className="marketplace-sidebar">
            <div className="recent-trades">
              <h2>Recent Trades</h2>
              <div className="trades-board">
                {recentTrades.map((trade, index) => (
                  <div key={trade.id} className="trade-container" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="trade-card">
                      <div className="trade-row">
                        <span className={`trade-icon ${trade.action === 'Buy' ? 'buy-icon' : 'sell-icon'}`}>
                          {trade.action === 'Buy' ? '↑' : '↓'}
                        </span>
                        <span className="trade-creature">{trade.creature}</span>
                        <span className="trade-txid">TX: {trade.txId.slice(0, 6)}...</span>
                        <button className="trade-buy-btn" onClick={() => handleTradeBuy(trade.id)} disabled>Buy</button>
                      </div>
                    </div>
                    <div className="trade-details">
                      <p>Price:111sbc</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>Trade history will be updated in real-time after launch!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>© 2025 SymbioEngine - Powered by Blockchain</p>
      </div>
    </div>
  );
};

export default Marketplace;
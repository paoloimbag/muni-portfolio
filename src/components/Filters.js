import React from 'react';
import '../styles/Filters.css';

function Filters() {
  return (
    <div className="filters">
      <div className="trending-searches">
        <span>Trending searches:</span>
        <div className="search-tags">
          <a href="#landing">landing page</a>
          <a href="#ecommerce">e-commerce</a>
          <a href="#mobile">mobile app</a>
          <a href="#logo">logo design</a>
          <a href="#dashboard">dashboard</a>
        </div>
      </div>
      
      <div className="filter-categories">
        <div className="category">
          <h3>Popular</h3>
          <ul>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#new">New & Noteworthy</a></li>
          </ul>
        </div>
        
        <div className="category">
          <h3>Categories</h3>
          <ul>
            <li><a href="#animation">Animation</a></li>
            <li><a href="#branding">Branding</a></li>
            <li><a href="#illustration">Illustration</a></li>
            <li><a href="#mobile">Mobile</a></li>
            <li><a href="#print">Print</a></li>
            <li><a href="#product">Product Design</a></li>
            <li><a href="#typography">Typography</a></li>
            <li><a href="#web">Web Design</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filters; 
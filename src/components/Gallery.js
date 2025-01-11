import React from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      caption: "My workspace"
    },
    {
      url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f",
      caption: "Coffee & sketching"
    },
    {
      url: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      caption: "Travel inspiration"
    },
    {
      url: "https://images.unsplash.com/photo-1534531173927-aeb928d54385",
      caption: "Creative process"
    }
  ];

  return (
    <div className="gallery-section">
      <h2 className="section-title">Behind the Scenes</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="gallery-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="photo-wrapper">
              <img src={photo.url} alt={photo.caption} />
              <div className="photo-overlay">
                <span className="photo-caption">{photo.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery; 
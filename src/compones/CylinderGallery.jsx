// CylinderGallery.jsx

import React from 'react';
import styled from 'styled-components';
import './CylinderGallery.css';

// Styled components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 20px;
  box-shadow: -3px 5px 15px #000;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CylinderGallery = () => {
  // Array of image URLs
  const imageUrls = [
    'https://source.unsplash.com/1600x1200?female,portrait',
    'https://source.unsplash.com/1024x768?female,portrait',
    'https://source.unsplash.com/1366x768?female,portrait',
    'https://source.unsplash.com/1600x900?female,portrait',
    'https://source.unsplash.com/1200x1600?female,portrait',
    'https://source.unsplash.com/800x1200?female,portrait',
    'https://source.unsplash.com/1920x1080?female,portrait',
    'https://source.unsplash.com/1080x1920?female,portrait',
    'https://source.unsplash.com/768x1024?female,portrait',
    'https://source.unsplash.com/640x480?female,portrait',
    'https://source.unsplash.com/480x640?female,portrait',
    'https://source.unsplash.com/400x300?female,portrait',
    'https://source.unsplash.com/300x400?female,portrait',
    'https://source.unsplash.com/200x200?female,portrait',
    'https://source.unsplash.com/150x150?female,portrait',
    'https://source.unsplash.com/100x100?female,portrait',
    'https://source.unsplash.com/200x300?female,portrait',
    'https://source.unsplash.com/300x200?female,portrait',
    'https://source.unsplash.com/400x400?female,portrait',
    'https://source.unsplash.com/600x800?female,portrait',
  ];

  return (
    <>
      <h3>Gallery</h3>
      <Container>
        {imageUrls.map((url, index) => (
          <Image key={index} src={url} alt={`image-${index}`} />
        ))}
      </Container>
    </>
  );
};

export default CylinderGallery;

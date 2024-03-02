import React from 'react';
import './styles.css';
import Content from './Content';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
function FadeBackground() {
  return (
    <div className="fade-background">
      <div className="container">
        <Content src="image1.png" alt="Image 1" text="Withdraw safe, fast and secure." />
        <Content src="image2.png" alt="Image 2" text="91 club." />
      </div>
    </div>
  );
}

export default FadeBackground;

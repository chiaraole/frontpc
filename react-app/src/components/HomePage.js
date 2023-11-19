// HomePage.js
import React from 'react';
import MainPhrase from './MainPhrase';
import BookCarousel from './BookCarousel';

const HomePage = ({ books }) => {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '520px'
    }}>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MainPhrase />
      </div>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BookCarousel books={books} />
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage'; 
import LoginPage from './components/LoginPage';

// Importa las imágenes de las portadas de los libros
import cover1 from './assets/book_covers/cover1.jpg';
import cover2 from './assets/book_covers/cover2.jpg';
import cover3 from './assets/book_covers/cover3.jpg';
import cover4 from './assets/book_covers/cover4.jpg';
import cover5 from './assets/book_covers/cover5.jpg';
import cover6 from './assets/book_covers/cover6.jpg';
import cover7 from './assets/book_covers/cover7.jpg';
import cover8 from './assets/book_covers/cover8.jpg';
import cover9 from './assets/book_covers/cover9.jpg';
import cover10 from './assets/book_covers/cover10.jpg';
import cover11 from './assets/book_covers/cover11.jpg';
import cover12 from './assets/book_covers/cover12.jpg';
import cover13 from './assets/book_covers/cover13.jpg';
import cover14 from './assets/book_covers/cover14.jpg';
import cover15 from './assets/book_covers/cover15.jpg';

const bookCovers = [
  [cover1, cover2, cover3, cover4, cover5],
  [cover6, cover7, cover8, cover9, cover10],
  [cover11, cover12, cover13, cover14, cover15]
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage books={bookCovers} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
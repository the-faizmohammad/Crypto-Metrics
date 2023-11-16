import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CryptoHome from './components/CryptoHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<CryptoHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

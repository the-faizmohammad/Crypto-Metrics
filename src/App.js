import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CryptoHome from './components/CryptoHome';
import CryptoDetails from './components/CryptoDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<CryptoHome />} />
          <Route path="/details/:id" element={<CryptoDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

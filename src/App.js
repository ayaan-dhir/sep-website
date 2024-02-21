import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './white-logo.png';
import './App.css';
import Members from './pages/members';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="header-logo" alt="logo" />
          <div className="header-text">
            <p>Startups</p> 
            <Link to="/members" className="header-link">Members</Link>
            <p>Recruitment</p>
          </div>
        </header>
        <Routes>
            <Route path="/members" element={<Members />} />
            {/* Define more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './white-logo.png';
import './App.css';
import './fonts.css';
import Members from './pages/members';
import Startups from './pages/startups';
import FoundersEducation from './pages/founders_education';
import TypingEffect from './Typing';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/"><img src={logo} className="header-logo" alt="logo" /></Link>
          <div className="header-text">
            <Link to="/startups" className="header-link">Startups</Link>
            <Link to="/members" className="header-link">Members</Link>
            <Link to="/founders_education" className="header-link">Founder's Education</Link>
          </div>
        </header>
        
        {/* Routes for different pages */}
        <Routes>
          {/* Define the root path which renders the main content */}
          <Route path="/" element={
            <div className="app-container">
              <h1 className="sigma-eta-pi-center">Sigma Eta Pi</h1>
              <TypingEffect messages={["Work Hard", "Play Hard"]} color="#FFFFFF" size="24px" cursorSize="24px" />
            </div>
          } />
          {/* Other routes */}
          <Route path="/startups" element={<Startups />} />
          <Route path="/members" element={<Members />} />
          <Route path="/founders_education" element={<FoundersEducation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

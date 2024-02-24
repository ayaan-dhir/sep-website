import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './white-logo.png';
import './App.css';
import './fonts.css';
import Members from './pages/board';
import Startups from './pages/startups';
import FoundersEducation from './pages/founders_education';
import Typewriter from "typewriter-effect";

function App() {
  // State to manage dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/"><img src={logo} className="header-logo" alt="logo" /></Link>
          <div className="header-text">
            <Link to="/startups" className="header-link">Startups</Link>

            <div className="header-link dropdown">
              <div onClick={toggleDropdown}>Members</div>
              {/* Dropdown Menu */}
              {isDropdownVisible && (
                <div className="dropdown-content">
                  <Link to="/members/board" className="dropdown-item">Board</Link>
                  <Link to="/members/startups" className="dropdown-item">Startups</Link>
                  <Link to="/members/founders_education" className="dropdown-item">Founder's Education</Link>
                </div>
              )}
            </div>
            <Link to="/founders_education" className="header-link">Founder's Education</Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <div className="app-container">
              <div className="centered-content">
                <h1 className="sigma-eta-pi-center">Sigma Eta Pi</h1>
                <h1 className="typing-effect">
                  <Typewriter
                    options={{
                      strings: ["Build.", "Connect.", "Launch."],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 60,
                      pauseFor: 1500,
                    }}
                  />
                </h1>
              </div>
            </div>
          } />
          <Route path="/startups" element={<Startups />} />
          {/* Update the paths as necessary */}
          <Route path="/members/board" element={<Members />} />
          <Route path="/members/startups" element={<Startups />} />
          <Route path="/members/founders_education" element={<FoundersEducation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

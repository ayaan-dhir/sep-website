import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './white-logo.png';
import './App.css';
import './fonts.css';
import Members from './pages/members';
import Startups from './pages/startups';
import FoundersEducation from './pages/founders_education';
import Typewriter from "typewriter-effect";

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
          <Route path="/members" element={<Members />} />
          <Route path="/founders_education" element={<FoundersEducation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

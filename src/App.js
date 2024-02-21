import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './white-logo.png';
import './App.css';
import './fonts.css'
import Members from './pages/members';
import Startups from './pages/startups'
import FoundersEducation from './pages/founders_education'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="header-logo" alt="logo" />
          <div className="header-text">
            <Link to="/startups" className="header-link">Startups</Link>
            <Link to="/members" className="header-link">Members</Link>
            <Link to="/founders_education" className="header-link">FoundersEducation</Link>
          </div>
        </header>


        <Routes>
            <Route path="/startups" element={<Startups />} />
            <Route path="/members" element={<Members />} />
            <Route path="/founders_education" element={<FoundersEducation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import logo from './white-logo.png';
// import black_logo from './black-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="header-logo" alt="logo" />
        <div className="header-text">
          <p>Startups</p> <p>Members</p> <p>Recruitment</p>
        </div>
      </header>
    </div>

  );
}

export default App;

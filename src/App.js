import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import BasicInformation from './components/BasicInformation';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
          <nav>
            <ul>
              <li><Link to="/">Basic Information</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/developer-setup">Developer Setup</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<BasicInformation />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/developer-setup" element={<DeveloperSetup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

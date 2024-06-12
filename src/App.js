import React from 'react';
import './App.css';
import StatisticsPanel from './StatisticsPanel';
import SessionsPanel from './SessionsPanel';

function App() {
  return (
    <div className="App">
      <div className="left-panel">
        <StatisticsPanel />
      </div>
      <div className="right-panel">
        <SessionsPanel />
      </div>
    </div>
  );
}

export default App;

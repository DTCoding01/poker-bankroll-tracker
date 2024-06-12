import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import StatisticsPanel from './StatisticsPanel';
import SessionsPanel from './SessionsPanel';
import SignIn from './SignIn';

//fake session code for testing
const generateFakeSessions = () => {
  const sessions = [];
  const totalSessions = 30;
  const totalProfit = 3000;
  const averageProfitPerSession = totalProfit / totalSessions;

  for (let i = 1; i <= totalSessions; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    sessions.push({
      id: i,
      date: date.toISOString().split('T')[0],
      duration: 2,
      profit: averageProfitPerSession,
    });
  }

  return sessions;
};

function App() {
  const [user, setUser] = useState(null);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
      const storedSessions = localStorage.getItem('sessions');
      if (storedSessions) {
        setSessions(JSON.parse(storedSessions));
      } else {
        const fakeSessions = generateFakeSessions();
        setSessions(fakeSessions);
        localStorage.setItem('sessions', JSON.stringify(fakeSessions));
      }
    }
  }, []);

  const handleSignIn = (username) => {
    setUser(username);
    const fakeSessions = generateFakeSessions();
    setSessions(fakeSessions);
    localStorage.setItem('user', username);
    localStorage.setItem('sessions', JSON.stringify(fakeSessions));
  };

  const handleSignOut = () => {
    setUser(null);
    setSessions([]);
    localStorage.removeItem('user');
    localStorage.removeItem('sessions');
  };

  return (
    <div className="App">
      <Header user={user} onSignOut={handleSignOut} />
      {user ? (
        <div className="content">
          <div className="left-panel">
            <StatisticsPanel sessions={sessions} />
          </div>
          <div className="right-panel">
            <SessionsPanel sessions={sessions} setSessions={setSessions} />
          </div>
        </div>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default App;

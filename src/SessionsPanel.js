import React, { useState } from 'react';
import SessionDetail from './SessionDetail';

function SessionsPanel({ sessions, setSessions }) {
  const [showModal, setShowModal] = useState(false);
  const [newSession, setNewSession] = useState({
    date: '',
    duration: '',
    profit: ''
  });

  const handleAddSession = () => {
    const newSessionData = {
      id: sessions.length + 1,
      date: newSession.date,
      duration: parseInt(newSession.duration),
      profit: parseFloat(newSession.profit),
    };

    setSessions([...sessions, newSessionData]);
    setShowModal(false);
    setNewSession({ date: '', duration: '', profit: '' });
  };

  return (
    <div className="sessions-panel">
      <div className="sessions-header">
        <h2>Sessions</h2>
        <button onClick={() => setShowModal(true)}>Add Session</button>
      </div>
      <div className="sessions-list">
        {sessions.map(session => (
          <SessionDetail key={session.id} session={session} />
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h3>Add New Session</h3>
            <div className="new-session-form">
              <input
                type="date"
                value={newSession.date}
                onChange={e => setNewSession({ ...newSession, date: e.target.value })}
                placeholder="Date"
              />
              <input
                type="number"
                value={newSession.duration}
                onChange={e => setNewSession({ ...newSession, duration: e.target.value })}
                placeholder="Duration (hours)"
              />
              <input
                type="number"
                value={newSession.profit}
                onChange={e => setNewSession({ ...newSession, profit: e.target.value })}
                placeholder="Profit/Loss"
              />
              <button onClick={handleAddSession}>Add Session</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SessionsPanel;

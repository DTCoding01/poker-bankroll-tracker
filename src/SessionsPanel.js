import React from 'react';
import SessionDetail from './SessionDetail.js';

function SessionsPanel() {
  return (
    <div className="sessions-panel">
      <h2>Sessions</h2>
      {/* Iterate over sessions and display them */}
      <SessionDetail />
    </div>
  );
}

export default SessionsPanel;

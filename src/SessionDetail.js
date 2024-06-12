// src/SessionDetail.js
import React from 'react';

function SessionDetail({ session }) {
  return (
    <div className="session-detail">
      <h3>Session on {session.date}</h3>
      <p>Duration: {session.duration} hours</p>
      <p>Profit/Loss: ${session.profit}</p>
    </div>
  );
}

export default SessionDetail;

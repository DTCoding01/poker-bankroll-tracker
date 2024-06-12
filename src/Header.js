import React from 'react';

function Header({ user, onSignOut }) {
  return (
    <div className="header">
      <span>Poker Bankroll Tracker</span>
      {user && (
        <div className="user-info">
          <span>{user}</span>
          <button onClick={onSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default Header;

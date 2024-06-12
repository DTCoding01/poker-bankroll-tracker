import React, { useState } from 'react';

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');

  const handleSignIn = () => {
    if (username.trim() !== '') {
      localStorage.setItem('user', username);
      onSignIn(username);
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;

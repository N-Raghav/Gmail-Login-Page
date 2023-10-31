import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="App">
      <div className="login-container">
        <img
          src="/google.jpg"
          className="gmail-logo"
        />
        <p className="sign-in">Sign in</p>
        <p className="to-continue">to continue to Gmail</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <a href="#" className="forgot-email">Forgot email?</a>
        </form>
        <p className="private-window">Not your computer? Use a Private Window to sign in. </p>
        <a href="#" className='learn-more'>LearnMore.</a>
        <br></br>
        <p className="create-account">Create account</p>
        <button type="button" className="next">Next</button>
      </div>
      <div className='pagebottom'>
        <div className='languages'>
          <select name="language" id="language">
            <option value="English(US)">English(US)</option>
            <option value="English(UK)">English(UK)</option>
            <option value="Tamil">Tamil</option>
            <option value="French">French</option>
          </select>
        </div>





      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccessMessage('');
      return;
    }

    // Basic client-side validation (expand as needed)
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }

    // In a real application, you would send this data to your backend
    const userData = { name, email, password };
    console.log('Sending sign-up data:', userData);

    try { 
      setSuccessMessage('Sign-up successful!');
      setError('');
      navigate('/');


    } catch (err) {
      setError('An error occurred during sign-up.');
      setSuccessMessage('');
      console.error('Sign-up error:', err);
    }
  };
 
  return (
    <div><center>
      <h2>
        Open a free demat & trading account online
      </h2>
      <h4 >
        Start investing brokerage free and join a community of 1.5+ crore investors and traders
      </h4>
      <img
              src="media/images/image.svg"
              style={{ borderRadius: "100%", width: "50%" }}
            />

    <div className='signup'>       
      <h2 className='signup_heading'>Signup Now</h2>
      <h5 className='signup_heading'>Or track your existing application</h5>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:&nbsp;</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div><br/>
        <div>
          <label htmlFor="email">Email:&nbsp;</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div><br/>
        <div>
          <label htmlFor="password">Password:&nbsp;</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div><br/>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:&nbsp;</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div><br/>
        <button className='submit' type="submit">Sign Up</button>
      </form>
      </div> 
      <h6>By proceeding, you agree to the Zerodha terms & privacy policy</h6>
      </center>
    </div>
  );
}

export default Signup;
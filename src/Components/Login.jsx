import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from './FirebaseConfig';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);  // Controls button disabling
  const [isLoading, setIsLoading] = useState(false);  // Controls loading spinner

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);  // Set loading to true
    setIsFormValid(false);  // Disable the button when form is submitted

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Login successful');
      setEmail('');
      setPassword('');
      // Navigate to another page if needed, or perform further actions
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);  // Set loading to false after login process
      setIsFormValid(true);  // Re-enable the button for future attempts
    }
  };

  return (
    <div className="login-page">
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="col-md-4">
          <h2 className="text-center mb-4 label">Login</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isLoading}  // Disable if form is invalid or loading
              className="btn btn-primary w-100"
            >
              
              {isLoading ? (
    <div className="loader"></div>  // Simple loader
  ) : (
                'Login'
              )}
            </button>

            <div className="text-center mt-3">
              <p className='label'>
                Don't have an account?
                <Link to="/register" className="link"> Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

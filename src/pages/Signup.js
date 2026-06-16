import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({

    email: '',
    username: '',
    password: '',
    confirmPassword: ''

  });

  const handleChange = (e) => {

    setUser({

      ...user,

      [e.target.name]: e.target.value

    });

  };

  const handleSignup = () => {

    if (
      !user.email ||
      !user.username ||
      !user.password ||
      !user.confirmPassword
    ) {

      alert('Please fill all fields');

      return;

    }

    if (
      user.password !== user.confirmPassword
    ) {

      alert('Passwords do not match');

      return;

    }

    localStorage.setItem(
      'user',
      JSON.stringify({

        email: user.email,

        username: user.username,

        password: user.password

      })
    );

    alert('Account Created Successfully');

    navigate('/login');

  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Create Account</h1>

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleChange}
        />

        <button onClick={handleSignup}>
          Create Account
        </button>

      </div>

    </div>

  );

}

export default Signup;
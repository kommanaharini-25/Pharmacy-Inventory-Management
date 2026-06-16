import { Link, useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {

    alert('Login Successful');

    navigate('/dashboard');

  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account?
        </p>

        <Link to="/">
          Create Account
        </Link>

      </div>

    </div>

  );

}

export default Login;
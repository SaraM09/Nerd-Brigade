import { useState } from 'react';
import { useAuth } from '../../Context/useContext'; // Ensure the path is correct
const Profile = () => {
  const { currentUser, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = async () => {
    setError('');
    try {
      await login(email, password);
      console.log("Logged in successfully");
    } catch (error) {
      setError('Failed to log in');
      console.error("Login failed:", error);
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
      console.log("Logged out successfully");
    } catch (error) {
      setError('Failed to log out');
      console.error("Logout failed", error);
    }
  };
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="card p-5 shadow">
          <h1 className="text-center mb-4">Login Page</h1>
          {currentUser ? (
            <>
              <p className="text-center">Welcome, {currentUser.email}!</p>
              <div className="d-grid gap-2">
                <button className="btn btn-danger btn-lg" onClick={handleLogout}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleLogin} className="needs-validation" noValidate>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">Login</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};
export default Profile;










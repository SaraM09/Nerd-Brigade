import { useState } from "react";
import { auth } from "../../Firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signup successful, user:", userCredential.user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Signup failed:", error.message);
        setError(error.message);
      })
      .finally(() => {
         setEmail("");
         setPassword("");
      });
  };
  return (
<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-12">
      <form onSubmit={handleSignupSubmit} className="card p-5 shadow">
        <h1 className="text-center mb-4">Create Account</h1>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary btn-lg w-100">Sign Up</button>
      </form>
    </div>
  </div>
</div>
  );
};
export default SignUp;

























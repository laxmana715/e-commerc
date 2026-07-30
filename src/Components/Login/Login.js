import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Register/Register.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.get(
        `https://wqjaxtdxzjmlsaeoxyhq.supabase.co/rest/v1/register?email=eq.${email}&password=eq.${password}`,
        {
          headers: {
                    apikey:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA",
                    Authorization:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxamF4dGR4emptbHNhZW94eWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDE4MTcsImV4cCI6MjA5NjkxNzgxN30.Np2wvORlImgoan2P7DPeJK8SN8P305vl9ISsUTSMWYA",
                },
        }
      );

     


if (res.data.length > 0) {

  localStorage.setItem("user", JSON.stringify(res.data[0]));

  alert("Login Successful ✅");

  navigate("/home");

} else {

  alert("Invalid Email or Password");

}









    } catch (err) {

      console.error(err);

      alert("Login Failed");

    }

  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="login">
          <h1>Welcome Back</h1>
          <p>Log in to continue shopping with Saree Elegance.</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <div className="auth-link">
            New here? <Link to="/register">Create an account</Link>
          </div>
        </div>

        <div className="auth-image">
          <img
            src="https://images.unsplash.com/photo-1533055640609-24b498cdfa20?auto=format&fit=crop&w=900&q=80"
            alt="Elegant saree"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
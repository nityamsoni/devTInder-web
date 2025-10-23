import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId,
        password
      },
      { withCredentials: true }
    );

      console.log(res.data);
      alert("Login successful!");
      // you can navigate using react-router: navigate('/dashboard')
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="w-full max-w-4xl bg-base-200 shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 items-stretch h-[70vh] md:h-[75vh]">
        
        {/* Left: image panel */}
        <div
          className="hidden md:block bg-cover bg-center h-full w-full"
          style={{ backgroundImage: "url('/chat.png')" }}
          aria-hidden="true"
        />

        {/* Right: form panel */}
        <div className="p-8 flex items-center justify-center">
          <form className="w-full max-w-sm" onSubmit={handleLogin}>
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Welcome back to DevTinder
            </h2>

            <label className="label text-base text-white m-3">Email</label>
            <input
              type="email"
              className="input input-bordered w-full mb-4"
              placeholder="you@example.com"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />

            <label className="label text-base text-white m-3">Password</label>
            <input
              type="password"
              className="input input-bordered w-full mb-4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
              type="submit"
              className={`btn btn-primary w-full mt-4 ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

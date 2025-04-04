import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", user);
      alert("Account created successfully!");
      navigate("/login");
    } catch (error) {
      alert("Email already exists");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

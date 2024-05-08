import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //   // Optionally, you can access the user information from userCredential.user
    //   console.log('Signup successful:', userCredential.user);
    //   // Clear the form fields after successful signup
    //   setEmail('');
    //   setPassword('');
    //   setError(null);
    //   setSuccessMessage('Signup successful!');
    // } catch (error) {
    //   setError(error.message);
    //   console.error('Error signing up:', error);
    // }

    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setSuccessMessage("");
      } else {
        setError("");
        setSuccessMessage(data.message);
        setEmail("");
        setPassword("");
        // navigate to login
        navigate("/login");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;




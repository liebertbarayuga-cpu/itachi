"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Valid Credentials
  const validUsername = "admin";
  const validPassword = "12345";

  // Login Function
  function handleLogin() {
    if (username === "" || password === "") {
      setError("Please fill in all fields.");
    } else if (username !== validUsername) {
      setError("Wrong username!");
    } else if (password !== validPassword) {
      setError("Wrong password!");
    } else {
      setError("");
      router.push("/profile");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h1 className="text-3xl font-bold text-center mb-6">Login Form</h1>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 w-full rounded-lg mb-4"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full rounded-lg mb-3"
        />

        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          <label>Show Password</label>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          className="bg-black text-white p-3 w-full rounded-lg hover:bg-gray-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    if (!username || !password) {
      setError("Please fill in all fields.");
    } else if (username !== "admin") {
      setError("Wrong username!");
    } else if (password !== "12345") {
      setError("Wrong password!");
    } else {
      setError("");
      router.push("/profile");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-2xl font-bold text-center">Login</h1>
        <form onSubmit={(event) => { event.preventDefault(); handleLogin(); }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-3 h-11 w-full rounded-md border border-[var(--border)] px-3 outline-none focus:border-blue-700"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 w-full rounded-md border border-[var(--border)] px-3 outline-none focus:border-blue-700"
          />
          <label className="mt-3 mb-4 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show password
          </label>
          {error && <p className="mb-3 text-sm text-blue-700">{error}</p>}
          <button type="submit" className="h-11 w-full rounded-md bg-blue-700 font-semibold text-white">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

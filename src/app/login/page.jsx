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
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/login"><span className="brand-mark">LB</span>Barayuga</a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <div className="page-frame flex items-center justify-center" style={{ minHeight: "calc(100vh - 124px)" }}>
        <div className="grid w-full max-w-[960px] overflow-hidden md:grid-cols-2 panel">
          <section className="flex flex-col justify-between bg-[#20211f] p-8 text-white sm:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#e7a16e]">Personal portal</span>
            <div className="my-16 md:my-0">
              <h1 className="max-w-sm text-4xl font-extrabold leading-[1.08] sm:text-5xl">Welcome back to your space.</h1>
              <p className="mt-5 max-w-sm leading-7 text-white/65">Sign in to view your profile and stay connected.</p>
            </div>
            <p className="text-sm text-white/45">Life is a choice, not a destiny.</p>
          </section>

          <form
            className="p-8 sm:p-12"
            onSubmit={(event) => { event.preventDefault(); handleLogin(); }}
          >
            <p className="mb-2 text-sm font-bold text-[var(--accent)]">Account access</p>
            <h2 className="text-3xl font-extrabold tracking-tight">Sign in</h2>
            <p className="mt-2 mb-8 text-sm text-[var(--ink-muted)]">Enter your details to continue.</p>

            <label className="mb-2 block text-sm font-bold" htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Enter username" value={username}
              onChange={(e) => setUsername(e.target.value)} className="field mb-5" />

            <label className="mb-2 block text-sm font-bold" htmlFor="password">Password</label>
            <input id="password" type={showPassword ? "text" : "password"} placeholder="Enter password"
              value={password} onChange={(e) => setPassword(e.target.value)} className="field" />

            <label className="mt-4 mb-6 flex items-center gap-2 text-sm text-[var(--ink-muted)]">
              <input type="checkbox" checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)} />
              Show password
            </label>

            {error && <p role="alert" className="mb-4 rounded-lg bg-[#fff0e7] px-4 py-3 text-sm font-bold text-[#a6431a]">{error}</p>}
            <button type="submit" className="primary-button w-full">Sign in</button>
          </form>
        </div>
      </div>
    </main>
  );
}

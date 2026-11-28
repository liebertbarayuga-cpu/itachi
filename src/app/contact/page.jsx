"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/login"><span className="brand-mark">LB</span>Barayuga</a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="/profile">Profile</a>
          <a href="/about">About</a>
        </nav>
      </header>
      <div className="page-frame flex items-center" style={{ minHeight: "calc(100vh - 172px)" }}>
        <section className="panel grid w-full overflow-hidden md:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-[var(--accent)] p-8 text-white sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/75">Get in touch</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Contact</h1>
          </div>
          <div className="p-8 sm:p-12">
            <p className="text-sm font-bold text-[var(--ink-muted)]">Email address</p>
            <a className="mt-2 block break-all text-2xl font-extrabold text-[var(--foreground)] underline decoration-[var(--accent)] decoration-2 underline-offset-8" href="mailto:liebertbarayuga.com">liebertbarayuga.com</a>
            <button onClick={() => router.back()} className="secondary-button mt-10">Go back</button>
          </div>
        </section>
      </div>
    </main>
  );
}

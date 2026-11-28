"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/login"><span className="brand-mark">LB</span>Barayuga</a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="/profile">Profile</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <div className="page-frame">
        <section className="panel grid overflow-hidden md:grid-cols-[1fr_0.8fr]">
          <div className="flex flex-col justify-center p-8 sm:p-14">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Our motto</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">Life is a choice, not a destiny.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink-muted)]">Long live Nukie Blaze. Stay grounded, stay curious, and keep moving toward the life you choose.</p>
            <button onClick={() => router.push("/login")} className="secondary-button mt-8 w-fit">Back to login</button>
          </div>
          <div className="min-h-72 bg-[var(--foreground)] p-6">
            <img className="h-full min-h-72 w-full rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThidW0IQ1t6gfP008a2EbXDldH6Q3-ujq0zzb6nEEzSA&s=10s" alt="Nukie Blaze" />
          </div>
        </section>
      </div>
    </main>
  );
}

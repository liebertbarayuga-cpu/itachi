"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/profile"><span className="brand-mark">LB</span>Barayuga</a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Log out</a>
        </nav>
      </header>
      <div className="page-frame">
        <section className="panel overflow-hidden">
          <div className="h-36 bg-[linear-gradient(135deg,#20211f,#43443f)]"></div>
          <div className="px-6 pb-8 sm:px-10">
            <div className="-mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div className="flex items-end gap-5">
                <div className="grid h-24 w-24 place-items-center rounded-[22px] border-4 border-[var(--surface)] bg-[var(--accent)] text-3xl font-black text-white shadow-lg">LB</div>
                <div className="pb-1">
                  <p className="text-sm font-bold text-[var(--accent)]">Administrator</p>
                  <h1 className="text-3xl font-extrabold tracking-tight">Welcome, Admin</h1>
                </div>
              </div>
              <button onClick={() => router.push("/login")} className="secondary-button">Sign out</button>
            </div>
            <div className="mt-10 grid gap-4 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
              <article className="rounded-2xl bg-[#f4efe5] p-5">
                <p className="text-sm text-[var(--ink-muted)]">Account status</p>
                <p className="mt-2 font-extrabold">Active</p>
              </article>
              <article className="rounded-2xl bg-[#f4efe5] p-5">
                <p className="text-sm text-[var(--ink-muted)]">Role</p>
                <p className="mt-2 font-extrabold">Administrator</p>
              </article>
              <article className="rounded-2xl bg-[#f4efe5] p-5">
                <p className="text-sm text-[var(--ink-muted)]">Session</p>
                <p className="mt-2 font-extrabold">Signed in</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

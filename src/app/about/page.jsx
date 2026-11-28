"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="my-4">Long live Nukie Blaze. Palayo sa suyop.</p>
        <img
          className="mb-4 w-full rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThidW0IQ1t6gfP008a2EbXDldH6Q3-ujq0zzb6nEEzSA&s=10s"
          alt="About"
        />
        <button
          onClick={() => router.push("/")}
          className="h-11 w-full rounded-md bg-blue-700 font-semibold text-white"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}

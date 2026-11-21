"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center bg-yellow-200 text-black p-10 m-7">
      <div className="text-xl font-bold text-center bg-gray-100 p-4 rounded-2xl shadow">
        <p className="font-bold text-2xl text-center">About</p>

        <p className="text-lg mb-4">Long live Nukie Blaze. Palayo sa suyop.</p>

        <img
          className="rounded-2xl shadow"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThidW0IQ1t6gfP008a2EbXDldH6Q3-ujq0zzb6nEEzSA&s=10s"
          alt="About image"
        />

        <button
          onClick={() => router.push("/")}
          className="bg-black text-white p-2 px-4 rounded-2xl shadow mt-4 hover:bg-gray-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

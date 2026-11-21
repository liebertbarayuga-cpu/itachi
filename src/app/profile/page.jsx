"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-200">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Profile!</h1>

        <p className="text-lg mb-4">You have successfully logged in.</p>

        <button
          onClick={() => router.push("/login")}
          className="bg-black text-white p-3 px-6 rounded-lg hover:bg-gray-700"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

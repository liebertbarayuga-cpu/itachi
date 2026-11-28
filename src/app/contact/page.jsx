"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="my-4 break-all">Gmail: liebertbarayuga.com</p>
        <button
          onClick={() => router.back()}
          className="h-11 w-full rounded-md bg-blue-700 font-semibold text-white"
        >
          Back
        </button>
      </div>
    </main>
  );
}

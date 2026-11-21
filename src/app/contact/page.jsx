"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center bg-yellow-200 text-black p-10 m-7">
      <div
        className="text-xl font-bold text-center bg-black-100 p-4 px-4 rounded-2g
   shadow"
      >
        <p className="font-bold text-2xl text-center">Contact</p>
        <p className="text-lg mb-4">Gmail: liebertbarayuga.com </p>
        <button
          onClick={() => router.back()}
          className="bg-black-100 text-black p-2 px-4 rounded-2g shadow mt-4"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

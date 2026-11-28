"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <div className="w-full max-w-sm rounded-lg border border-[var(--border)] p-6 text-center">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="mx-auto my-5 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-blue-700 bg-gray-100">
          <Image
            src="/profile-photo.jpg"
            alt="Profile photo"
            width={144}
            height={144}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <p className="mb-4 text-blue-700">You have successfully logged in.</p>
        <button
          onClick={() => router.push("/login")}
          className="h-11 w-full rounded-md bg-blue-700 font-semibold text-white"
        >
          Back to Login
        </button>
      </div>
    </main>
  );
}

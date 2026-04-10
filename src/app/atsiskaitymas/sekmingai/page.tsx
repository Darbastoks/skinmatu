"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center p-8 text-center pt-32">
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h1 className="text-3xl font-light mb-4">Užsakymas sėkmingas!</h1>
      <p className="text-zinc-600 mb-2 max-w-md">Dėkojame už Jūsų užsakymą. Netrukus į jūsų el. paštą atsiųsime patvirtinimą.</p>
      
      {orderId && (
        <div className="bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-sm my-8">
          <p className="text-sm text-zinc-500 mb-1">Užsakymo numeris:</p>
          <p className="text-xl font-medium tracking-wide">{orderId}</p>
        </div>
      )}

      <Link href="/prekes" className="bg-black text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-zinc-800 transition-colors mt-4">
        Tęsti apsipirkimą
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen"></div>}>
      <SuccessContent />
    </Suspense>
  );
}

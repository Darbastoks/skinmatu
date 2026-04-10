"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Hardcoded mock credentials
    if (username === "admin" && password === "admin") {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin");
    } else {
      setError("Neteisingas vartotojo vardas arba slaptažodis");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 border border-zinc-200 shadow-sm rounded-sm">
        <div className="flex justify-center mb-8">
           <h1 className="text-2xl font-light tracking-widest uppercase">SkinMatu Admin</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 text-sm text-center border border-red-100 rounded-sm">
              {error}
            </div>
          )}
          
          <div className="flex flex-col">
            <label className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Vartotojo vardas</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-zinc-300 p-3 focus:border-black focus:ring-0 outline-none transition-colors"
              required 
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Slaptažodis</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-zinc-300 p-3 focus:border-black focus:ring-0 outline-none transition-colors"
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white px-6 py-4 mt-4 uppercase tracking-widest text-sm font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50"
          >
            {loading ? "Jungiamasi..." : "Prisijungti"}
          </button>
        </form>
        
        <p className="text-xs text-zinc-400 text-center mt-6">
          Demo prisijungimas: admin / admin
        </p>
      </div>
    </div>
  );
}

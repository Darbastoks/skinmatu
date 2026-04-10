"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/prisijungti";

  if (isLoginPage) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <span className="font-serif text-xl font-bold tracking-[0.2em] uppercase text-mahogany">
            SkinMatu
          </span>
          <span className="block text-xs text-gray-500 mt-1 uppercase tracking-widest font-medium">Valdymo pultas</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/admin"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              pathname === "/admin" 
                ? "bg-mahogany/5 text-mahogany" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
            </svg>
            Apžvalga
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 7h-3a2 2 0 01-2-2V2"/>
              <path d="M9 18a2 2 0 01-2-2V4a2 2 0 012-2h7l4 4v10a2 2 0 01-2 2z"/>
            </svg>
            Užsakymai
            <span className="ml-auto bg-mahogany text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
            </svg>
            Produktai
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            Turinio valdymas
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-md text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
            </svg>
            Atsijungti
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <span className="font-serif text-lg font-bold tracking-[0.2em] uppercase text-mahogany">SkinMatu</span>
          <button className="text-gray-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        
        {/* Topbar */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            {pathname === "/admin" ? "Apžvalga" : "Valdymas"}
          </h1>
          <div className="flex items-center gap-4">
             <Link href="/" className="text-sm font-medium text-tobacco hover:text-mahogany transition-colors" target="_blank">
               Žiūrėti parduotuvę ↗
             </Link>
             <div className="w-8 h-8 rounded-full bg-mahogany text-white flex items-center justify-center font-bold text-sm">
               IM
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 sm:p-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

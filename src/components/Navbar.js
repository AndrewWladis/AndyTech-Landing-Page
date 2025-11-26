"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl hover:text-blue-300 transition-colors">AndyTech</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/mobile-products" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Mobile Apps</Link>
              <Link href="/freelancing" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Freelancing</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

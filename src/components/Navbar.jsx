import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-tight">CoachAI</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-blue-100/80 hover:text-white transition-colors">Produit</a>
          <a href="#pricing" className="text-sm text-blue-100/80 hover:text-white transition-colors">Tarifs</a>
          <a href="#faq" className="text-sm text-blue-100/80 hover:text-white transition-colors">Ressources</a>
          <a href="#contact" className="text-sm text-blue-100/80 hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#demo" className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-white text-slate-900 text-sm font-medium hover:bg-blue-50 transition-colors">Demander une démo</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

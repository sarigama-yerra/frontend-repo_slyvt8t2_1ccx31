import React from "react";

function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400" />
              <span className="text-white font-semibold tracking-tight">CoachAI</span>
            </div>
            <p className="text-blue-200/80 text-sm max-w-md">
              Plateforme premium d’analyse et de coaching pour commerciaux terrain. Axé résultats.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Produit</h4>
            <ul className="space-y-2 text-blue-200/80 text-sm">
              <li>Analyse</li>
              <li>Scoring</li>
              <li>Dashboard</li>
              <li>Intégrations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-blue-200/80 text-sm">
              <li>contact@ai-coach.fr</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-blue-300/60 text-xs">© {new Date().getFullYear()} CoachAI — Tous droits réservés.</div>
      </div>
    </footer>
  );
}

export default Footer;

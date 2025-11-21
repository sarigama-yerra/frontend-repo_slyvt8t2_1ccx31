import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Tarifs simples et transparents</h2>
          <p className="mt-3 text-blue-200/80">Démarrez sur un périmètre, étendez à toute l'équipe quand vous êtes prêts.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-8">
            <h3 className="text-white font-semibold text-lg">Team</h3>
            <p className="mt-2 text-blue-200/80">Pour 5 à 25 commerciaux</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-white">49€</span>
              <span className="text-blue-200/60"> / rep / mois</span>
            </div>
            <ul className="mt-6 space-y-3 text-blue-200/80 text-sm">
              <li>Analyse automatique des transcriptions</li>
              <li>Scoring par étape du plan de vente</li>
              <li>Dashboard manager</li>
              <li>RGPD UE, chiffrement au repos</li>
            </ul>
            <a href="#demo" className="mt-8 inline-flex px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-blue-50">Essayer</a>
          </div>

          <div className="rounded-2xl border border-blue-400/30 bg-slate-800/70 p-8 relative ring-1 ring-blue-400/20">
            <div className="absolute -top-3 right-6 text-xs px-2 py-0.5 rounded-full bg-blue-500 text-white">Populaire</div>
            <h3 className="text-white font-semibold text-lg">Enterprise</h3>
            <p className="mt-2 text-blue-200/80">Pour 25+ commerciaux</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-white">Sur devis</span>
            </div>
            <ul className="mt-6 space-y-3 text-blue-200/80 text-sm">
              <li>Intégrations SSO, CRM</li>
              <li>Politiques de rétention personnalisées</li>
              <li>Environnements UE dédiés</li>
              <li>SLAs et support prioritaire</li>
            </ul>
            <a href="#demo" className="mt-8 inline-flex px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-blue-50">Parler à un expert</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

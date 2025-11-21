import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-xs mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Nouveau: analyse automatique des rendez-vous commerciaux
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Le coach d'élite pour vos équipes commerciales
          </h1>
          <p className="mt-5 text-lg text-blue-100/90">
            CoachAI analyse vos rendez-vous, extrait les moments clés et score chaque rep selon votre plan de vente. Des insights clairs. Des actions immédiates. Des résultats mesurables.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-blue-50 transition-colors">
              Demander une démo
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white font-medium hover:bg-slate-800/80 transition-colors">
              Voir le produit
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-blue-200/80 text-sm">
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"/> RGPD UE</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"/> Déploiement en 2 semaines</div>
            <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"/> Score personnalisé</div>
          </div>
        </div>
        <div className="relative">
          <div className="relative bg-slate-900/60 border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-800">
              <img src="/dashboard-mock.png" alt="CoachAI Dashboard" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-gradient-to-tr from-emerald-400 to-cyan-400 blur-2xl opacity-20"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";

const features = [
  {
    title: "Analyse automatique",
    desc: "Extraction des moments clés, détection d'objections, prochaines étapes et score par étape du plan de vente.",
  },
  {
    title: "Score par rep et par étape",
    desc: "Mesurez la performance sur cadrage, découverte, valeur, closing. Identifiez les axes de progrès.",
  },
  {
    title: "Dashboard manager",
    desc: "Vue équipe claire: tendances, top opportunités de coaching, suivi des actions.",
  },
  {
    title: "Sécurité & RGPD UE",
    desc: "Chiffrement au repos, rétention configurable, hébergement UE.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 border-t border-white/5 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Pensé pour la performance commerciale
          </h2>
          <p className="mt-4 text-blue-200/80">
            Un coach virtuel qui écoute, évalue et transforme chaque rendez-vous en progrès concret.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 hover:border-blue-400/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-blue-200/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

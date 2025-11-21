import React from "react";

const faqs = [
  {
    q: "Comment récupérez-vous les transcriptions ?",
    a: "V1: vous collez la transcription ou chargez un .txt. V2: connexion à votre outil d'enregistrement ou ASR (Whisper, AssemblyAI).",
  },
  {
    q: "Où sont hébergées les données ?",
    a: "En Europe, avec chiffrement au repos et contrôle de rétention configurable.",
  },
  {
    q: "Peut-on personnaliser la grille de scoring ?",
    a: "Oui. Nous supportons MEDDIC, BANT, NEAT, Challenger ou votre propre grille pondérée.",
  },
  {
    q: "Combien de temps pour déployer ?",
    a: "Un périmètre pilote peut être opérationnel en 2 semaines.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-20 border-t border-white/5 bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Questions fréquentes</h2>
          <p className="mt-3 text-blue-200/80">Tout ce qu'il faut savoir pour démarrer sereinement.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl p-6 bg-slate-800/50 border border-white/10">
              <h3 className="text-white font-semibold mb-2">{f.q}</h3>
              <p className="text-blue-200/80 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

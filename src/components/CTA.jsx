import React from "react";

function CTA() {
  return (
    <section id="demo" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl p-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Prêt à coacher vos rendez-vous comme un pro ?
          </h3>
          <p className="mt-3 text-blue-50/90">
            Réservez une démo de 30 minutes. Nous analysons un de vos rendez-vous en direct et vous repartez avec un plan d'action.
          </p>
          <a href="#contact" className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-blue-50">
            Réserver une démo
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;

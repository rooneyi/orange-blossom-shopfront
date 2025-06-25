
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Découvrez notre
            <span className="block text-orange-100">Collection Exclusive</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Des produits uniques, soigneusement sélectionnés pour vous offrir le meilleur de la mode et du lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2">
              Découvrir les produits
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Voir les offres
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

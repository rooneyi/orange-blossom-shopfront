
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Découvrez notre 
              <span className="text-orange-600"> Collection</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Des produits de qualité exceptionnelle sélectionnés avec soin pour vous offrir le meilleur de la mode et du lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/products">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag size={20} />
                  Découvrir la boutique
                </button>
              </Link>
              <Link to="/categories">
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                  Voir les collections
                </button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=200&fit=crop"
                  alt="Sac élégant"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                />
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
                  alt="Montre connectée"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop"
                  alt="Chaussures premium"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                />
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
                  alt="Casque audio"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
              <Star className="h-6 w-6 fill-current" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.8/5</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">+2000 avis clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

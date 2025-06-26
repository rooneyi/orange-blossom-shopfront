
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos d'<span className="text-orange-600">OrangeShop</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous sommes une boutique en ligne passionnée par la qualité et l'excellence, 
            dédiée à vous offrir les meilleurs produits avec un service client exceptionnel.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
            <p className="text-gray-600 mb-4">
              Fondée en 2020, OrangeShop est née d'une vision simple : rendre accessible 
              à tous des produits de qualité exceptionnelle à des prix justes.
            </p>
            <p className="text-gray-600 mb-4">
              Nous croyons que chaque client mérite le meilleur, c'est pourquoi nous 
              sélectionnons soigneusement chaque produit de notre catalogue.
            </p>
            <p className="text-gray-600">
              Aujourd'hui, nous sommes fiers de servir des milliers de clients satisfaits 
              à travers le monde et de continuer à grandir grâce à leur confiance.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="Notre équipe"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualité</h3>
              <p className="text-gray-600">
                Nous sélectionnons uniquement les meilleurs produits pour garantir votre satisfaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Client</h3>
              <p className="text-gray-600">
                Notre équipe est là pour vous accompagner à chaque étape de votre expérience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">
                Expédition rapide et sécurisée pour que vous receviez vos commandes au plus vite.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">
                Nous mettons tout notre cœur dans ce que nous faisons pour vous satisfaire.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-orange-50 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-600">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Produits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Pays Livrés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Note Moyenne</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;


import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-orange-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page non trouvée</h2>
            <p className="text-lg text-gray-600 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Home className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Page précédente
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-orange-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Que faire maintenant ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <Link to="/products" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="font-semibold text-orange-600 mb-2">Découvrir nos produits</div>
                <div className="text-gray-600">Parcourez notre catalogue complet</div>
              </Link>
              <Link to="/categories" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="font-semibold text-orange-600 mb-2">Voir nos collections</div>
                <div className="text-gray-600">Explorez nos différentes catégories</div>
              </Link>
              <Link to="/contact" className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="font-semibold text-orange-600 mb-2">Nous contacter</div>
                <div className="text-gray-600">Besoin d'aide ? Contactez-nous</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

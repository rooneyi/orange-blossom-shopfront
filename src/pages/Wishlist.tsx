
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

const Wishlist = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Données de démonstration - à remplacer par de vraies données
  const wishlistItems = [
    {
      id: '1',
      name: 'Montre Connectée Orange',
      price: 299.00,
      originalPrice: 399.00,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      isOnSale: true
    },
    {
      id: '2',
      name: 'Casque Audio Premium',
      price: 199.00,
      originalPrice: 249.00,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      isOnSale: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Ma Liste de Souhaits</h1>
        
        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre liste de souhaits est vide</h2>
            <p className="text-gray-600 mb-8">Ajoutez des produits à votre liste de souhaits pour les retrouver facilement.</p>
            <Link to="/products">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Découvrir nos produits
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                  </button>
                  {item.isOnSale && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                      Promo !
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-orange-600">
                      {item.price.toFixed(2)} €
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {item.originalPrice.toFixed(2)} €
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link to={`/product/${item.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        Voir le produit
                      </Button>
                    </Link>
                    <Button size="icon" className="bg-orange-600 hover:bg-orange-700">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Wishlist;

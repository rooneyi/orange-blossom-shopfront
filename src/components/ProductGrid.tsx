
import React from 'react';
import { useFeaturedProducts } from '@/hooks/useProducts';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const { data: products = [], isLoading, error } = useFeaturedProducts();

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Produits Phares
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de produits tendance, soigneusement choisis pour leur qualité et leur style unique.
            </p>
          </div>
          <div className="text-center">Chargement des produits...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Erreur de chargement</h2>
            <p className="text-gray-600">Impossible de charger les produits.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos Produits Phares
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits tendance, soigneusement choisis pour leur qualité et leur style unique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={Number(product.price)}
                originalPrice={product.original_price ? Number(product.original_price) : undefined}
                image={product.image_url}
                rating={Number(product.rating) || 0}
                reviews={product.review_count || 0}
                isNew={product.is_new || false}
                isSale={product.is_on_sale || false}
              />
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
              Voir tous les produits
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;


import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Sac à Main Élégant Orange",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 127,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Chaussures Sport Premium",
      price: 159,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      isNew: true
    },
    {
      id: 3,
      name: "Montre Connectée Orange",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 203,
      isSale: true
    },
    {
      id: 4,
      name: "Veste Décontractée",
      price: 129,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
      rating: 4.3,
      reviews: 56
    },
    {
      id: 5,
      name: "Casque Audio Premium",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 145,
      isSale: true
    },
    {
      id: 6,
      name: "Lunettes de Soleil Tendance",
      price: 79,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 78,
      isNew: true
    }
  ];

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
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
            Voir tous les produits
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

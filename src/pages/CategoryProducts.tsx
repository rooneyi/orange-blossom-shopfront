
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const CategoryProducts = () => {
  const { id } = useParams<{ id: string }>();

  const { data: category, isLoading: categoryLoading } = useQuery({
    queryKey: ['category', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ['category-products', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const isLoading = categoryLoading || productsLoading;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {category && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
            <p className="text-lg text-gray-600">{category.description}</p>
          </div>
        )}
        
        {isLoading && (
          <div className="text-center py-16">
            <div className="text-xl">Chargement des produits...</div>
          </div>
        )}
        
        {!isLoading && products.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aucun produit trouvé</h2>
            <p className="text-gray-600">Cette catégorie ne contient pas encore de produits.</p>
          </div>
        )}
        
        {!isLoading && products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryProducts;

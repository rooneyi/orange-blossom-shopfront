
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['search-products', searchQuery],
    queryFn: async () => {
      if (!searchQuery) return [];
      
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!searchQuery,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchTerm);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Rechercher des produits</h1>
        
        <form onSubmit={handleSearch} className="flex gap-4 mb-8">
          <Input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
            <SearchIcon className="h-4 w-4 mr-2" />
            Rechercher
          </Button>
        </form>
        
        {isLoading && searchQuery && (
          <div className="text-center py-16">
            <div className="text-xl">Recherche en cours...</div>
          </div>
        )}
        
        {!isLoading && searchQuery && products.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aucun résultat trouvé</h2>
            <p className="text-gray-600">Essayez avec d'autres mots-clés.</p>
          </div>
        )}
        
        {!isLoading && products.length > 0 && (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {products.length} résultat(s) pour "{searchQuery}"
              </h2>
            </div>
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
          </>
        )}
        
        {!searchQuery && (
          <div className="text-center py-16">
            <SearchIcon className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recherchez vos produits</h2>
            <p className="text-gray-600">Utilisez la barre de recherche ci-dessus pour trouver des produits.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;

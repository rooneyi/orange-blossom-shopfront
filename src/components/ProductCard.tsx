
import React from 'react';
import { Heart, Star } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isNew,
  isSale
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Nouveau
            </span>
          )}
          {isSale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Promo
            </span>
          )}
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-50">
          <Heart size={16} className="text-gray-600 hover:text-orange-600" />
        </button>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-700">
            Ajouter au panier
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviews})</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-orange-600">{price}€</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">{originalPrice}€</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

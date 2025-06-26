
import React from 'react';
import { ShoppingCart, Search, Menu, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-orange-600">OrangeShop</h1>
            </Link>
          </div>

          {/* Navigation principale */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Accueil
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Produits
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Collections
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              À propos
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-4">
            <Link to="/search">
              <button className="p-2 text-gray-700 hover:text-orange-600 transition-colors">
                <Search size={20} />
              </button>
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Mon profil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders">Mes commandes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/wishlist">Ma liste de souhaits</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Déconnexion
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <button className="p-2 text-gray-700 hover:text-orange-600 transition-colors">
                  <User size={20} />
                </button>
              </Link>
            )}
            
            <Link to="/cart">
              <button className="p-2 text-gray-700 hover:text-orange-600 transition-colors relative">
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
            
            <button className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

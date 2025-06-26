
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Users, Award, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos d'OrangeShop</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Votre destination privilégiée pour des produits de qualité, avec un service client exceptionnel et des prix compétitifs.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondé en 2020, OrangeShop est né de la passion de proposer des produits de qualité 
                à des prix accessibles. Notre équipe travaille sans relâche pour dénicher les meilleures 
                tendances et vous offrir une expérience d'achat exceptionnelle.
              </p>
              <p className="text-lg text-gray-600">
                Aujourd'hui, nous sommes fiers de servir des milliers de clients satisfaits à travers 
                la France et de continuer à grandir grâce à votre confiance.
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
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <ShoppingBag className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Qualité</h3>
                <p className="text-gray-600">
                  Nous sélectionnons rigoureusement chaque produit pour garantir la meilleure qualité.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Service Client</h3>
                <p className="text-gray-600">
                  Notre équipe dédiée est là pour vous accompagner à chaque étape de votre achat.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Nous restons à l'affût des dernières tendances pour vous proposer le meilleur.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Livraison</h3>
                <p className="text-gray-600">
                  Livraison rapide et sécurisée pour que vous receviez vos commandes en parfait état.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">OrangeShop en chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">10,000+</div>
              <div className="text-xl text-gray-600">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-xl text-gray-600">Produits disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-xl text-gray-600">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;


import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question ? Un problème ? Notre équipe est là pour vous aider. 
            N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  123 Rue de la Mode<br />
                  75001 Paris<br />
                  France
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-orange-600" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
                <p className="text-sm text-gray-500 mt-1">Lun - Ven: 9h - 18h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-orange-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">contact@orangeshop.fr</p>
                <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  Horaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-gray-600">
                  <p>Lundi - Vendredi: 9h - 18h</p>
                  <p>Samedi: 10h - 16h</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Questions Fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quels sont vos délais de livraison ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nous livrons généralement sous 2-3 jours ouvrés en France métropolitaine. 
                  La livraison est gratuite pour toute commande supérieure à 50€.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comment puis-je retourner un produit ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Vous avez 30 jours pour retourner un produit. Contactez-nous pour obtenir 
                  une étiquette de retour gratuite et les instructions détaillées.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Proposez-vous une garantie ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tous nos produits sont couverts par la garantie constructeur. 
                  En cas de défaut, nous nous occupons de tout pour vous.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comment suivre ma commande ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Vous recevrez un email avec le numéro de suivi dès l'expédition. 
                  Vous pouvez aussi consulter vos commandes dans votre espace client.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;

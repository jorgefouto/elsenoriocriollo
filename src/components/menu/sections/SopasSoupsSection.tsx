
import React from "react";

const SopasSoupsSection = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Sopas/Soups</h2>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Caldo de Gallina */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/15324a5c-6544-4e64-aaad-fe1fd06e1f38.png"
                alt="Caldo de Gallina"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Caldo de Gallina
                </h3>
                <span className="text-restaurant-gold">£10.00</span>
              </div>
              <p className="text-gray-400">
                Hen broth with chicken leg, carrot, yellow potato, celery, white onion, and egg.
              </p>
            </div>
          </div>
          {/* Chupe de Camarones */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/e98db893-53a2-4c4a-8d2b-d4491443b0de.png"
                alt="Chupe de Camarones"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Chupe de Camarones
                </h3>
                <span className="text-restaurant-gold">£20.00</span>
              </div>
              <p className="text-gray-400">
                Creamy shrimp soup with river prawns, yellow potatoes, fresh cheese, milk, broad beans, peas, corn, rice, and egg. Finished with a red pepper and huacatay (Peruvian herb) dressing.
              </p>
            </div>
          </div>
          {/* Parihuela */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/48d199ba-7eda-486e-bd11-baf4c6e9b888.png"
                alt="Parihuela"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Parihuela
                </h3>
                <span className="text-restaurant-gold">£22.00</span>
              </div>
              <p className="text-gray-400">
                Spicy seafood soup with scallops, crab, mussels, and octopus. Seasoned with Peruvian spices, yellow and panca peppers, and an acidic touch of lemon, beer, chicha de jora, or wine.
              </p>
            </div>
          </div>
          {/* Sustancia de Carne */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/884bb7a5-79d8-44a8-925e-a2ab40a384d5.png"
                alt="Sustancia de Carne"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Sustancia de Carne
                </h3>
                <span className="text-restaurant-gold">£10.00</span>
              </div>
              <p className="text-gray-400">
                Hearty beef soup made with minced beef, fresh oregano, soy sauce, potatoes, angel hair noodles, egg, and Chinese onion.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 mt-8">Coming soon - Check back for our homemade Peruvian soups.</p>
    </div>
  </div>
);

export default SopasSoupsSection;

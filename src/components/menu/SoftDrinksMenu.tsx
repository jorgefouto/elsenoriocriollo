
import React from "react";

const SoftDrinksMenu = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Gaseosas/Soft Drinks</h2>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coca Cola (Can) */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/edc0550b-63e7-40c3-a211-86e55e86d92e.png"
                alt="Coca Cola (Can)"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Coca Cola (Can)
                </h3>
                <span className="text-restaurant-gold">£2.50</span>
              </div>
              <p className="text-gray-400">
                Classic Coca-Cola soft drink in a 330ml can.
              </p>
            </div>
          </div>
          {/* Fanta (Can) */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/92a816be-eedd-4ee4-935e-add53946e579.png"
                alt="Fanta (Can)"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Fanta (Can)
                </h3>
                <span className="text-restaurant-gold">£2.50</span>
              </div>
              <p className="text-gray-400">
                Orange-flavoured Fanta soft drink in a 330ml can.
              </p>
            </div>
          </div>
          {/* Inka Kola */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/0377053b-8dde-471f-9bdc-142f4a31f2d9.png"
                alt="Inka Kola"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Inka Kola
                </h3>
                <span className="text-restaurant-gold">£4.00</span>
              </div>
              <p className="text-gray-400">
                Traditional Peruvian yellow soda with a sweet, fruity flavour (glass bottle).
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 mb-8">Coming soon - Check back for our soft drink options.</p>
    </div>
  </div>
);

export default SoftDrinksMenu;

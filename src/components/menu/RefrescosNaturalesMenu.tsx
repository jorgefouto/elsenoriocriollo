
import React from "react";

const RefrescosNaturalesMenu = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Refrescos Naturales</h2>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Jarra de Chicha Morada 1 Litro - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/f5cc946c-b9d3-4b80-9b97-91f348a08db9.png"
                alt="Jarra de Chicha Morada 1 Litro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Jarra de Chicha Morada 1 Litro
                </h3>
                <span className="text-restaurant-gold">£10.00</span>
              </div>
              <p className="text-gray-400">
                Purple corn juice made from a traditional Peruvian recipe, infused with fruits such as pineapple, quince, or apple. 
                A naturally sweet and antioxidant-rich drink native to the Andes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RefrescosNaturalesMenu;


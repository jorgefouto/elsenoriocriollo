import React from "react";

const DulcesDessertMenu = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Dulces/Dessert</h2>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Crema Volteada - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/c2396b1d-a28e-4fdc-83ae-f5f73846aa3d.png"
                alt="Crema Volteada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Crema Volteada
                </h3>
                <span className="text-restaurant-gold">£4.00</span>
              </div>
              <p className="text-gray-400">
                Traditional Peruvian-style flan made with eggs, milk, and caramel, baked to a smooth and silky texture.
              </p>
            </div>
          </div>
          {/* Gelatina - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/0f46426c-6213-499a-acbd-327e9af71574.png"
                alt="Gelatina"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Gelatina
                </h3>
                <span className="text-restaurant-gold">£3.00</span>
              </div>
              <p className="text-gray-400">
                Classic fruit-flavored jelly served chilled.
              </p>
            </div>
          </div>
          {/* Gelatina con Flan - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/330ee99f-66eb-4954-bfd1-1317e2fe68fd.png"
                alt="Gelatina con Flan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Gelatina con Flan
                </h3>
                <span className="text-restaurant-gold">£4.00</span>
              </div>
              <p className="text-gray-400">
                Layered dessert combining creamy vanilla flan with fruit-flavored jelly.
              </p>
            </div>
          </div>
          {/* Torta de 3 Leches - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/908d4478-9df1-4876-8b2d-4729464848a8.png"
                alt="Torta de 3 Leches"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Torta de 3 Leches
                </h3>
                <span className="text-restaurant-gold">£5.00</span>
              </div>
              <p className="text-gray-400">
                Moist sponge cake soaked in three kinds of milk: evaporated, condensed, and cream, topped with whipped cream.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 mb-8">Coming soon - Check back for our traditional Peruvian desserts.</p>
    </div>
  </div>
);

export default DulcesDessertMenu;

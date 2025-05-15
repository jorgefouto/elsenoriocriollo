import React from "react";

const GrilledChickenMenu = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">
        Grilled Chicken
      </h2>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1/4 de Pollo a la Brasa */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/ad6ef7b7-d41e-43bc-ae76-5b5e4ff67f04.png"
                alt="1/4 de Pollo a la Brasa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  1/4 de Pollo a la Brasa
                </h3>
                <span className="text-restaurant-gold">£9.00</span>
              </div>
              <p className="text-gray-400">
                Quarter grilled chicken served with French fries, marinated salad with vinaigrette, and Peruvian sauces.
                <span className="block mt-2 italic">
                  Our signature charcoal-grilled chicken.
                </span>
              </p>
            </div>
          </div>

          {/* 1/2 Pollo a la Brasa + Patatas + Ensaladas y Cremas */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/15979d72-7ac1-4284-b900-db1f753ea22e.png"
                alt="1/2 Pollo a la Brasa + Patatas + Ensaladas y Cremas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  1/2 Pollo a la Brasa + Patatas + Ensaladas y Cremas
                </h3>
                <span className="text-restaurant-gold">£16.00</span>
              </div>
              <p className="text-gray-400">
                Half a grilled chicken served with fried potatoes, salad, and Peruvian sauces.
              </p>
            </div>
          </div>

          {/* 1 Pollo a la Brasa + Patatas + Ensalada y Cremas - NEW */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/b0604325-d059-4202-8592-c89cb6df87b1.png"
                alt="1 Pollo a la Brasa + Patatas + Ensalada y Cremas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  1 Pollo a la Brasa + Patatas + Ensalada y Cremas
                </h3>
                <span className="text-restaurant-gold">£30.00</span>
              </div>
              <p className="text-gray-400">
                Whole grilled chicken served with fried potatoes, salad, and Peruvian sauces.
              </p>
            </div>
          </div>

          {/* Mostrito - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/28bcb3ea-1c69-4ffb-82ee-fe17a107d9dc.png"
                alt="Mostrito"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Mostrito
                </h3>
                <span className="text-restaurant-gold">£16.00</span>
              </div>
              <p className="text-gray-400">
                A combo plate with 1/4 grilled chicken, fried potatoes, salad, Peruvian fried rice (chaufa), and sauces.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default GrilledChickenMenu;

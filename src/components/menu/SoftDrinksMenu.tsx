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
                src="/lovable-uploads/32836caa-7ed8-4459-a9e1-a4681e4e01db.png"
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
          {/* Manzana 2 Litros */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/a3327e3c-537d-499b-9b96-8e27f39ce24d.png"
                alt="Manzana 2 Litros"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Manzana 2 Litros
                </h3>
                <span className="text-restaurant-gold">£7.00</span>
              </div>
              <p className="text-gray-400">
                2-litre bottle of apple-flavoured Peruvian soda.
              </p>
            </div>
          </div>
          {/* America / Andin’s Cristal 2 Litros */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/34d5ad27-6485-42d9-adce-25965a83786c.png"
                alt="America / Andin’s Cristal 2 Litros"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  America / Andin’s Cristal 2 Litros
                </h3>
                <span className="text-restaurant-gold">£7.00</span>
              </div>
              <p className="text-gray-400">
                2-litre bottle of America Kola, a yellow Peruvian soda with a sweet herbal flavour.
              </p>
            </div>
          </div>
          {/* America / Andin’s Cristal 500ml */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/517cecbb-dab3-442f-bf3d-cc25ad77463e.png"
                alt="America / Andin’s Cristal 500ml"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  America / Andin’s Cristal 500ml
                </h3>
                <span className="text-restaurant-gold">£3.50</span>
              </div>
              <p className="text-gray-400">
                500ml bottle of America Kola, a yellow Peruvian soda with a sweet herbal flavour.
              </p>
            </div>
          </div>
          {/* Manzana 500ml */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/7a9b0f80-5549-4c97-8d20-3d3a0f208039.png"
                alt="Manzana 500ml"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Manzana 500ml
                </h3>
                <span className="text-restaurant-gold">£3.50</span>
              </div>
              <p className="text-gray-400">
                500ml bottle of apple-flavoured Peruvian soda.
              </p>
            </div>
          </div>
          {/* Tropical 2 Litros */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/f18608f4-5971-4b72-a388-928f6103dd89.png"
                alt="Tropical 2 Litros"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Tropical 2 Litros
                </h3>
                <span className="text-restaurant-gold">£7.00</span>
              </div>
              <p className="text-gray-400">
                2-litre bottle of tropical fruit-flavoured Peruvian soda.
              </p>
            </div>
          </div>
          {/* Tropical 500ml */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/165e1f95-38bd-4a8b-9a64-d6320e9bce00.png"
                alt="Tropical 500ml"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Tropical 500ml
                </h3>
                <span className="text-restaurant-gold">£3.50</span>
              </div>
              <p className="text-gray-400">
                500ml bottle of tropical fruit-flavoured Peruvian soda.
              </p>
            </div>
          </div>
          {/* Coca Cola 1.75 Litros */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/cadd023e-2fe8-4c53-b27e-fea3cafd9bc3.png"
                alt="Coca Cola 1.75 Litros"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Coca Cola 1.75 Litros
                </h3>
                <span className="text-restaurant-gold">£7.00</span>
              </div>
              <p className="text-gray-400">
                1.75-litre bottle of classic Coca-Cola.
              </p>
            </div>
          </div>
          {/* 7UP (Can) */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/ef0befe0-486f-4925-92bd-8cec82319d7f.png"
                alt="7UP (Can)"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  7UP (Can)
                </h3>
                <span className="text-restaurant-gold">£2.50</span>
              </div>
              <p className="text-gray-400">
                Lemon-lime flavoured 7UP in a 330ml can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SoftDrinksMenu;

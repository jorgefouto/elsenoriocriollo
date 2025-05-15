import React from "react";

const GuarnicionesExtrasMenu = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Guarniciones/Extras</h2>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Arroz - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/8c389840-5946-471f-9af0-f5eb0832f484.png"
                alt="Arroz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Arroz
                </h3>
                <span className="text-restaurant-gold">£4.00</span>
              </div>
              <p className="text-gray-400">
                Steamed white rice.
              </p>
            </div>
          </div>
          {/* Cancha - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/479d3b04-87bc-4143-986e-fa555e369e50.png"
                alt="Cancha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Cancha
                </h3>
                <span className="text-restaurant-gold">£5.00</span>
              </div>
              <p className="text-gray-400">
                Toasted Peruvian corn.
              </p>
            </div>
          </div>
          {/* Ensalada - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/46001063-61a3-4f42-bd46-c31797cb3b59.png"
                alt="Ensalada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Ensalada
                </h3>
                <span className="text-restaurant-gold">£5.00</span>
              </div>
              <p className="text-gray-400">
                Fresh salad with lettuce and tomatoes.
              </p>
            </div>
          </div>
          {/* Patatas / Papas Fritas - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/086e1caf-8995-45ac-ac39-7efd31765b6e.png"
                alt="Patatas / Papas Fritas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Patatas / Papas Fritas
                </h3>
                <span className="text-restaurant-gold">£5.00</span>
              </div>
              <p className="text-gray-400">
                Golden French fries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GuarnicionesExtrasMenu;

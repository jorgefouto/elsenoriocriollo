import React from "react";

const PescadosMariscosMenu = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Pescados y Mariscos</h2>
      
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ceviche Mixto */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/99fe47c0-eb19-4c23-abf6-70ee505d7112.png" 
                alt="Ceviche Mixto" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Ceviche Mixto</h3>
                <span className="text-restaurant-gold">£20.00</span>
              </div>
              <p className="text-gray-400">
                Fresh raw fish, baby prawns, mussels, and squid cured in citrus juice (lime), spiced with ají, and mixed with chopped onions, salt, and coriander. Served with sweet potato and Peruvian corn.
                <span className="block mt-2 italic">🔸 Spicy | 🐟 Contains fish</span>
              </p>
            </div>
          </div>

          {/* Chaufa de Mariscos - Updated with image from Duo Marino */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/169bde92-b26b-45d6-9acb-c12699d7ca43.png" 
                alt="Chaufa de Mariscos" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Chaufa de Mariscos</h3>
                <span className="text-restaurant-gold">£20.00</span>
              </div>
              <p className="text-gray-400">
                Stir-fried rice with seafood including prawns, mussels, and squid. Served with fried cassava, tartar sauce, and onion salad.
              </p>
            </div>
          </div>

          {/* Chicharrón de Pescado - Updated with image from Jalea */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/a8ba1d1c-1bdc-4e23-88ca-1e2781574152.png" 
                alt="Chicharrón de Pescado" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Chicharrón de Pescado</h3>
                <span className="text-restaurant-gold">£17.00</span>
              </div>
              <p className="text-gray-400">
                Battered and fried fish fillets served with fried cassava, tartar sauce, and onion salad.
              </p>
            </div>
          </div>

          {/* Choritos a la Chalaca - Updated with image from Ronda Marina */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/97d0f5a9-8f88-44ba-91c2-529bfd695fa8.png" 
                alt="Choritos a la Chalaca" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Choritos a la Chalaca</h3>
                <span className="text-restaurant-gold">£16.00</span>
              </div>
              <p className="text-gray-400">
                Cooked mussels topped with chopped onion, tomato, corn, coriander, and lemon juice.
              </p>
            </div>
          </div>

          {/* Duo Marino - Updated with image from Trio Marino */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/a0a7cc6a-129d-48af-bc2f-9313705abe65.png" 
                alt="Duo Marino" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Duo Marino</h3>
                <span className="text-restaurant-gold">£19.00</span>
              </div>
              <p className="text-gray-400">
                A combination of fish ceviche and crispy fried fish.
                <span className="block mt-2 italic">🔸 Spicy</span>
              </p>
            </div>
          </div>

          {/* Jalea - Updated with image from Arroz con Mariscos */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/5177fa17-3770-43bf-b443-afda3ebcef40.png" 
                alt="Jalea" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Jalea</h3>
                <span className="text-restaurant-gold">£20.00</span>
              </div>
              <p className="text-gray-400">
                Battered and fried fish, prawns, mussels, and squid. Served with fried cassava, tartar sauce, and onion salad.
              </p>
            </div>
          </div>

          {/* Ronda Marina - Updated with image from Ceviche de Pescado */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/2f1d71cc-01d8-4aeb-954d-921ba1b8d15c.png" 
                alt="Ronda Marina" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Ronda Marina</h3>
                <span className="text-restaurant-gold">£35.00</span>
              </div>
              <p className="text-gray-400">
                A seafood sampler plate including fish ceviche, fried fish, leche de tigre, tuna causa, and seafood rice.
              </p>
            </div>
          </div>

          {/* Trio Marino - Fixed incomplete string */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/fa8eaef3-9f09-4ee0-a65b-cf5d8fdf6641.png" 
                alt="Trio Marino" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Trio Marino</h3>
                <span className="text-restaurant-gold">£25.00</span>
              </div>
              <p className="text-gray-400">
                A seafood sampler with three Peruvian specialties: ceviche, chicharrón de pescado, and rice with seafood.
                <span className="block mt-2 italic">🔸 Spicy | 🐟 Contains fish</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PescadosMariscosMenu;

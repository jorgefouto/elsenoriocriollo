
import React from "react";

const StartersMenu = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Starters</h2>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Anticuchos */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/1f52ff1a-6c1a-484a-bbbd-7a0d1ab49fdc.png"
                alt="Anticuchos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Anticuchos
                </h3>
                <span className="text-restaurant-gold">£12.00</span>
              </div>
              <p className="text-gray-400">
                Grilled marinated beef heart skewers, served with Peruvian white corn and sliced potato covered in a yellow sauce.
                <span className="block mt-2 italic">Traditional Peruvian street food with bold flavor.</span>
              </p>
            </div>
          </div>
          {/* Causa Acevichada */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/5d7e9be6-c128-48c7-9516-2efdd4d9b0fc.png"
                alt="Causa Acevichada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Causa Acevichada
                </h3>
                <span className="text-restaurant-gold">£15.00</span>
              </div>
              <p className="text-gray-400">
                Layers of mashed potato, ceviche-style raw fish marinated in lime juice, seasoned with chili, onion, salt, and cilantro. Served with sweet mashed potato, fried plantain, and corn.
                <span className="block mt-2 italic">A fresh, citrusy seafood starter with vibrant textures.</span>
              </p>
            </div>
          </div>
          {/* Causa de Atún */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/505b76ab-f758-4669-bf3a-c75945b453c4.png"
                alt="Causa de Atún"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Causa de Atún
                </h3>
                <span className="text-restaurant-gold">£9.00</span>
              </div>
              <p className="text-gray-400">
                Mashed potato layered with ají amarillo chili pepper and a tuna fillet filling.
                <span className="block mt-2 italic">Cold appetizer, rich and creamy with a spicy edge.</span>
              </p>
            </div>
          </div>
          {/* Papa a la Huancaína */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/53369597-fd45-444a-a83b-403f7fce5d4d.png"
                alt="Papa a la Huancaína"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Papa a la Huancaína
                </h3>
                <span className="text-restaurant-gold">£9.00</span>
              </div>
              <p className="text-gray-400">
                Boiled yellow potatoes in a creamy spicy Huancaína sauce, topped with sliced boiled egg and black olives.
                <span className="block mt-2 italic">Classic Peruvian starter with a savory chili-cheese sauce.</span>
              </p>
            </div>
          </div>
          {/* Salchipapa */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/424595e4-fbfb-445c-9588-08ddd3eaf64e.png"
                alt="Salchipapa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Salchipapa
                </h3>
                <span className="text-restaurant-gold">£9.00</span>
              </div>
              <p className="text-gray-400">
                Fried slices of sausage and French fries.
                <span className="block mt-2 italic">Popular Peruvian comfort food, street-style.</span>
              </p>
            </div>
          </div>
          {/* Leche de Tigre */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/d84950c6-d768-4ca2-8062-5908af366c4f.png"
                alt="Leche de Tigre"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Leche de Tigre
                </h3>
                <span className="text-restaurant-gold">£11.00</span>
              </div>
              <p className="text-gray-400">
                A citrus marinade of crushed fish and shrimp, spiced with chili and lemon juice, served with crunchy Peruvian corn and plantain chips.
                <span className="block mt-2 italic">Served in a glass — intense, tangy, and spicy. 🔸 Spicy | 🐟 Contains fish</span>
              </p>
            </div>
          </div>
          {/* Yuca a la Huancaína */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img
                src="/lovable-uploads/d3514fd3-3734-41fe-aabf-0280722f6f31.png"
                alt="Yuca a la Huancaína"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Yuca a la Huancaína
                </h3>
                <span className="text-restaurant-gold">£10.00</span>
              </div>
              <p className="text-gray-400">
                Fried cassava slices, served with the same Huancaína creamy chili sauce.
                <span className="block mt-2 italic">A crunchy twist on the classic potato version.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StartersMenu;

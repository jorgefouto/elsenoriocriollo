import React from "react";

const CervezasCoctelesMenu = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Cervezas y Cocteles</h2>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Corona Extra 330 ml - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/0ebcef14-be96-4b49-8bf0-4208bd9a336b.png"
                alt="Corona Extra 330 ml"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Corona Extra 330 ml
                </h3>
                <span className="text-restaurant-gold">£4.00</span>
              </div>
              <p className="text-gray-400">
                Imported Mexican beer served in a 330ml bottle.
              </p>
            </div>
          </div>
          {/* Pisco Sour - NEW DISH */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52 flex items-center justify-center bg-white">
              <img
                src="/lovable-uploads/d5b91a5e-255c-4136-a1f8-30b97e9c8c59.png"
                alt="Pisco Sour"
                className="h-full object-contain mx-auto"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">
                  Pisco Sour
                </h3>
                <span className="text-restaurant-gold">£10.00</span>
              </div>
              <p className="text-gray-400">
                Traditional Peruvian cocktail made with pisco, syrup, lemon juice, and egg whites.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 mb-8">Coming soon - Check back for our beer and cocktail offerings.</p>
    </div>
  </div>
);

export default CervezasCoctelesMenu;

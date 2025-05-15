
import React from "react";

const GuarnicionesExtrasSection = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Guarniciones/Extras</h2>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Arroz */}
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
        </div>
      </div>
      <p className="text-gray-400 mb-8">Coming soon - Check back for our sides and extras.</p>
    </div>
  </div>
);

export default GuarnicionesExtrasSection;

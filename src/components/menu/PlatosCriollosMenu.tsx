import React from "react";

const PlatosCriollosMenu = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Platos Criollos</h2>
      
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Churrasco con Patatas y Ensalada - UPDATED with image from Seco de Cordero */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/7d9d76fa-bf66-4e2a-8c9c-18191655e4d8.png" 
                alt="Churrasco con Patatas y Ensalada" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Churrasco con Patatas y Ensalada</h3>
                <span className="text-restaurant-gold">£19.00</span>
              </div>
              <p className="text-gray-400">
                Cut of beef, served with French fries and a fresh salad.
              </p>
            </div>
          </div>

          {/* Lomo Saltado - UPDATED with image from Tallarín Saltado de Carne */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/959be316-6746-4a47-8aa1-6d27afa92bf1.png" 
                alt="Lomo Saltado" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Lomo Saltado</h3>
                <span className="text-restaurant-gold">£15.00</span>
              </div>
              <p className="text-gray-400">
                Chunks of beef steak stir-fried with fresh tomato and red onion, served with fries and white rice.
              </p>
            </div>
          </div>

          {/* Lomo Vegetariano - UPDATED with image from Tallarín Saltado de Pollo */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/1a02abe7-3034-4978-b60c-6578fb956971.png" 
                alt="Lomo Vegetariano" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Lomo Vegetariano</h3>
                <span className="text-restaurant-gold">£15.00</span>
              </div>
              <p className="text-gray-400">
                A vegetarian dish with sautéed mushrooms, fresh tomato, red onion, and red pepper, served with French fries and white rice.
              </p>
            </div>
          </div>

          {/* Pollo Saltado - UPDATED with image from Ají de Gallina */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/13f3e298-5e44-4edf-83ed-f90dede9f0fb.png" 
                alt="Pollo Saltado" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Pollo Saltado</h3>
                <span className="text-restaurant-gold">£14.00</span>
              </div>
              <p className="text-gray-400">
                Chicken pieces stir-fried with tomato and red onion, served with fries and rice.
              </p>
            </div>
          </div>

          {/* Seco de Cordero con Frejoles y Yuca - UPDATED with image from Arroz Chaufa de Carne */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/3c14eafd-e45b-45ff-8945-a38f23b4abc2.png" 
                alt="Seco de Cordero con Frejoles y Yuca" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Seco de Cordero con Frejoles y Yuca</h3>
                <span className="text-restaurant-gold">£18.00</span>
              </div>
              <p className="text-gray-400">
                Lamb marinated in chicha de jora (fermented corn drink), stewed with cilantro, yellow chili, and loche squash. Served with cassava, white beans, white rice, and Creole sauce.
              </p>
            </div>
          </div>

          {/* Tallarín Saltado de Carne - UPDATED with image from Arroz Chaufa de Pollo */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/f9b392ef-2407-48e6-bde9-2c11f9d2e5b5.png" 
                alt="Tallarín Saltado de Carne" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Tallarín Saltado de Carne</h3>
                <span className="text-restaurant-gold">£15.00</span>
              </div>
              <p className="text-gray-400">
                Stir-fried noodles with beef, tomato, and red onion in a soy-based sauce.
              </p>
            </div>
          </div>

          {/* Tallarín Saltado de Pollo - UPDATED with image from Arroz con Pollo y Papa a la Huancaína */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/ec3200d1-6826-4636-8307-8e90ba6647a3.png" 
                alt="Tallarín Saltado de Pollo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Tallarín Saltado de Pollo</h3>
                <span className="text-restaurant-gold">£14.00</span>
              </div>
              <p className="text-gray-400">
                Stir-fried noodles with chicken, tomato, and red onion in a soy-based sauce.
              </p>
            </div>
          </div>

          {/* Ají de Gallina - UPDATED with image from Churrasco con Patatas y Ensalada */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/1b80307a-4808-454e-9fc0-3f7862bfa0ea.png" 
                alt="Ají de Gallina" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Ají de Gallina</h3>
                <span className="text-restaurant-gold">£16.00</span>
              </div>
              <p className="text-gray-400">
                Shredded chicken in a creamy yellow chili sauce, served with a boiled egg, olives, and white rice. A traditional Peruvian specialty.
              </p>
            </div>
          </div>

          {/* Arroz Chaufa de Carne - UPDATED with image from Lomo Saltado */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/44f9033a-d8df-4cc1-a548-096732c915c6.png" 
                alt="Arroz Chaufa de Carne" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Arroz Chaufa de Carne</h3>
                <span className="text-restaurant-gold">£15.00</span>
              </div>
              <p className="text-gray-400">
                Peruvian-style Chinese fried rice with beef strips, soy sauce, chives, and scrambled egg.
              </p>
            </div>
          </div>

          {/* Arroz Chaufa de Pollo - UPDATED with image from Lomo Vegetariano */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/cc25074c-02c3-46ea-a442-a6bd70fcb75a.png" 
                alt="Arroz Chaufa de Pollo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Arroz Chaufa de Pollo</h3>
                <span className="text-restaurant-gold">£14.00</span>
              </div>
              <p className="text-gray-400">
                Peruvian-style Chinese fried rice with diced chicken breast, soy sauce, spring onions, and scrambled egg.
              </p>
            </div>
          </div>

          {/* Arroz con Pollo y Papa a la Huancaína - UPDATED with image from Pollo Saltado */}
          <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
            <div className="relative h-52">
              <img 
                src="/lovable-uploads/9896e344-a916-4151-8a23-ab5dffbe51c2.png" 
                alt="Arroz con Pollo y Papa a la Huancaína" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-restaurant-light">Arroz con Pollo y Papa a la Huancaína</h3>
                <span className="text-restaurant-gold">£16.00</span>
              </div>
              <p className="text-gray-400">
                Rice cooked with chicken, carrots, peas, corn, and spices. Served with a potato topped with Huancaína sauce (creamy chili-cheese sauce) and a side salad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PlatosCriollosMenu;

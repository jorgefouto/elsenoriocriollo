import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  return (
    <div className="min-h-screen bg-restaurant-dark text-restaurant-light">
      <Navbar />
      <ScrollArea className="h-screen">
        <div className="pt-24 pb-16 md:py-32 container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-restaurant-light mb-4">El Señorio Criollo</h1>
            <div className="w-16 h-1 bg-restaurant-gold mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Authentic Peruvian cuisine with traditional flavors, crafted with seasonal ingredients and expert technique.
            </p>
          </div>
          
          <Tabs defaultValue="starters" className="w-full max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg p-1 flex flex-wrap justify-center gap-1">
                <TabsTrigger value="starters" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Starters
                </TabsTrigger>
                <TabsTrigger value="platos-criollos" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Platos Criollos
                </TabsTrigger>
                <TabsTrigger value="pescados-mariscos" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Pescados y Mariscos
                </TabsTrigger>
                <TabsTrigger value="grilled-chicken" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Grilled Chicken
                </TabsTrigger>
                <TabsTrigger value="sopas-soups" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Sopas/Soups
                </TabsTrigger>
                <TabsTrigger value="guarniciones-extras" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Guarniciones/Extras
                </TabsTrigger>
                <TabsTrigger value="dulces-dessert" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Dulces/Dessert
                </TabsTrigger>
                <TabsTrigger value="refrescos-naturales" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Refrescos Naturales
                </TabsTrigger>
                <TabsTrigger value="cervezas-cocteles" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Cervezas y Cocteles
                </TabsTrigger>
                <TabsTrigger value="soft-drinks" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark px-4 py-2">
                  Gaseosas/Soft Drinks
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Starters Menu Content */}
            <TabsContent value="starters">
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
                            <h3 className="text-xl font-serif text-restaurant-light">Anticuchos</h3>
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
                            <h3 className="text-xl font-serif text-restaurant-light">Causa Acevichada</h3>
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
                            <h3 className="text-xl font-serif text-restaurant-light">Causa de Atún</h3>
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
                            src="/lovable-uploads/51c2456c-781d-4375-bd3c-94e57c1fa8e6.png" 
                            alt="Papa a la Huancaína" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Papa a la Huancaína</h3>
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
                            src="/lovable-uploads/53369597-fd45-444a-a83b-403f7fce5d4d.png" 
                            alt="Salchipapa" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Salchipapa</h3>
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
                            src="/lovable-uploads/424595e4-fbfb-445c-9588-08ddd3eaf64e.png" 
                            alt="Leche de Tigre" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Leche de Tigre</h3>
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
                            <h3 className="text-xl font-serif text-restaurant-light">Yuca a la Huancaína</h3>
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
            </TabsContent>
            
            {/* Platos Criollos Menu Content */}
            <TabsContent value="platos-criollos">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Platos Criollos</h2>
                  
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Churrasco con Patatas y Ensalada */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/1b80307a-4808-454e-9fc0-3f7862bfa0ea.png" 
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

                      {/* Lomo Saltado */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/44f9033a-d8df-4cc1-a548-096732c915c6.png" 
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

                      {/* Lomo Vegetariano */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/cc25074c-02c3-46ea-a442-a6bd70fcb75a.png" 
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

                      {/* Pollo Saltado */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/9896e344-a916-4151-8a23-ab5dffbe51c2.png" 
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

                      {/* Seco de Cordero con Frejoles y Yuca */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/7d9d76fa-bf66-4e2a-8c9c-18191655e4d8.png" 
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

                      {/* Tallarín Saltado de Carne */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/959be316-6746-4a47-8aa1-6d27afa92bf1.png" 
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

                      {/* Tallarín Saltado de Pollo */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/1a02abe7-3034-4978-b60c-6578fb956971.png" 
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

                      {/* Ají de Gallina */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/13f3e298-5e44-4edf-83ed-f90dede9f0fb.png" 
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

                      {/* Arroz Chaufa de Carne */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/3c14eafd-e45b-45ff-8945-a38f23b4abc2.png" 
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

                      {/* Arroz Chaufa de Pollo */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/f9b392ef-2407-48e6-bde9-2c11f9d2e5b5.png" 
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

                      {/* Arroz con Pollo y Papa a la Huancaína */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/ec3200d1-6826-4636-8307-8e90ba6647a3.png" 
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
            </TabsContent>
            
            {/* Pescados y Mariscos Menu Content */}
            <TabsContent value="pescados-mariscos">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Pescados y Mariscos</h2>
                  
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Chaufa de Mariscos */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/15f2c05c-0c4f-4184-9411-89516faf79dd.png" 
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

                      {/* Chicharrón de Pescado */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/18c9c608-1cfa-4cab-9936-ec8177742604.png" 
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

                      {/* Choritos a la Chalaca */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/fab89f8e-fcb9-426a-8704-6d83f5c2b433.png" 
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

                      {/* Duo Marino */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/169bde92-b26b-45d6-9acb-c12699d7ca43.png" 
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

                      {/* Jalea */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/a8ba1d1c-1bdc-4e23-88ca-1e2781574152.png" 
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

                      {/* Ronda Marina */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/97d0f5a9-8f88-44ba-91c2-529bfd695fa8.png" 
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

                      {/* Trio Marino */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/a0a7cc6a-129d-48af-bc2f-9313705abe65.png" 
                            alt="Trio Marino" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Trio Marino</h3>
                            <span className="text-restaurant-gold">£23.00</span>
                          </div>
                          <p className="text-gray-400">
                            Plate featuring fish ceviche, crispy fried fish, and seafood rice.
                            <span className="block mt-2 italic">🔸 Spicy</span>
                          </p>
                        </div>
                      </div>

                      {/* Arroz con Mariscos */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/5177fa17-3770-43bf-b443-afda3ebcef40.png" 
                            alt="Arroz con Mariscos" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Arroz con Mariscos</h3>
                            <span className="text-restaurant-gold">£20.00</span>
                          </div>
                          <p className="text-gray-400">
                            Portion of rice with prawns, mussels, and squid sautéed with white wine and spices.
                          </p>
                        </div>
                      </div>

                      {/* Ceviche de Pescado */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/2f1d71cc-01d8-4aeb-954d-921ba1b8d15c.png" 
                            alt="Ceviche de Pescado" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Ceviche de Pescado</h3>
                            <span className="text-restaurant-gold">£17.00</span>
                          </div>
                          <p className="text-gray-400">
                            Fresh raw fish cured in citrus juice (lime), spiced with ají, and mixed with chopped onions, salt, and coriander.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Dulces/Dessert Menu Content */}
            <TabsContent value="dulces-dessert">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Dulces / Dessert</h2>
                  
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Crema Volteada */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/483241f2-1d5c-46a3-b643-83f5c1f8a57b.png" 
                            alt="Crema Volteada" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Crema Volteada</h3>
                            <span className="text-restaurant-gold">£4.00</span>
                          </div>
                          <p className="text-gray-400">
                            Traditional Peruvian-style flan made with eggs, milk, and caramel, baked to a smooth and silky texture.
                          </p>
                        </div>
                      </div>

                      {/* Gelatina */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/25abc885-7373-4d7b-b2f5-928f219f3d3c.png" 
                            alt="Gelatina" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Gelatina</h3>
                            <span className="text-restaurant-gold">£3.00</span>
                          </div>
                          <p className="text-gray-400">
                            Classic fruit-flavored jelly served chilled.
                          </p>
                        </div>
                      </div>

                      {/* Gelatina con Flan */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/afd5e0b3-813f-485c-817d-a3a8753615cc.png" 
                            alt="Gelatina con Flan" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Gelatina con Flan</h3>
                            <span className="text-restaurant-gold">£4.00</span>
                          </div>
                          <p className="text-gray-400">
                            Layered dessert combining creamy vanilla flan with fruit-flavored jelly.
                          </p>
                        </div>
                      </div>

                      {/* Torta de 3 Leches */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/45662ba8-8495-4f1d-ba42-0aa50ec5cb61.png" 
                            alt="Torta de 3 Leches" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Torta de 3 Leches</h3>
                            <span className="text-restaurant-gold">£5.00</span>
                          </div>
                          <p className="text-gray-400">
                            Moist sponge cake soaked in three kinds of milk: evaporated, condensed, and cream, topped with whipped cream.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Refrescos Naturales Menu Content */}
            <TabsContent value="refrescos-naturales">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Refrescos Naturales</h2>
                  
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Jarra de Chicha Morada */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/d42e852c-3916-4c67-98ef-583e2252bf5a.png" 
                            alt="Jarra de Chicha Morada" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Jarra de Chicha Morada 1 Litro</h3>
                            <span className="text-restaurant-gold">£10.00</span>
                          </div>
                          <p className="text-gray-400">
                            Purple corn juice made from a traditional Peruvian recipe, infused with fruits such as pineapple, quince, or apple. A naturally sweet and antioxidant-rich drink native to the Andes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Cervezas y Cocteles Menu Content */}
            <TabsContent value="cervezas-cocteles">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Cervezas y Cocteles</h2>
                  
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Corona Extra */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/7552ec36-166d-4415-9285-5e12e52392eb.png" 
                            alt="Corona Extra" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Corona Extra 330 ml</h3>
                            <span className="text-restaurant-gold">£4.00</span>
                          </div>
                          <p className="text-gray-400">
                            Imported Mexican beer served in a 330ml bottle.
                          </p>
                        </div>
                      </div>

                      {/* Pisco Sour */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/67cc83b1-66c5-4689-899c-13fa76a1b7d5.png" 
                            alt="Pisco Sour" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Pisco Sour</h3>
                            <span className="text-restaurant-gold">£10.00</span>
                          </div>
                          <p className="text-gray-400">
                            Traditional Peruvian cocktail made with pisco, syrup, lemon juice, and egg whites.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Soft Drinks Menu Content */}
            <TabsContent value="soft-drinks">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Gaseosas / Soft Drinks</h2>
                  
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Coca Cola (Can) */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/5ab6e8df-d2c9-42f1-b6d1-37a9807c3901.png" 
                            alt="Coca Cola (Can)" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Coca Cola (Can)</h3>
                            <span className="text-restaurant-gold">£2.50</span>
                          </div>
                          <p className="text-gray-400">
                            Classic Coca-Cola soft drink in a 330ml can.
                          </p>
                        </div>
                      </div>

                      {/* Fanta (Can) */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/ccb03743-2004-4d31-823d-4a5ba5b14e5b.png" 
                            alt="Fanta (Can)" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Fanta (Can)</h3>
                            <span className="text-restaurant-gold">£2.50</span>
                          </div>
                          <p className="text-gray-400">
                            Orange-flavoured Fanta soft drink in a 330ml can.
                          </p>
                        </div>
                      </div>

                      {/* Inka Kola */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/b2ec2c36-118b-4dff-92ca-bc9120917bc9.png" 
                            alt="Inka Kola" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Inka Kola</h3>
                            <span className="text-restaurant-gold">£4.00</span>
                          </div>
                          <p className="text-gray-400">
                            Traditional Peruvian yellow soda with a sweet, fruity flavour (glass bottle).
                          </p>
                        </div>
                      </div>

                      {/* Manzana 2 Litros */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/1df58d52-a620-4cd4-b689-e54b756dad27.png" 
                            alt="Manzana 2 Litros" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Manzana 2 Litros</h3>
                            <span className="text-restaurant-gold">£7.00</span>
                          </div>
                          <p className="text-gray-400">
                            2-litre bottle of apple-flavoured Peruvian soda.
                          </p>
                        </div>
                      </div>

                      {/* Manzana 500ml */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/bb67ff27-397d-451a-9b5b-c479a1a3c65e.png" 
                            alt="Manzana 500ml" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Manzana 500ml</h3>
                            <span className="text-restaurant-gold">£3.50</span>
                          </div>
                          <p className="text-gray-400">
                            500ml bottle of apple-flavoured Peruvian soda.
                          </p>
                        </div>
                      </div>

                      {/* Tropical 2 Litros */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/fe8eaef3-9f09-4ee0-a65b-cf5d8fdf6641.png" 
                            alt="Tropical 2 Litros" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Tropical 2 Litros</h3>
                            <span className="text-restaurant-gold">£7.00</span>
                          </div>
                          <p className="text-gray-400">
                            2-litre bottle of tropical fruit-flavoured Peruvian soda.
                          </p>
                        </div>
                      </div>

                      {/* Tropical 500ml */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/3b27d420-c2a4-43d5-bec4-35b03c87fe19.png" 
                            alt="Tropical 500ml" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Tropical 500ml</h3>
                            <span className="text-restaurant-gold">£3.50</span>
                          </div>
                          <p className="text-gray-400">
                            500ml bottle of tropical fruit-flavoured Peruvian soda.
                          </p>
                        </div>
                      </div>

                      {/* 7UP (Can) */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/548ba360-5745-41d6-8f5b-452a4e62cb00.png" 
                            alt="7UP (Can)" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">7UP (Can)</h3>
                            <span className="text-restaurant-gold">£2.50</span>
                          </div>
                          <p className="text-gray-400">
                            Lemon-lime flavoured 7UP in a 330ml can.
                          </p>
                        </div>
                      </div>

                      {/* America / Andin's Cristal 2 Litros */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/a4193c9f-cbe4-4c1d-a8a6-a65da0df550a.png" 
                            alt="America / Andin's Cristal 2 Litros" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">America / Andin's Cristal 2 Litros</h3>
                            <span className="text-restaurant-gold">£7.00</span>
                          </div>
                          <p className="text-gray-400">
                            2-litre bottle of America Kola, a yellow Peruvian soda with a sweet herbal flavour.
                          </p>
                        </div>
                      </div>

                      {/* America / Andin's Cristal 500ml */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/dd513bd2-9e99-4a00-8bda-688799bab97f.png" 
                            alt="America / Andin's Cristal 500ml" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">America / Andin's Cristal 500ml</h3>
                            <span className="text-restaurant-gold">£3.50</span>
                          </div>
                          <p className="text-gray-400">
                            500ml bottle of America Kola, a yellow Peruvian soda with a sweet herbal flavour.
                          </p>
                        </div>
                      </div>

                      {/* Coca Cola 1.75 Litros */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/9f1c5023-2a74-4008-8ab0-edd2bb549bfb.png" 
                            alt="Coca Cola 1.75 Litros" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">Coca Cola 1.75 Litros</h3>
                            <span className="text-restaurant-gold">£7.00</span>
                          </div>
                          <p className="text-gray-400">
                            1.75-litre bottle of classic Coca-Cola.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Placeholder tabs content */}
            <TabsContent value="grilled-chicken">
              <div className="flex items-center justify-center p-10 min-h-[300px]">
                <p className="text-gray-400 text-lg">Coming soon!</p>
              </div>
            </TabsContent>
            
            <TabsContent value="sopas-soups">
              <div className="flex items-center justify-center p-10 min-h-[300px]">
                <p className="text-gray-400 text-lg">Coming soon!</p>
              </div>
            </TabsContent>
            
            <TabsContent value="guarniciones-extras">
              <div className="flex items-center justify-center p-10 min-h-[300px]">
                <p className="text-gray-400 text-lg">Coming soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default Menu;

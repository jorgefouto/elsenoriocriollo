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

                      {/* Papa a la Huancaína - UPDATED IMAGE from Salchipapa */}
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
                            <h3 className="text-xl font-serif text-restaurant-light">Papa a la Huancaína</h3>
                            <span className="text-restaurant-gold">£9.00</span>
                          </div>
                          <p className="text-gray-400">
                            Boiled yellow potatoes in a creamy spicy Huancaína sauce, topped with sliced boiled egg and black olives.
                            <span className="block mt-2 italic">Classic Peruvian starter with a savory chili-cheese sauce.</span>
                          </p>
                        </div>
                      </div>

                      {/* Salchipapa - UPDATED IMAGE from Leche de Tigre */}
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
                            <h3 className="text-xl font-serif text-restaurant-light">Salchipapa</h3>
                            <span className="text-restaurant-gold">£9.00</span>
                          </div>
                          <p className="text-gray-400">
                            Fried slices of sausage and French fries.
                            <span className="block mt-2 italic">Popular Peruvian comfort food, street-style.</span>
                          </p>
                        </div>
                      </div>

                      {/* Leche de Tigre - UPDATED with NEW IMAGE */}
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
            </TabsContent>
            
            {/* Pescados y Mariscos Menu Content */}
            <TabsContent value="pescados-mariscos">
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
            </TabsContent>
            
            {/* Grilled Chicken Menu Content */}
            <TabsContent value="grilled-chicken">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Grilled Chicken</h2>
                  
                  <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* 1/4 de Pollo a la Brasa */}
                      <div className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg overflow-hidden">
                        <div className="relative h-52">
                          <img 
                            src="/lovable-uploads/3b27d420-c2a4-43d5-bec4-35b03c87fe19.png" 
                            alt="1/4 de Pollo a la Brasa" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-xl font-serif text-restaurant-light">1/4 de Pollo a la Brasa</h3>
                            <span className="text-restaurant-gold">£9.00</span>
                          </div>
                          <p className="text-gray-400">
                            Quarter grilled chicken served with French fries, marinated salad with vinaigrette, and Peruvian sauces.
                            <span className="block mt-2 italic">Our signature charcoal-grilled chicken.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Sopas/Soups Menu Content */}
            <TabsContent value="sopas-soups">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Sopas/Soups</h2>
                  <p className="text-gray-400 mb-8">Coming soon - Check back for our homemade Peruvian soups.</p>
                </div>
              </div>
            </TabsContent>
            
            {/* Guarniciones/Extras Menu Content */}
            <TabsContent value="guarniciones-extras">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Guarniciones/Extras</h2>
                  <p className="text-gray-400 mb-8">Coming soon - Check back for our sides and extras.</p>
                </div>
              </div>
            </TabsContent>
            
            {/* Dulces/Dessert Menu Content */}
            <TabsContent value="dulces-dessert">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Dulces/Dessert</h2>
                  <p className="text-gray-400 mb-8">Coming soon - Check back for our traditional Peruvian desserts.</p>
                </div>
              </div>
            </TabsContent>
            
            {/* Refrescos Naturales Menu Content */}
            <TabsContent value="refrescos-naturales">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Refrescos Naturales</h2>
                  <p className="text-gray-400 mb-8">Coming soon - Check back for our natural refreshing beverages.</p>
                </div>
              </div>
            </TabsContent>
            
            {/* Cervezas y Cocteles Menu Content */}
            <TabsContent value="cervezas-cocteles">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Cervezas y Cocteles</h2>
                  <p className="text-gray-400 mb-8">Coming soon - Check back for our beer and cocktail offerings.</p>
                </div>
              </div>
            </TabsContent>
            
            {/* Soft Drinks Menu Content */}
            <TabsContent value="soft-drinks">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Gaseosas/Soft Drinks</h2>
                  <p className="text-gray-400 mb-8">Coming soon - Check back for our soft drink options.</p>
                </div>
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

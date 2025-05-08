
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
            <TabsList className="grid w-full grid-cols-5 bg-restaurant-muted border border-restaurant-gold/20 rounded-lg mb-8">
              <TabsTrigger value="starters" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark">Starters</TabsTrigger>
              <TabsTrigger value="dinner" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark">Dinner</TabsTrigger>
              <TabsTrigger value="dessert" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark">Dessert</TabsTrigger>
              <TabsTrigger value="cocktails" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark">Cocktails</TabsTrigger>
              <TabsTrigger value="wine" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark">Wine</TabsTrigger>
            </TabsList>

            {/* Peruvian Starters Menu */}
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
            
            {/* Dinner Menu */}
            <TabsContent value="dinner">
              <div className="space-y-12">
                {/* Starters */}
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Starters</h2>
                  
                  <div className="space-y-8">
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Roasted Bone Marrow</h3>
                        <span className="text-restaurant-gold">$18</span>
                      </div>
                      <p className="text-gray-400">Herb salad, pickled shallots, grilled sourdough</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Tuna Tartare</h3>
                        <span className="text-restaurant-gold">$22</span>
                      </div>
                      <p className="text-gray-400">Avocado, citrus ponzu, sesame crisp</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Burrata</h3>
                        <span className="text-restaurant-gold">$19</span>
                      </div>
                      <p className="text-gray-400">Heirloom tomato, basil oil, aged balsamic, grilled bread</p>
                    </div>
                  </div>
                </div>
                
                {/* Mains */}
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Mains</h2>
                  
                  <div className="space-y-8">
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Herb-Crusted Sea Bass</h3>
                        <span className="text-restaurant-gold">$36</span>
                      </div>
                      <p className="text-gray-400">Lemon butter sauce, sautéed spinach, fingerling potatoes</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Aged Prime Ribeye (14oz)</h3>
                        <span className="text-restaurant-gold">$45</span>
                      </div>
                      <p className="text-gray-400">Roasted garlic butter, truffle fries, seasonal vegetables</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Duck Breast</h3>
                        <span className="text-restaurant-gold">$38</span>
                      </div>
                      <p className="text-gray-400">Cherry gastrique, wild rice, roasted Brussels sprouts</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Truffle Risotto</h3>
                        <span className="text-restaurant-gold">$28</span>
                      </div>
                      <p className="text-gray-400">Wild mushrooms, shaved black truffle, aged Parmesan</p>
                    </div>
                  </div>
                </div>
                
                {/* Sides */}
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Sides</h2>
                  
                  <div className="space-y-8">
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Truffle Fries</h3>
                        <span className="text-restaurant-gold">$12</span>
                      </div>
                      <p className="text-gray-400">Parmesan, herbs, truffle aioli</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Roasted Brussels Sprouts</h3>
                        <span className="text-restaurant-gold">$10</span>
                      </div>
                      <p className="text-gray-400">Bacon, honey, chili flakes</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Creamed Spinach</h3>
                        <span className="text-restaurant-gold">$11</span>
                      </div>
                      <p className="text-gray-400">Garlic, nutmeg, Parmesan crust</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Dessert Menu */}
            <TabsContent value="dessert">
              <div className="space-y-8">
                <div className="menu-item">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-restaurant-light">Dark Chocolate Soufflé</h3>
                    <span className="text-restaurant-gold">$14</span>
                  </div>
                  <p className="text-gray-400">Vanilla bean ice cream, chocolate sauce (Please allow 20 minutes)</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-restaurant-light">Crème Brûlée</h3>
                    <span className="text-restaurant-gold">$12</span>
                  </div>
                  <p className="text-gray-400">Madagascar vanilla, seasonal berries</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-restaurant-light">Sticky Toffee Pudding</h3>
                    <span className="text-restaurant-gold">$13</span>
                  </div>
                  <p className="text-gray-400">Butterscotch sauce, vanilla ice cream, candied pecans</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-restaurant-light">Artisanal Cheese Plate</h3>
                    <span className="text-restaurant-gold">$18</span>
                  </div>
                  <p className="text-gray-400">Selection of three cheeses, seasonal accompaniments, crackers</p>
                </div>
              </div>
            </TabsContent>
            
            {/* Cocktails Menu */}
            <TabsContent value="cocktails">
              <div className="space-y-8">
                <div className="menu-item">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-restaurant-light">Classic Manhattan</h3>
                    <span className="text-restaurant-gold">$16</span>
                  </div>
                  <p className="text-gray-400">Rye whiskey, sweet vermouth, bitters, luxardo cherry</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-restaurant-light">Smoky Old Fashioned</h3>
                    <span className="text-restaurant-gold">$17</span>
                  </div>
                  <p className="text-gray-400">Bourbon, maple syrup, aromatic bitters, applewood smoke</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-restaurant-light">Elderflower Gin Fizz</h3>
                    <span className="text-restaurant-gold">$15</span>
                  </div>
                  <p className="text-gray-400">London dry gin, elderflower liqueur, fresh lemon, soda, egg white</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-restaurant-light">Spicy Paloma</h3>
                    <span className="text-restaurant-gold">$14</span>
                  </div>
                  <p className="text-gray-400">Reposado tequila, fresh grapefruit, lime, jalapeño, soda</p>
                </div>
                
                <div className="menu-item">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif text-restaurant-light">Non-Alcoholic</h3>
                    <span className="text-restaurant-gold">$9</span>
                  </div>
                  <p className="text-gray-400">Please ask your server about our seasonal non-alcoholic options</p>
                </div>
              </div>
            </TabsContent>
            
            {/* Wine Menu */}
            <TabsContent value="wine">
              <div className="space-y-12">
                {/* Sparkling */}
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Sparkling</h2>
                  
                  <div className="space-y-8">
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Champagne, Veuve Clicquot, Brut</h3>
                        <span className="text-restaurant-gold">$22 / $110</span>
                      </div>
                      <p className="text-gray-400">France</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Prosecco, La Marca</h3>
                        <span className="text-restaurant-gold">$14 / $56</span>
                      </div>
                      <p className="text-gray-400">Italy</p>
                    </div>
                  </div>
                </div>
                
                {/* White */}
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">White</h2>
                  
                  <div className="space-y-8">
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Chardonnay, Rombauer</h3>
                        <span className="text-restaurant-gold">$18 / $72</span>
                      </div>
                      <p className="text-gray-400">Carneros, California</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Sauvignon Blanc, Cloudy Bay</h3>
                        <span className="text-restaurant-gold">$16 / $64</span>
                      </div>
                      <p className="text-gray-400">Marlborough, New Zealand</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Pinot Grigio, Santa Margherita</h3>
                        <span className="text-restaurant-gold">$15 / $60</span>
                      </div>
                      <p className="text-gray-400">Alto Adige, Italy</p>
                    </div>
                  </div>
                </div>
                
                {/* Red */}
                <div>
                  <h2 className="text-2xl font-serif text-restaurant-gold mb-6">Red</h2>
                  
                  <div className="space-y-8">
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Cabernet Sauvignon, Caymus</h3>
                        <span className="text-restaurant-gold">$25 / $100</span>
                      </div>
                      <p className="text-gray-400">Napa Valley, California</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Pinot Noir, Belle Glos</h3>
                        <span className="text-restaurant-gold">$19 / $76</span>
                      </div>
                      <p className="text-gray-400">California</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Malbec, Catena</h3>
                        <span className="text-restaurant-gold">$14 / $56</span>
                      </div>
                      <p className="text-gray-400">Mendoza, Argentina</p>
                    </div>
                    
                    <div className="menu-item">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif text-restaurant-light">Super Tuscan, Tignanello</h3>
                        <span className="text-restaurant-gold">$32 / $160</span>
                      </div>
                      <p className="text-gray-400">Tuscany, Italy</p>
                    </div>
                  </div>
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


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
            <h1 className="text-4xl md:text-5xl font-serif text-restaurant-light mb-4">Our Menu</h1>
            <div className="w-16 h-1 bg-restaurant-gold mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Innovative cuisine with classic influences, crafted with seasonal ingredients and expert technique.
            </p>
          </div>
          
          <Tabs defaultValue="dinner" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-restaurant-muted border border-restaurant-gold/20 rounded-lg mb-8">
              <TabsTrigger value="dinner" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark">Dinner</TabsTrigger>
              <TabsTrigger value="dessert" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark">Dessert</TabsTrigger>
              <TabsTrigger value="cocktails" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark">Cocktails</TabsTrigger>
              <TabsTrigger value="wine" className="data-[state=active]:bg-restaurant-gold data-[state=active]:text-restaurant-dark">Wine</TabsTrigger>
            </TabsList>
            
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SopasSoupsSection from "@/components/menu/sections/SopasSoupsSection";
import GuarnicionesExtrasSection from "@/components/menu/sections/GuarnicionesExtrasSection";
import StartersSection from "@/components/menu/sections/StartersSection";
import PlatosCriollosSection from "@/components/menu/sections/PlatosCriollosSection";
import PescadosMariscosSection from "@/components/menu/sections/PescadosMariscosSection";
import GrilledChickenSection from "@/components/menu/sections/GrilledChickenSection";
import DulcesDessertSection from "@/components/menu/sections/DulcesDessertSection";
import RefrescosNaturalesSection from "@/components/menu/sections/RefrescosNaturalesSection";
import CervezasCoctelesSection from "@/components/menu/sections/CervezasCoctelesSection";
import SoftDrinksSection from "@/components/menu/sections/SoftDrinksSection";

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
              <StartersSection />
            </TabsContent>
            
            {/* Platos Criollos Menu Content */}
            <TabsContent value="platos-criollos">
              <PlatosCriollosSection />
            </TabsContent>
            
            {/* Pescados y Mariscos Menu Content */}
            <TabsContent value="pescados-mariscos">
              <PescadosMariscosSection />
            </TabsContent>
            
            {/* Grilled Chicken Menu Content */}
            <TabsContent value="grilled-chicken">
              <GrilledChickenSection />
            </TabsContent>
            
            {/* Sopas/Soups Menu Content - REFACTORED */}
            <TabsContent value="sopas-soups">
              <SopasSoupsSection />
            </TabsContent>
            
            {/* Guarniciones/Extras Menu Content - REFACTORED */}
            <TabsContent value="guarniciones-extras">
              <GuarnicionesExtrasSection />
            </TabsContent>
            
            {/* Dulces/Dessert Menu Content */}
            <TabsContent value="dulces-dessert">
              <DulcesDessertSection />
            </TabsContent>
            
            {/* Refrescos Naturales Menu Content */}
            <TabsContent value="refrescos-naturales">
              <RefrescosNaturalesSection />
            </TabsContent>
            
            {/* Cervezas y Cocteles Menu Content */}
            <TabsContent value="cervezas-cocteles">
              <CervezasCoctelesSection />
            </TabsContent>
            
            {/* Soft Drinks Menu Content */}
            <TabsContent value="soft-drinks">
              <SoftDrinksSection />
            </TabsContent>
          </Tabs>
        </div>
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default Menu;

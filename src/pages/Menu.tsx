
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import refactored menu section components
import StartersMenu from "@/components/menu/StartersMenu";
import PlatosCriollosMenu from "@/components/menu/PlatosCriollosMenu";
import PescadosMariscosMenu from "@/components/menu/PescadosMariscosMenu";
import GrilledChickenMenu from "@/components/menu/GrilledChickenMenu";
import SopasSoupsMenu from "@/components/menu/SopasSoupsMenu";
import GuarnicionesExtrasMenu from "@/components/menu/GuarnicionesExtrasMenu";
import DulcesDessertMenu from "@/components/menu/DulcesDessertMenu";
import RefrescosNaturalesMenu from "@/components/menu/RefrescosNaturalesMenu";
import CervezasCoctelesMenu from "@/components/menu/CervezasCoctelesMenu";
import SoftDrinksMenu from "@/components/menu/SoftDrinksMenu";

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
            <div className="flex flex-col gap-2 justify-center mb-8">
              {/* First row of categories */}
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
              </TabsList>
              {/* Second row of categories with same styling */}
              <TabsList className="bg-restaurant-muted border border-restaurant-gold/20 rounded-lg p-1 flex flex-wrap justify-center gap-1">
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

            {/* Refactored category components */}
            <TabsContent value="starters">
              <StartersMenu />
            </TabsContent>
            <TabsContent value="platos-criollos">
              <PlatosCriollosMenu />
            </TabsContent>
            <TabsContent value="pescados-mariscos">
              <PescadosMariscosMenu />
            </TabsContent>
            <TabsContent value="grilled-chicken">
              <GrilledChickenMenu />
            </TabsContent>
            <TabsContent value="sopas-soups">
              <SopasSoupsMenu />
            </TabsContent>
            <TabsContent value="guarniciones-extras">
              <GuarnicionesExtrasMenu />
            </TabsContent>
            <TabsContent value="dulces-dessert">
              <DulcesDessertMenu />
            </TabsContent>
            <TabsContent value="refrescos-naturales">
              <RefrescosNaturalesMenu />
            </TabsContent>
            <TabsContent value="cervezas-cocteles">
              <CervezasCoctelesMenu />
            </TabsContent>
            <TabsContent value="soft-drinks">
              <SoftDrinksMenu />
            </TabsContent>
          </Tabs>
        </div>
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default Menu;

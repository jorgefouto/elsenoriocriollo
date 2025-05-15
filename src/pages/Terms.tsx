
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-restaurant-dark text-restaurant-light flex flex-col">
    <Navbar />
    <main className="flex-1 container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-serif text-restaurant-gold mb-6">Terms of Service</h1>
      <div className="mb-10 w-16 h-1 bg-restaurant-gold" />
      <ol className="text-gray-400 list-decimal ml-5 space-y-2 mb-6">
        <li>By using our website, you agree to follow all applicable laws and regulations.</li>
        <li>All content and materials are property of El Señorio Criollo.</li>
        <li>We reserve the right to change or discontinue any aspect of the site at any time without notice.</li>
        <li>Misuse of our website may result in termination of access.</li>
      </ol>
      <p className="text-gray-500 text-sm">
        For questions, please contact <a href="mailto:elsenoriocriollo.co.uk" className="text-restaurant-gold underline">elsenoriocriollo.co.uk</a>.
      </p>
    </main>
    <Footer />
  </div>
);

export default Terms;

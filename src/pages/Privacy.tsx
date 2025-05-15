
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-restaurant-dark text-restaurant-light flex flex-col">
    <Navbar />
    <main className="flex-1 container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-serif text-restaurant-gold mb-6">Privacy Policy</h1>
      <div className="mb-10 w-16 h-1 bg-restaurant-gold" />
      <p className="mb-6 text-gray-300">
        Your privacy is important to us. This Privacy Policy explains how El Señorio Criollo collects, uses, and protects your personal information when you use our website.
      </p>
      <ul className="text-gray-400 list-disc ml-5 space-y-2 mb-6">
        <li>We only collect the information you provide directly to us via forms or reservations.</li>
        <li>We do not share your information with third parties except as necessary to provide our services.</li>
        <li>Your data is stored securely, and we use reasonable measures to protect it.</li>
        <li>This policy may be updated periodically, and by using our site, you agree to its terms.</li>
      </ul>
      <p className="text-gray-500 text-sm">
        For any questions, contact us at <a href="mailto:elsenoriocriollo.co.uk" className="text-restaurant-gold underline">elsenoriocriollo.co.uk</a>.
      </p>
    </main>
    <Footer />
  </div>
);

export default Privacy;


import React from "react";
import { whatsapp } from "lucide-react";

const PHONE_NUMBER = "447445081018"; // International format, no plus
const MESSAGE = encodeURIComponent(
  "Book a Table here with your name?; time/date?; and number of people?"
);

const WhatsAppBubble: React.FC = () => {
  // Construct WhatsApp link
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book a Table via WhatsApp"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-green-600 hover:bg-green-700 transition-colors shadow-lg text-white font-medium text-base group outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      >
        {/* WhatsApp Icon */}
        <span className="flex items-center">
          {React.createElement(whatsapp, { size: 24, className: "group-hover:scale-110 transition-transform" })}
        </span>
        <span>Book a Table</span>
      </a>
    </div>
  );
};

export default WhatsAppBubble;

import { Instagram } from "lucide-react";
import { BOOKING_URL, INSTAGRAM_URL, openExternalLink } from "@/lib/site-links";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col items-center gap-6">
      <a href="#home">
        <img src={logo} alt="Ariel Sabag Barbershop" className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" />
      </a>

      <div className="flex items-center gap-6">
        <button
          onClick={() => openExternalLink(INSTAGRAM_URL)}
          className="text-foreground/50 hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0"
          aria-label="אינסטגרם"
        >
          <Instagram className="w-5 h-5" />
        </button>
        <a
          href={BOOKING_URL}
          className="text-sm tracking-widest text-foreground/50 hover:text-primary transition-colors"
        >
          קבע תור
        </a>
      </div>

      <p className="text-xs text-foreground/30">
        © {new Date().getFullYear()} Ariel Sabag Barbershop. כל הזכויות שמורות.
      </p>
    </div>
  </footer>
);

export default Footer;

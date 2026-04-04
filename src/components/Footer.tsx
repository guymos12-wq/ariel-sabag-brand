import { Instagram } from "lucide-react";
import { BOOKING_URL } from "@/lib/site-links";

const INSTAGRAM_URL = "https://www.instagram.com/a_sabag_barbershop/";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#home" className="font-heading text-lg tracking-wider gold-gradient-text">
        אריאל סבג ברברשופ
      </a>

      <div className="flex items-center gap-6">
        <a
          href={INSTAGRAM_URL}
          target="_top"
          className="text-foreground/50 hover:text-primary transition-colors"
          aria-label="אינסטגרם"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href={BOOKING_URL}
          className="text-sm tracking-widest text-foreground/50 hover:text-primary transition-colors"
        >
          קבע תור
        </a>
      </div>

      <p className="text-xs text-foreground/30">
        © {new Date().getFullYear()} אריאל סבג ברברשופ. כל הזכויות שמורות.
      </p>
    </div>
  </footer>
);

export default Footer;

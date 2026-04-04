import { Instagram } from "lucide-react";
import { BOOKING_URL, INSTAGRAM_URL, openExternalLink } from "@/lib/site-links";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#home" className="font-heading text-lg tracking-wider gold-gradient-text">
        אריאל סבג ברברשופ
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
        © {new Date().getFullYear()} אריאל סבג ברברשופ. כל הזכויות שמורות.
      </p>
    </div>
  </footer>
);

export default Footer;

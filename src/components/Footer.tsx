import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/a_sabag_barbershop/";
const BOOKING_URL = "https://calendar.app.google/v6WZoeHaFuPQ1jsN7";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#home" className="font-heading text-lg tracking-wider gold-gradient-text">
        ARIEL SABAG BARBERSHOP
      </a>

      <div className="flex items-center gap-6">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 hover:text-primary transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors"
        >
          Book Now
        </a>
      </div>

      <p className="text-xs text-foreground/30">
        © {new Date().getFullYear()} Ariel Sabag Barbershop. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

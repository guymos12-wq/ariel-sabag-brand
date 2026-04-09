import logo from "@/assets/logo.png";
import { BOOKING_URL } from "@/lib/site-links";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
    <img
      src={logo}
      alt="Ariel Sabag Barbershop"
      className="absolute inset-0 w-full h-full object-contain p-12 md:p-24 lg:p-32 opacity-20 pointer-events-none"
    />

    <div className="relative z-10 text-center">
      <a
        href={BOOKING_URL}
        className="inline-block px-12 py-4 text-sm font-semibold tracking-widest bg-primary text-primary-foreground hover:brightness-110 hover:scale-105 transition-all duration-300 animate-fade-in"
      >
        קבע תור עכשיו
      </a>
    </div>
  </section>
);

export default HeroSection;

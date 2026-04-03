import heroImage from "@/assets/hero-barber.jpg";

const BOOKING_URL = "https://calendar.app.google/v6WZoeHaFuPQ1jsN7";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImage}
      alt="מספרה מקצועית"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0" style={{ background: "var(--dark-overlay)" }} />

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <div className="gold-line mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }} />
      <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        דיוק. סטייל.{" "}
        <span className="gold-gradient-text">ביטחון.</span>
      </h1>
      <p className="font-body text-base md:text-lg text-foreground/70 tracking-wide mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        תספורות וטיפוח מקצועי על ידי אריאל סבג
      </p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 text-sm font-semibold tracking-widest bg-primary text-primary-foreground hover:brightness-110 hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        קבע תור עכשיו
      </a>
      <div className="gold-line mx-auto mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }} />
    </div>
  </section>
);

export default HeroSection;

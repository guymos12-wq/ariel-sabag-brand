import { CalendarDays } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const BOOKING_URL = "https://calendar.app.google/v6WZoeHaFuPQ1jsN7";

const BookingSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="booking" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className={`relative z-10 container mx-auto text-center max-w-2xl ${inView ? "animate-fade-in" : "opacity-0"}`}>
        <CalendarDays className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          קבעו את <span className="gold-gradient-text">התור הבא</span>
        </h2>
        <div className="gold-line mx-auto mb-6" />
        <p className="text-foreground/60 mb-10 text-lg">
          מוכנים למראה חדש? קבעו תור בשניות.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 text-base font-semibold tracking-widest bg-primary text-primary-foreground hover:brightness-110 hover:scale-105 transition-all duration-300"
        >
          קבע תור עכשיו
        </a>
      </div>
    </section>
  );
};

export default BookingSection;

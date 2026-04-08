import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { INSTAGRAM_URL, openExternalLink } from "@/lib/site-links";

const contactItems = [
  { icon: Phone, label: "טלפון", value: "054-270-9090" },
  { icon: MapPin, label: "כתובת", value: "אלומות 14/1, זכרון יעקב" },
  { icon: Clock, label: "שעות פעילות", value: "התורים נפתחים מחדש כל שבוע" },
];

const ContactSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto text-center max-w-3xl">
        <p className="text-sm tracking-[0.3em] text-primary font-body mb-4">צור קשר</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          בואו <span className="gold-gradient-text">נדבר</span>
        </h2>
        <div className="gold-line mx-auto mb-12" />

        <div className={`grid sm:grid-cols-3 gap-8 mb-10 ${inView ? "animate-fade-in" : "opacity-0"}`}>
          {contactItems.map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-3">
              <c.icon className="w-8 h-8 text-primary" />
              <p className="text-sm tracking-widest text-foreground/50">{c.label}</p>
              <p className="text-foreground/80 text-sm">{c.value}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => openExternalLink(INSTAGRAM_URL)}
          className="inline-flex items-center gap-2 text-primary hover:brightness-125 transition-all text-sm tracking-widest cursor-pointer bg-transparent border-none"
        >
          <Instagram className="w-5 h-5" />
          @a_sabag_barbershop
        </button>
      </div>
    </section>
  );
};

export default ContactSection;

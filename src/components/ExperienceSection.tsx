import diplomaNixon from "@/assets/diploma-nixon.png";
import diplomaAgiva from "@/assets/diploma-agiva.png";
import { useInView } from "@/hooks/useInView";

const certificates = [
  { src: diplomaNixon, alt: "תעודת Nixon Academy - קורס Barbershop מקצועי" },
  { src: diplomaAgiva, alt: "תעודת Agiva Diploma - הכשרה מקצועית" },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-12 ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm tracking-[0.3em] text-primary font-body mb-4">ניסיון</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            הכשרה <span className="gold-gradient-text">מקצועית</span>
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-foreground/70 max-w-xl mx-auto">
            בוגר קורסים מקצועיים בתחום הספרות, עם תעודות הסמכה מהמובילים בתעשייה
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`group overflow-hidden border border-border bg-secondary p-4 hover:border-primary/50 transition-all duration-300 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.2}s` }}
            >
              <img
                src={cert.src}
                alt={cert.alt}
                loading="lazy"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import { Scissors, Sparkles, Crown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Scissors,
    title: "Haircut",
    description: "Precision cuts tailored to your face shape and personal style. From classic to contemporary.",
  },
  {
    icon: Sparkles,
    title: "Beard Trimming",
    description: "Expert beard shaping and trimming to keep your facial hair looking sharp and well-groomed.",
  },
  {
    icon: Crown,
    title: "Full Grooming",
    description: "The complete experience — haircut, beard styling, and finishing touches for a polished look.",
  },
];

const ServicesSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Services</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          What We <span className="gold-gradient-text">Offer</span>
        </h2>
        <div className="gold-line mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 group ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <s.icon className="w-10 h-10 text-primary mx-auto mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

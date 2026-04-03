import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "David M.",
    text: "Best barber I've ever been to. Ariel pays attention to every detail and always delivers exactly what I want.",
    rating: 5,
  },
  {
    name: "Yoav R.",
    text: "The atmosphere is amazing and the results speak for themselves. I won't go anywhere else.",
    rating: 5,
  },
  {
    name: "Michael S.",
    text: "Professional, friendly, and incredibly skilled. Every visit feels like a premium experience.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          What Clients <span className="gold-gradient-text">Say</span>
        </h2>
        <div className="gold-line mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card border border-border p-8 text-left ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="text-sm font-semibold tracking-wide">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

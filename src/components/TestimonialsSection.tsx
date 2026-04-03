import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "דוד מ.",
    text: "הספר הכי טוב שהייתי אצלו. אריאל שם לב לכל פרט ותמיד מספק בדיוק את מה שאני רוצה.",
    rating: 5,
  },
  {
    name: "יואב ר.",
    text: "האווירה מדהימה והתוצאות מדברות בעד עצמן. אני לא הולך לשום מקום אחר.",
    rating: 5,
  },
  {
    name: "מיכאל ש.",
    text: "מקצועי, ידידותי ומיומן להפליא. כל ביקור מרגיש כמו חוויה פרימיום.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm tracking-[0.3em] text-primary font-body mb-4">המלצות</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          מה הלקוחות <span className="gold-gradient-text">אומרים</span>
        </h2>
        <div className="gold-line mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card border border-border p-8 text-right ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4 justify-end">
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

import { useInView } from "@/hooks/useInView";

const prices = [
  { service: "תספורת גבר/ילד", price: 50 },
  { service: "תספורת + זקן", price: 60 },
  { service: "מכונות לגוף", price: 120 },
  { service: "ווקס", price: 40 },
  { service: "אבקת נפח", price: 30 },
  { service: "קרם תלתלים", price: 50 },
  { service: "ספריי מלח", price: 40 },
  { service: "ספריי טוניק", price: 35 },
];

const PricingSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="pricing" className="section-padding" ref={ref}>
      <div className="container mx-auto text-center max-w-2xl">
        <p className="text-sm tracking-[0.3em] text-primary font-body mb-4">מחירון</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          מחירון <span className="gold-gradient-text">שירותים</span>
        </h2>
        <div className="gold-line mx-auto mb-12" />

        <div className={`bg-card border border-border overflow-hidden ${inView ? "animate-fade-in" : "opacity-0"}`}>
          {prices.map((item, i) => (
            <div
              key={item.service}
              className={`flex items-center justify-between px-6 py-4 ${
                i < prices.length - 1 ? "border-b border-border" : ""
              } hover:bg-secondary/50 transition-colors duration-200`}
            >
              <span className="text-primary font-heading text-xl font-bold">₪{item.price}</span>
              <span className="text-foreground/80 font-body text-sm md:text-base">{item.service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

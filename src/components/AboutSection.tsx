import aboutImage from "@/assets/about-barber.jpg";
import { useInView } from "@/hooks/useInView";

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className={`overflow-hidden ${inView ? "animate-fade-in-left" : "opacity-0"}`}>
          <img
            src={aboutImage}
            alt="Ariel Sabag - Professional Barber"
            loading="lazy"
            width={800}
            height={1000}
            className="w-full max-w-md mx-auto object-cover border border-border"
          />
        </div>
        <div className={inView ? "animate-fade-in" : "opacity-0"} style={{ animationDelay: "0.2s" }}>
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            The Art of the <span className="gold-gradient-text">Perfect Cut</span>
          </h2>
          <div className="gold-line mb-6" />
          <p className="text-foreground/70 leading-relaxed mb-4">
            With years of experience behind the chair, Ariel Sabag has honed his craft to deliver precision cuts 
            and grooming services that leave every client looking and feeling their best.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Every haircut is a personalized experience. Ariel takes the time to understand your style, face shape, 
            and lifestyle to create a look that's uniquely yours.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            From classic fades to modern styles, beard sculpting to full grooming — expect nothing less 
            than exceptional quality and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

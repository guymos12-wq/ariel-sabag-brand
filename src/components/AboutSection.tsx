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
            alt="אריאל סבג - ספר מקצועי"
            loading="lazy"
            width={800}
            height={1000}
            className="w-full max-w-md mx-auto object-cover border border-border"
          />
        </div>
        <div className={inView ? "animate-fade-in" : "opacity-0"} style={{ animationDelay: "0.2s" }}>
          <p className="text-sm tracking-[0.3em] text-primary font-body mb-4">אודות</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            האומנות של <span className="gold-gradient-text">התספורת המושלמת</span>
          </h2>
          <div className="gold-line mb-6" />
          <p className="text-foreground/70 leading-relaxed mb-4">
            עם שנים של ניסיון מאחורי הכיסא, אריאל סבג שיכלל את המלאכה שלו כדי לספק תספורות מדויקות
            ושירותי טיפוח שגורמים לכל לקוח להיראות ולהרגיש במיטבו.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            כל תספורת היא חוויה אישית. אריאל לוקח את הזמן להבין את הסגנון שלך, צורת הפנים
            ואורח החיים כדי ליצור מראה שהוא ייחודי לך.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            מפייד קלאסי ועד סגנונות מודרניים, עיצוב זקן ועד טיפוח מלא — אל תצפו לפחות
            מאיכות יוצאת דופן ותשומת לב לפרטים.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

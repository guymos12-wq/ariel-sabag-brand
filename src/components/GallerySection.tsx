import { useInView } from "@/hooks/useInView";
import haircut1 from "@/assets/haircut-1.png";
import haircut2 from "@/assets/haircut-2.png";
import haircut3 from "@/assets/haircut-3.png";
import haircut4 from "@/assets/haircut-4.png";
import haircut5 from "@/assets/haircut-5.png";
import haircut6 from "@/assets/haircut-6.png";

const haircuts = [
  { src: haircut1, alt: "תספורת לקוח מרוצה 1" },
  { src: haircut2, alt: "תספורת לקוח מרוצה 2" },
  { src: haircut3, alt: "תספורת לקוח מרוצה 3" },
  { src: haircut4, alt: "תספורת לקוח מרוצה 4" },
  { src: haircut5, alt: "תספורת לקוח מרוצה 5" },
  { src: haircut6, alt: "תספורת לקוח מרוצה 6" },
];

const GallerySection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="gallery" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto">
        <div className={`text-center mb-12 ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <p className="text-sm tracking-[0.3em] text-primary font-body mb-4">גלריה</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            לקוחות <span className="gold-gradient-text">מרוצים</span>
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-foreground/70 max-w-xl mx-auto">
            דוגמאות מעבודות אחרונות – תספורות מדויקות, פיידים חדים וסטיילינג מושלם
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {haircuts.map((item, i) => (
            <div
              key={i}
              className={`group overflow-hidden border border-border bg-background aspect-square ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

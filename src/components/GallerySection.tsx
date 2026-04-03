import { Instagram } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const INSTAGRAM_URL = "https://www.instagram.com/a_sabag_barbershop/";

const GallerySection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="gallery" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Gallery</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Follow on <span className="gold-gradient-text">Instagram</span>
        </h2>
        <div className="gold-line mx-auto mb-8" />
        <p className="text-foreground/60 mb-10 max-w-lg mx-auto">
          Check out the latest cuts and styles. Follow{" "}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            @a_sabag_barbershop
          </a>{" "}
          for daily inspiration.
        </p>

        <div className={`max-w-3xl mx-auto ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <div className="bg-card border border-border p-8 md:p-12 flex flex-col items-center gap-6">
            <Instagram className="w-16 h-16 text-primary" />
            <p className="text-foreground/70 text-lg">View the latest work on Instagram</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-widest bg-primary text-primary-foreground hover:brightness-110 hover:scale-105 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Visit Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

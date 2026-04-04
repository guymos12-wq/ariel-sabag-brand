import { Instagram } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { INSTAGRAM_URL, openExternalLink } from "@/lib/site-links";

const GallerySection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="gallery" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto text-center">
        <p className="text-sm tracking-[0.3em] text-primary font-body mb-4">גלריה</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          עקבו אחרינו <span className="gold-gradient-text">באינסטגרם</span>
        </h2>
        <div className="gold-line mx-auto mb-8" />
        <p className="text-foreground/60 mb-10 max-w-lg mx-auto">
          צפו בתספורות והסגנונות האחרונים. עקבו אחרי{" "}
          <button onClick={() => openExternalLink(INSTAGRAM_URL)} className="text-primary hover:underline bg-transparent border-none cursor-pointer p-0 font-inherit text-inherit">
            @a_sabag_barbershop
          </button>{" "}
          להשראה יומית.
        </p>

        <div className={`max-w-3xl mx-auto ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <div className="bg-card border border-border p-8 md:p-12 flex flex-col items-center gap-6">
            <Instagram className="w-16 h-16 text-primary" />
            <p className="text-foreground/70 text-lg">צפו בעבודות האחרונות באינסטגרם</p>
            <button
              onClick={() => openExternalLink(INSTAGRAM_URL)}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-widest bg-primary text-primary-foreground hover:brightness-110 hover:scale-105 transition-all duration-300 border-none cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              לאינסטגרם
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

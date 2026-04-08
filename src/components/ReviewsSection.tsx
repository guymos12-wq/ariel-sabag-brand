import { useState } from "react";
import { Star, Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ReviewsSection = () => {
  const { ref, inView } = useInView();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSubmitted(true);
    setName("");
    setText("");
    setRating(5);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reviews" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto text-center max-w-2xl">
        <p className="text-sm tracking-[0.3em] text-primary font-body mb-4">ביקורות</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          השאירו <span className="gold-gradient-text">ביקורת</span>
        </h2>
        <div className="gold-line mx-auto mb-6" />
        <p className="text-foreground/60 mb-10">
          הסתפרת בעבר אצל סבג? נשמח אם תשאיר תגובה! ✂️
        </p>

        <div className={`bg-card border border-border p-8 text-right ${inView ? "animate-fade-in" : "opacity-0"}`}>
          {submitted ? (
            <div className="py-8 text-center">
              <p className="text-primary text-xl font-heading font-bold mb-2">תודה רבה! 🙏</p>
              <p className="text-foreground/60">הביקורת שלך התקבלה בהצלחה.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-foreground/70 mb-2">שם</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="השם שלך"
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-right text-sm focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-foreground/70 mb-2">דירוג</label>
                <div className="flex gap-1 justify-end">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="bg-transparent border-none cursor-pointer p-1"
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          star <= (hoverRating || rating)
                            ? "fill-primary text-primary"
                            : "text-border"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-foreground/70 mb-2">הביקורת שלך</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="ספרו על החוויה שלכם..."
                  rows={4}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-right text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-widest bg-primary text-primary-foreground hover:brightness-110 hover:scale-105 transition-all duration-300 border-none cursor-pointer mx-auto"
              >
                <Send className="w-4 h-4" />
                שלח ביקורת
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

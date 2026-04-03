import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const BOOKING_URL = "https://l.instagram.com/?u=https%3A%2F%2Fcalendar.app.google%2Fv6WZoeHaFuPQ1jsN7%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnxs7JORNFwg6I_KlbMMQsCRKwe6ipeWlvf7KziEDJtkKY7EJhP5rMV7Z6kes_aem_-q2Yn2Hvw7F6BHWjrZLCWQ&e=AT4JC79pbocBNIWEVXr_e0hewO7PPlr8UaNNspXzpGKR55MFbEq8E58DwfRAITb-VNahe36RkK92oPzMx2iHaGBoLRN_eLmJmbFfwYxlNXf_2fYR8U2cY-YS3w";

const navLinks = [
  { label: "בית", href: "#home" },
  { label: "אודות", href: "#about" },
  { label: "שירותים", href: "#services" },
  { label: "גלריה", href: "#gallery" },
  { label: "המלצות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-heading text-xl md:text-2xl tracking-wider gold-gradient-text">
          אריאל סבג
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body tracking-wide text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 px-6 py-2.5 text-sm font-semibold tracking-wide bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200"
          >
            קבע תור
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-foreground"
          aria-label="תפריט"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-body tracking-wide text-foreground/70 hover:text-primary transition-colors py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 text-sm font-semibold tracking-wide bg-primary text-primary-foreground text-center"
            >
              קבע תור
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

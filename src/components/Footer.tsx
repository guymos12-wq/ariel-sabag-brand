import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/a_sabag_barbershop/";
const BOOKING_URL = "https://l.instagram.com/?u=https%3A%2F%2Fcalendar.app.google%2Fv6WZoeHaFuPQ1jsN7%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnxs7JORNFwg6I_KlbMMQsCRKwe6ipeWlvf7KziEDJtkKY7EJhP5rMV7Z6kes_aem_-q2Yn2Hvw7F6BHWjrZLCWQ&e=AT4JC79pbocBNIWEVXr_e0hewO7PPlr8UaNNspXzpGKR55MFbEq8E58DwfRAITb-VNahe36RkK92oPzMx2iHaGBoLRN_eLmJmbFfwYxlNXf_2fYR8U2cY-YS3w";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#home" className="font-heading text-lg tracking-wider gold-gradient-text">
        אריאל סבג ברברשופ
      </a>

      <div className="flex items-center gap-6">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 hover:text-primary transition-colors"
          aria-label="אינסטגרם"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-widest text-foreground/50 hover:text-primary transition-colors"
        >
          קבע תור
        </a>
      </div>

      <p className="text-xs text-foreground/30">
        © {new Date().getFullYear()} אריאל סבג ברברשופ. כל הזכויות שמורות.
      </p>
    </div>
  </footer>
);

export default Footer;

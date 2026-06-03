import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export const AssessmentMobileCta = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`md:hidden fixed bottom-4 inset-x-4 z-40 transition-all ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="https://www.smartmfgindia.com/Assesment.aspx"
        className="btn-primary w-full shadow-lg"
      >
        Start Assessment <ArrowRight className="!h-4 !w-4" />
      </a>
    </div>
  );
};

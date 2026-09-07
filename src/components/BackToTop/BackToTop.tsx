import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      id="backToTop"
      aria-label="Voltar ao topo"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-soul-cyan/40 bg-soul-800 text-lg text-soul-cyan shadow-[0_0_16px_rgba(34,211,238,0.45)] transition-all duration-300 hover:scale-110 ${
        visible ? "visible opacity-100" : "invisible opacity-0 translate-y-2"
      }`}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

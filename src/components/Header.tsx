import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Início" },
    { to: "/grupos", label: "Frota" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      {/* Desktop — right side vertical nav */}
      <nav className="hidden md:flex fixed top-0 right-0 z-50 h-screen w-14 flex-col items-center justify-center gap-6 bg-card/80 backdrop-blur-sm border-l border-border">
        <Link to="/" className="absolute top-5 text-accent text-sm" style={{ fontFamily: 'Lora, serif', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Botânica
        </Link>
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`text-[11px] tracking-wider transition-colors duration-200 ${
              location.pathname === l.to
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Mobile header */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-card/90 backdrop-blur-sm border-b border-border">
        <div className="px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-accent text-lg italic" style={{ fontFamily: 'Lora, serif' }}>Botânica</Link>
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[57px] left-0 right-0 z-40 overflow-hidden bg-card/95 backdrop-blur-sm border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm py-2 ${
                    location.pathname === l.to ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Leaf anchor button */}
      <a
        href="#cotacao"
        className="fixed bottom-1/2 translate-y-1/2 right-20 md:right-20 z-50 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 leaf-float"
        aria-label="Cotação"
      >
        <Leaf size={18} className="text-primary-foreground" />
      </a>
    </>
  );
};

import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border py-16 mr-0 md:mr-14">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Leaf size={18} className="text-primary" />
            <p className="text-foreground text-xl italic" style={{ fontFamily: 'Lora, serif' }}>Botânica</p>
          </div>
          <p className="text-sm text-muted-foreground">Viagens tranquilas, fragrâncias personalizadas</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Navegação</p>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Início" },
              { to: "/grupos", label: "Frota" },
              { to: "/sobre", label: "Sobre" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Contato</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>hello@botanicatransfer.com.br</span>
            <span>+55 11 99999-9999</span>
          </div>
        </div>
      </div>

      <div className="botanical-line mt-12 mb-6" />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Botânica Transfer — Todos os direitos reservados
      </p>
    </div>
  </footer>
);

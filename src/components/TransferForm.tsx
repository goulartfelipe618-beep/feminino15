import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Solicitação enviada", description: "Entraremos em contato em breve." });
    setStep(1);
  };

  const labelClass = "text-xs text-muted-foreground mb-1.5 block font-medium";

  return (
    <div className="clean-card p-8 md:p-10">
      <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Cotação</p>
      <h3 className="text-2xl text-foreground mb-6 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
        Solicitar Transfer
      </h3>

      <div className="flex gap-0 mb-6 border border-border rounded-md overflow-hidden">
        {([["ida", "Ida"], ["ida-volta", "Ida/Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-2.5 text-xs font-medium transition-all ${
                tripType === val
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-3 gap-3">
              <div><label className={labelClass}>Passageiros</label><input type="number" min={1} placeholder="Nº" required className="clean-input" /></div>
              <div><label className={labelClass}>Data</label><input type="date" required className="clean-input" /></div>
              <div><label className={labelClass}>Hora</label><input type="time" required className="clean-input" /></div>
            </div>
            {tripType === "hora" && (
              <div><label className={labelClass}>Horas</label><input type="number" min={1} placeholder="Qtd" required className="clean-input" /></div>
            )}
            <div><label className={labelClass}>Embarque</label><input placeholder="Endereço de origem" required className="clean-input" /></div>
            <div><label className={labelClass}>Destino</label><input placeholder="Endereço de destino" required className="clean-input" /></div>
            {tripType === "ida-volta" && (
              <div className="grid grid-cols-2 gap-3">
                <div><label className={labelClass}>Data Retorno</label><input type="date" className="clean-input" /></div>
                <div><label className={labelClass}>Hora Retorno</label><input type="time" className="clean-input" /></div>
              </div>
            )}
            <div><label className={labelClass}>Observações</label><textarea placeholder="Instruções especiais" rows={2} className="clean-input resize-none" /></div>
            <div className="pt-1"><button type="button" onClick={() => setStep(2)} className="clean-btn w-full">Próximo →</button></div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelClass}>Nome</label><input placeholder="Nome completo" required className="clean-input" /></div>
              <div><label className={labelClass}>E-mail</label><input type="email" placeholder="seu@email.com" required className="clean-input" /></div>
              <div><label className={labelClass}>WhatsApp</label><input placeholder="(00) 00000-0000" required className="clean-input" /></div>
              <div><label className={labelClass}>Empresa</label><input placeholder="Opcional" className="clean-input" /></div>
            </div>
            <div className="pt-1 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="clean-btn-outline flex-1">← Voltar</button>
              <button type="submit" className="clean-btn flex-1">Confirmar</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

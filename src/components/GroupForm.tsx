import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Solicitação registrada", description: "Nossa equipe entrará em contato." });
    setStep(1);
  };

  const labelClass = "text-xs text-muted-foreground mb-1.5 block font-medium";

  return (
    <div className="botanical-card p-8 md:p-10">
      <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Frota</p>
      <h3 className="text-2xl text-foreground mb-6 italic" style={{ fontFamily: 'Lora, serif' }}>
        Solicitar <span className="text-accent">Frota</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelClass}>Veículo</label>
                <select className="botanical-input">
                  <option value="">Selecione</option>
                  <option value="sedan">Sedan Premium</option>
                  <option value="suv">SUV Executivo</option>
                  <option value="van">Van VIP</option>
                  <option value="micro">Micro-ônibus</option>
                </select>
              </div>
              <div><label className={labelClass}>Passageiros</label><input type="number" min={1} placeholder="Nº" required className="botanical-input" /></div>
            </div>
            <div><label className={labelClass}>Embarque</label><input placeholder="Endereço" required className="botanical-input" /></div>
            <div><label className={labelClass}>Destino</label><input placeholder="Endereço" required className="botanical-input" /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelClass}>Data/Hora Ida</label><input type="datetime-local" required className="botanical-input" /></div>
              <div><label className={labelClass}>Data/Hora Retorno</label><input type="datetime-local" className="botanical-input" /></div>
            </div>
            <div><label className={labelClass}>Fragrância preferida</label>
              <select className="botanical-input">
                <option value="">Escolher aroma</option>
                <option value="eucalipto">Eucalipto</option>
                <option value="lavanda">Lavanda</option>
                <option value="bergamota">Bergamota</option>
                <option value="sem">Sem fragrância</option>
              </select>
            </div>
            <div><label className={labelClass}>Detalhes</label><textarea placeholder="Detalhes do evento, mimos especiais..." rows={3} className="botanical-input resize-none" /></div>
            <div className="pt-1"><button type="button" onClick={() => setStep(2)} className="botanical-btn w-full">Próximo →</button></div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div><label className={labelClass}>Nome</label><input placeholder="Nome" required className="botanical-input" /></div>
              <div><label className={labelClass}>E-mail</label><input type="email" placeholder="email" required className="botanical-input" /></div>
              <div><label className={labelClass}>WhatsApp</label><input placeholder="(00) 00000-0000" required className="botanical-input" /></div>
              <div><label className={labelClass}>Empresa</label><input placeholder="Opcional" className="botanical-input" /></div>
            </div>
            <div className="pt-1 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="botanical-btn-outline flex-1">← Voltar</button>
              <button type="submit" className="botanical-btn flex-1">Solicitar</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

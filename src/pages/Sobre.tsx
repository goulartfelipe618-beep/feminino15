import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Wind, Sparkles, Shield, Heart, Award } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background mr-0 md:mr-14">
      <Header />

      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-2">
              <Leaf size={14} className="text-primary" />
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Sobre Nós</p>
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-md italic" style={{ fontFamily: 'Lora, serif' }}>
              Cuidado é <span className="text-primary">essência</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="botanical-card p-8 md:p-10">
              <div className="space-y-5">
                <p className="text-muted-foreground leading-[1.8]">
                  A Botânica Transfer nasceu da crença de que uma viagem executiva pode ser uma experiência sensorial. Fragrâncias cuidadosamente selecionadas, mimos a bordo e um cuidado que vai muito além do volante.
                </p>
                <p className="text-muted-foreground leading-[1.8]">
                  Cada veículo é preparado como um refúgio: aromas naturais, temperatura ideal, toalhas frescas e água aromatizada. Porque você merece tranquilidade em cada quilômetro.
                </p>
                <p className="text-muted-foreground leading-[1.8]">
                  De reuniões importantes a momentos de autocuidado — transformamos cada trajeto em uma pausa para o bem-estar.
                </p>
              </div>

              <div className="botanical-line my-8" />

              <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
                {[
                  { icon: Leaf, label: "Natural" },
                  { icon: Wind, label: "Aromas" },
                  { icon: Sparkles, label: "Mimos" },
                  { icon: Shield, label: "Segurança" },
                  { icon: Heart, label: "Cuidado" },
                  { icon: Award, label: "Excelência" },
                ].map((d) => (
                  <div key={d.label} className="text-center">
                    <d.icon size={20} className="text-primary mx-auto mb-2" strokeWidth={1.5} />
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;

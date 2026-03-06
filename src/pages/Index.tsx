import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import { Leaf, Wind, Sparkles, Shield, ArrowRight } from "lucide-react";
import botanicalSedan from "@/assets/botanical-sedan.jpg";
import botanicalInterior from "@/assets/botanical-interior.jpg";
import botanicalFleet from "@/assets/botanical-fleet.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background mr-0 md:mr-14">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={botanicalSedan} alt="Sedan em jardim botânico" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-6"
        >
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={14} className="text-primary" />
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Transfer Executivo</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-5 text-foreground italic" style={{ fontFamily: 'Lora, serif' }}>
              Viagens<br />
              tranquilas,<br />
              <span className="text-primary">naturalmente</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Fragrâncias personalizadas, conforto premium e uma experiência de cuidado em cada trajeto.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cotacao" className="botanical-btn inline-flex items-center gap-2">Solicitar Cotação <ArrowRight size={14} /></a>
              <a href="#frota" className="botanical-btn-outline inline-block">Conhecer Frota</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {[
              { icon: Wind, title: "Aromaterapia", desc: "Escolha entre eucalipto, lavanda ou bergamota para perfumar seu trajeto com tranquilidade." },
              { icon: Sparkles, title: "Mimos a Bordo", desc: "Água aromatizada, toalhas frescas e snacks selecionados para você se sentir especial." },
              { icon: Shield, title: "Segurança Discreta", desc: "Motoristas treinados, veículos rastreados e protocolos de conforto e proteção." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="botanical-card p-7"
              >
                <f.icon size={24} className="text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg text-foreground mb-2 italic" style={{ fontFamily: 'Lora, serif' }}>{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet grid */}
      <section id="frota" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-2">
            <Leaf size={14} className="text-primary" />
            <p className="text-xs tracking-widest uppercase text-muted-foreground">Nossa Frota</p>
          </div>
          <h2 className="text-3xl text-foreground mb-10 italic" style={{ fontFamily: 'Lora, serif' }}>
            Veículos com <span className="text-accent">alma</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
            {[
              { img: botanicalSedan, title: "Sedan Premium", desc: "Conforto e discrição com aromas naturais selecionados." },
              { img: botanicalInterior, title: "Interior Botânico", desc: "Cada detalhe pensado para sua tranquilidade e bem-estar." },
              { img: botanicalFleet, title: "Frota Coordenada", desc: "Logística impecável com fragrâncias para eventos e grupos." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="botanical-card overflow-hidden"
              >
                <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-5">
                  <h3 className="text-base text-foreground mb-1 italic" style={{ fontFamily: 'Lora, serif' }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="cotacao" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

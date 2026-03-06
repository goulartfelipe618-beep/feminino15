import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import { Users, Leaf } from "lucide-react";
import botanicalFleet from "@/assets/botanical-fleet.jpg";
import botanicalSedan from "@/assets/botanical-sedan.jpg";
import botanicalInterior from "@/assets/botanical-interior.jpg";

const grid = [
  { img: botanicalSedan, title: "Sedan Premium", pax: "1-3 passageiros" },
  { img: botanicalInterior, title: "SUV Executivo", pax: "1-5 passageiros" },
  { img: botanicalFleet, title: "Van VIP", pax: "6-14 passageiros" },
];

const Grupos = () => {
  return (
    <div className="min-h-screen bg-background mr-0 md:mr-14">
      <Header />

      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-2">
              <Leaf size={14} className="text-primary" />
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Frota</p>
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-md italic" style={{ fontFamily: 'Lora, serif' }}>
              Opções para cada <span className="text-accent">ocasião</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
            {grid.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="botanical-card overflow-hidden"
              >
                <img src={v.img} alt={v.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-5">
                  <h3 className="text-base text-foreground mb-1 italic" style={{ fontFamily: 'Lora, serif' }}>{v.title}</h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users size={14} />
                    <span className="text-sm">{v.pax}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cotacao" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;

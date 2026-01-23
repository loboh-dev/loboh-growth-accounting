import { motion } from "framer-motion";
import { Crosshair, BarChart3, Monitor, GraduationCap, Heart, ArrowRight, ArrowDown, Check, AlertCircle } from "lucide-react";

const pillars = [
  {
    number: 1,
    icon: Crosshair,
    title: "Oferta",
    shortDesc: "ICP, personas e posicionamento",
    includes: ["ICP", "Personas", "Mercado", "Posicionamento"],
  },
  {
    number: 2,
    icon: BarChart3,
    title: "Gestão",
    shortDesc: "Metas, KPIs e rituais",
    includes: ["Metas", "KPIs", "Estrutura do time", "Rituais"],
  },
  {
    number: 3,
    icon: Monitor,
    title: "Tecnologia",
    shortDesc: "Stack, automações e BI",
    includes: ["Automação", "BI", "Stack Comercial", "Integrações"],
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "Capacitação",
    shortDesc: "Treinamento e processos",
    includes: ["Treinamento", "Processos", "Conhecimento", "PDI"],
  },
  {
    number: 5,
    icon: Heart,
    title: "Cultura",
    shortDesc: "Engajamento e retenção",
    includes: ["Cultura", "Carreira", "Remuneração", "Incentivos"],
  },
];

const finalResults = [
  "Execução consistente",
  "Máquina de vendas sustentável",
  "Crescimento previsível",
];

export default function MethodologyInfographic() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header - Storytelling conectado ao problema */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Solução
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              Gestão comercial não é <span className="text-destructive">uma coisa só</span>.
            </h2>
          </motion.div>

          {/* Problema - Muitos pratinhos */}
          <motion.div
            className="mb-12 p-6 md:p-8 rounded-2xl bg-muted/30 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  São <span className="font-bold">5 áreas críticas</span> que precisam rodar ao mesmo tempo.
                  <br className="hidden md:block" />
                  <span className="text-muted-foreground">Cada uma com dezenas de ações simultâneas. Se uma falha, a máquina trava.</span>
                </p>
              </div>
            </div>

            {/* Pillars Grid - As caixinhas */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  className="p-4 rounded-xl bg-card border border-border shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-muted text-muted-foreground">
                      <pillar.icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-bold text-foreground text-sm">{pillar.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {pillar.includes.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-0.5 rounded-full bg-muted/50 text-[10px] text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                    {pillar.includes.length > 3 && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-muted/50 text-[10px] text-muted-foreground">
                        +{pillar.includes.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-muted-foreground mt-6 text-sm md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-semibold text-foreground">Não é humanamente possível</span> o dono tocar tudo isso sozinho.
            </motion.p>
          </motion.div>

          {/* Arrow transition */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col items-center gap-2">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Por isso existe a Loboh
              </span>
            </div>
          </motion.div>

          {/* Solução - Loboh assume */}
          <motion.div
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                <span className="text-primary">Gestão Comercial como Serviço</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Entramos na operação e cuidamos de <span className="font-semibold text-foreground">todos os pratinhos</span> para que nenhum caia.
                <br />
                Você foca no estratégico. A gente executa o operacional.
              </p>
            </div>

            {/* Visual dos 5 pilares sendo cobertos */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  className="relative p-4 rounded-xl bg-card border-2 border-primary/50 shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {/* Check badge */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                      <pillar.icon className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <span className="font-bold text-foreground text-sm">{pillar.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{pillar.shortDesc}</p>
                </motion.div>
              ))}
            </div>

            {/* Resultado Final */}
            <div className="pt-6 border-t border-primary/20">
              <p className="text-center text-sm font-semibold text-muted-foreground mb-4">RESULTADO:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {finalResults.map((result, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{result}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

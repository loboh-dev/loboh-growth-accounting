import { motion } from "framer-motion";
import { Crosshair, BarChart3, Monitor, GraduationCap, Heart, ArrowRight, Circle, Check } from "lucide-react";

const pillars = [
  {
    number: 1,
    icon: Crosshair,
    title: "Oferta",
    description: "Definimos o ICP, personas e posicionamento para direcionar cada real investido em aquisição.",
    includes: ["ICP", "Personas", "Mercado", "Posicionamento"],
    results: ["Menor CAC", "Ciclo de vendas mais curto", "Maior taxa de conversão"],
  },
  {
    number: 2,
    icon: BarChart3,
    title: "Gestão",
    description: "Metas claras, KPIs confiáveis e rituais de acompanhamento transformam intuição em decisões baseadas em dados.",
    includes: ["Metas", "KPIs", "Estrutura do time", "Rituais de gestão"],
    results: ["Previsibilidade de receita", "Redução de riscos operacionais", "Ritmo constante de vendas"],
  },
  {
    number: 3,
    icon: Monitor,
    title: "Tecnologia",
    description: "Stack comercial integrado, automações e BI para escalar sem aumentar custo proporcional.",
    includes: ["Automação", "Business Intelligence", "Stack Comercial", "Integrações"],
    results: ["Mais produtividade por vendedor", "Visibilidade total do pipeline"],
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "Capacitação",
    description: "Treinamentos, processos documentados e gestão do conhecimento garantem execução consistente.",
    includes: ["Treinamento", "Gestão de processos", "Gestão do conhecimento", "PDI"],
    results: ["Menor dependência de talentos individuais", "Ramp-up acelerado"],
  },
  {
    number: 5,
    icon: Heart,
    title: "Cultura",
    description: "Cultura de vendas, plano de carreira e remuneração variável criam engajamento sustentável.",
    includes: ["Cultura de vendas", "Plano de carreira", "Remuneração variável", "Incentivos"],
    results: ["Menor turnover", "Maior retenção de talentos", "Performance contínua"],
  },
];

const finalResults = [
  "Execução consistente",
  "Máquina de vendas sustentável",
  "Crescimento previsível",
];

export default function MethodologyInfographic() {
  const renderPillarCard = (pillar: typeof pillars[0], index: number) => (
    <motion.div
      key={pillar.number}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-full p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
        {/* Pillar Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-primary text-primary">
            <pillar.icon className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-primary/10 text-primary border border-primary/30">
              {pillar.number}
            </span>
            <h3 className="text-lg font-bold text-foreground">
              {pillar.title}
            </h3>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {pillar.includes.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border text-xs font-medium text-muted-foreground"
            >
              <Circle className="w-2 h-2 fill-primary text-primary" />
              {item}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {pillar.description}
        </p>

        {/* Results */}
        <div className="pt-3 border-t border-border/50">
          <span className="text-sm font-bold text-foreground block mb-2">Resultado:</span>
          <div className="space-y-1.5">
            {pillar.results.map((result, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                <span className="text-sm text-muted-foreground">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Metodologia Loboh
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              A jornada para construir uma máquina de vendas previsível
            </h2>
          </motion.div>

          {/* Pillars Grid */}
          <div className="space-y-6">
            {/* First Row - 3 pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.slice(0, 3).map((pillar, index) => renderPillarCard(pillar, index))}
            </div>

            {/* Second Row - 2 pillars centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {pillars.slice(3, 5).map((pillar, index) => renderPillarCard(pillar, index + 3))}
            </div>
          </div>

          {/* Final Results */}
          <motion.div
            className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-foreground text-center mb-6">
              Resultado Final
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              {finalResults.map((result, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

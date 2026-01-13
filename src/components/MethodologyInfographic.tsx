import { motion } from "framer-motion";
import { Crosshair, BarChart3, Monitor, GraduationCap, Heart, RotateCcw, Users, Target, MapPin, MessageSquare, Flag, Activity, UsersRound, CalendarCheck, Cpu, LineChart, Layers, Link2, BookOpen, FileText, Brain, TrendingUp, Trophy, DollarSign, Gift, ArrowRight } from "lucide-react";

const pillars = [
  {
    number: 1,
    icon: Crosshair,
    title: "Oferta",
    subtitle: "O ponto de partida",
    highlight: "Nada funciona sem clareza de onde atacar.",
    description: "Definimos quem é o cliente certo, em qual mercado competir e qual posicionamento sustenta toda a estratégia comercial.",
    note: "Este pilar alimenta todos os outros.",
    includes: [
      { icon: Users, label: "ICP" },
      { icon: Target, label: "Personas" },
      { icon: MapPin, label: "Mercado" },
      { icon: MessageSquare, label: "Posicionamento" },
    ],
  },
  {
    number: 2,
    icon: BarChart3,
    title: "Gestão",
    subtitle: "Direção e previsibilidade",
    highlight: "Com clareza de oferta, damos direção ao time.",
    description: "Transformamos a estratégia em metas, indicadores e rituais que orientam a execução diária e permitem decisões baseadas em dados.",
    note: "Depende da Oferta para ser precisa.",
    includes: [
      { icon: Flag, label: "Metas" },
      { icon: Activity, label: "KPIs" },
      { icon: UsersRound, label: "Estrutura do time" },
      { icon: CalendarCheck, label: "Rituais de gestão" },
    ],
  },
  {
    number: 3,
    icon: Monitor,
    title: "Tecnologia",
    subtitle: "Escala e visibilidade",
    highlight: "Execução sem tecnologia não escala.",
    description: "Implementamos a tecnologia certa para registrar dados, automatizar tarefas e dar visibilidade real da operação comercial.",
    note: "Sustenta a Gestão e viabiliza escala.",
    includes: [
      { icon: Cpu, label: "Automação" },
      { icon: LineChart, label: "Business Intelligence" },
      { icon: Layers, label: "Stack Comercial" },
      { icon: Link2, label: "Integrações" },
    ],
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "Capacitação",
    subtitle: "Execução com qualidade",
    highlight: "Processos só funcionam com pessoas capacitadas.",
    description: "Capacitamos o time para executar processos com consistência, domínio técnico e evolução contínua.",
    note: "Depende de Gestão e Tecnologia para ser eficaz.",
    includes: [
      { icon: BookOpen, label: "Treinamento" },
      { icon: FileText, label: "Gestão de processos" },
      { icon: Brain, label: "Gestão do conhecimento" },
      { icon: TrendingUp, label: "PDI" },
    ],
  },
  {
    number: 5,
    icon: Heart,
    title: "Cultura",
    subtitle: "Sustentação no longo prazo",
    highlight: "Performance só se sustenta com cultura.",
    description: "Criamos um ambiente que reforça comportamento, ritmo e responsabilidade, sustentando resultados no longo prazo.",
    note: "Consolida e retroalimenta todos os pilares.",
    includes: [
      { icon: Trophy, label: "Cultura de vendas" },
      { icon: TrendingUp, label: "Plano de carreira" },
      { icon: DollarSign, label: "Remuneração variável" },
      { icon: Gift, label: "Incentivos" },
    ],
  },
];

const results = [
  "Crescimento previsível",
  "Execução consistente",
  "Máquina de vendas sustentável",
];

export default function MethodologyInfographic() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              A jornada para construir uma máquina de vendas previsível
            </h2>
          </motion.div>

          {/* Pillars Grid */}
          <div className="space-y-6">
            {/* First Row - 3 pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.slice(0, 3).map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-full p-5 rounded-2xl bg-primary/5 border border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Pillar Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-primary-foreground">
                        <pillar.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-primary text-primary-foreground">
                            {pillar.number}
                          </span>
                          <h3 className="text-lg font-bold text-foreground">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-sm text-primary font-medium">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Highlight */}
                    <p className="text-muted-foreground font-medium mb-3 text-sm">
                      {pillar.highlight}
                    </p>

                    {/* Includes */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {pillar.includes.map((item, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                        >
                          <item.icon className="w-3 h-3" />
                          {item.label}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-2">
                      {pillar.description}
                    </p>

                    {/* Note */}
                    <p className="text-xs text-primary/80 italic">
                      {pillar.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - 2 pillars centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {pillars.slice(3, 5).map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                >
                  <div className="h-full p-5 rounded-2xl bg-primary/5 border border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Pillar Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-primary-foreground">
                        <pillar.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-primary text-primary-foreground">
                            {pillar.number}
                          </span>
                          <h3 className="text-lg font-bold text-foreground">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-sm text-primary font-medium">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Highlight */}
                    <p className="text-muted-foreground font-medium mb-3 text-sm">
                      {pillar.highlight}
                    </p>

                    {/* Includes */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {pillar.includes.map((item, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                        >
                          <item.icon className="w-3 h-3" />
                          {item.label}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-2">
                      {pillar.description}
                    </p>

                    {/* Note */}
                    <p className="text-xs text-primary/80 italic">
                      {pillar.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feedback Loop Arrow */}
            <motion.div
              className="flex justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <RotateCcw className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Cultura retroalimenta Oferta — evolução contínua
                </span>
              </div>
            </motion.div>
          </div>

          {/* Results */}
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
              {results.map((result, index) => (
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

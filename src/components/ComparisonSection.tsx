import { X, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  { 
    loser: { title: "Clubinhos de networking", desc: "Foco em status e ambiência. Ninguém bota a mão na massa por você." },
    winner: { title: "Go to Market estruturado", desc: "Processos definidos, indicadores confiáveis, execução disciplinada." }
  },
  { 
    loser: { title: "Promessa de automação mágica com IA", desc: "Sem processo, sem dados, sem gestão real. Não garante resultado." },
    winner: { title: "IA aplicada em processos validados", desc: "Tecnologia a serviço de uma operação que já funciona." }
  },
  { 
    loser: { title: "Cursinho gravado", desc: "Assiste uma vez, não aplica nada. Zero acompanhamento." },
    winner: { title: "Capacitação contínua + monitoramento", desc: "Treinamento aplicado na prática com acompanhamento semanal." }
  },
  { 
    loser: { title: "Mentoria de palco", desc: "Grupo lotado, templates genéricos, zero personalização." },
    winner: { title: "Serviços 100% personalizados", desc: "Construído no contexto da sua contabilidade. Nada de template." }
  },
  { 
    loser: { title: "Consultoria de projeto", desc: "Entrega um PDF bonito e desaparece. Você que se vire." },
    winner: { title: "Gestão Comercial com Loboh Sales Agile", desc: "Melhoria contínua baseada em dados, sprints e ajustes semanais." }
  },
];

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              Onde você está investindo?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              O mercado está cheio de atalhos e falsas promessas. Compare e decida.
            </p>
          </motion.div>

          {/* Tabela de confronto */}
          <div className="relative">
            {/* Headers fixos - Desktop */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_60px_1fr] gap-0 mb-2">
              <div className="bg-destructive text-destructive-foreground rounded-t-2xl py-4 px-6 text-center">
                <p className="font-bold uppercase tracking-wider text-sm" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  ❌ Modinha
                </p>
                <p className="text-xs opacity-80 mt-1">Caminho "fácil", resultado difícil</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-px h-full bg-border"></div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-t-2xl py-4 px-6 text-center">
                <p className="font-bold uppercase tracking-wider text-sm" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  ✓ Atemporal
                </p>
                <p className="text-xs opacity-80 mt-1">Esforço correto, resultado previsível</p>
              </div>
            </div>

            {/* Headers Mobile */}
            <div className="lg:hidden mb-6 space-y-3">
              <motion.div 
                className="bg-destructive text-destructive-foreground rounded-xl py-3 px-4 text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="font-bold uppercase tracking-wider text-sm" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  ❌ Modinha — Caminho "fácil"
                </p>
              </motion.div>
              <div className="text-center text-muted-foreground text-sm font-medium">VS</div>
              <motion.div 
                className="bg-primary text-primary-foreground rounded-xl py-3 px-4 text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="font-bold uppercase tracking-wider text-sm" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  ✓ Atemporal — Resultado previsível
                </p>
              </motion.div>
            </div>

            {/* Linhas de comparação */}
            <div className="space-y-0 lg:space-y-0">
              {comparisons.map((row, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Desktop - linha única */}
                  <div className="hidden lg:grid lg:grid-cols-[1fr_60px_1fr] gap-0 border-b border-border/50 last:border-b-0">
                    {/* Loser */}
                    <motion.div 
                      className="bg-destructive/5 p-5 flex items-start gap-4 border-l-4 border-l-destructive/30 hover:bg-destructive/10 transition-colors"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <X className="w-5 h-5 text-destructive" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-base">{row.loser.title}</p>
                        <p className="text-muted-foreground text-sm mt-1">{row.loser.desc}</p>
                      </div>
                    </motion.div>

                    {/* Seta central */}
                    <motion.div 
                      className="flex items-center justify-center bg-muted/30"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </motion.div>

                    {/* Winner */}
                    <motion.div 
                      className="bg-primary/5 p-5 flex items-start gap-4 border-r-4 border-r-primary/30 hover:bg-primary/10 transition-colors"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-base">{row.winner.title}</p>
                        <p className="text-muted-foreground text-sm mt-1">{row.winner.desc}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile - card de confronto */}
                  <div className="lg:hidden mb-4">
                    <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                      {/* Parte vermelha - problema */}
                      <motion.div 
                        className="bg-destructive/10 p-4 border-l-4 border-l-destructive"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                            <X className="w-4 h-4 text-destructive" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-sm">{row.loser.title}</p>
                            <p className="text-muted-foreground text-xs mt-0.5">{row.loser.desc}</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Divisor com seta */}
                      <motion.div 
                        className="flex items-center justify-center py-2 bg-muted/30 relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      >
                        <div className="absolute left-0 right-0 h-px bg-border top-1/2"></div>
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md z-10 rotate-90">
                          <ArrowRight className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </motion.div>

                      {/* Parte azul - solução */}
                      <motion.div 
                        className="bg-primary/10 p-4 border-l-4 border-l-primary"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-sm">{row.winner.title}</p>
                            <p className="text-muted-foreground text-xs mt-0.5">{row.winner.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rodapé Desktop */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_60px_1fr] gap-0 mt-0">
              <motion.div 
                className="bg-destructive/20 rounded-b-2xl p-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <p className="text-destructive font-semibold italic">"Boa sorte com a execução!"</p>
              </motion.div>
              <div></div>
              <motion.div 
                className="bg-primary/20 rounded-b-2xl p-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <p className="text-primary font-semibold italic">"A gente executa junto com você."</p>
              </motion.div>
            </div>
          </div>

          {/* Conclusão - Duas Diferenças */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                Duas diferenças entre <span className="text-muted-foreground">comprar informação</span> e <span className="text-primary">contratar execução</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Diferença 1 - O Resultado */}
              <motion.div
                className="relative p-6 rounded-2xl bg-card border-2 border-primary/30 overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                  <span className="text-lg font-bold text-primary-foreground" style={{ fontFamily: 'Oxanium, sans-serif' }}>1</span>
                </div>
                
                <div className="relative z-10 pt-3">
                  <h4 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                    O Resultado
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                      <div className="w-7 h-7 rounded-md bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wider">Informação</p>
                        <p className="text-foreground/70 text-sm">Você sabe mais. Talvez.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/30">
                      <div className="w-7 h-7 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-primary text-xs uppercase tracking-wider">Execução</p>
                        <p className="text-foreground font-medium text-sm">Você vende mais. Sempre.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Diferença 2 - O Processo */}
              <motion.div
                className="relative p-6 rounded-2xl bg-card border-2 border-accent/30 overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30 z-10">
                  <span className="text-lg font-bold text-white" style={{ fontFamily: 'Oxanium, sans-serif' }}>2</span>
                </div>
                
                <div className="relative z-10 pt-3">
                  <h4 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                    O Processo
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                      <div className="w-7 h-7 rounded-md bg-destructive/20 flex items-center justify-center flex-shrink-0">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs uppercase tracking-wider">Informação</p>
                        <p className="text-foreground/70 text-sm">Você consome. E esquece.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/30">
                      <div className="w-7 h-7 rounded-md bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-accent text-xs uppercase tracking-wider">Execução</p>
                        <p className="text-foreground font-medium text-sm">Você se compromete. E transforma.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

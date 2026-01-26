import { motion } from "framer-motion";
import { Crosshair, BarChart3, Monitor, GraduationCap, Heart, ArrowDown, Check, X, BookOpen, Settings, Users, Repeat, Search, ClipboardList, Play, RefreshCw } from "lucide-react";
const pillars = [{
  number: 1,
  icon: Crosshair,
  title: "Oferta",
  includes: ["ICP", "Personas", "Mercado", "Posicionamento"]
}, {
  number: 2,
  icon: BarChart3,
  title: "Gestão",
  includes: ["Metas", "KPIs", "Estrutura do time", "Rituais"]
}, {
  number: 3,
  icon: Monitor,
  title: "Tecnologia",
  includes: ["Automação", "BI", "Stack Comercial", "Integrações"]
}, {
  number: 4,
  icon: GraduationCap,
  title: "Capacitação",
  includes: ["Treinamento", "Processos", "Conhecimento", "PDI"]
}, {
  number: 5,
  icon: Heart,
  title: "Cultura",
  includes: ["Cultura", "Carreira", "Remuneração", "Incentivos"]
}];
const implementationSteps = [{
  number: "1",
  icon: BookOpen,
  title: "Playbook",
  description: "Material completo com todas as técnicas e processos da jornada de vendas."
}, {
  number: "2",
  icon: Settings,
  title: "Ajuste de CRM",
  description: "Espelhamos seu processo ideal no CRM para gerar dados com visibilidade total."
}, {
  number: "3",
  icon: Users,
  title: "Treinamento",
  description: "Capacitamos seu time dos fundamentos de vendas ao processo contextual da empresa."
}, {
  number: "4",
  icon: Repeat,
  title: "Modelo de Gestão Ágil",
  description: "Implementamos um modelo simples que dá ritmo às operações e ações táticas."
}];
const agileCycle = [{
  icon: Search,
  title: "Análise",
  description: "Identificamos causas raízes e oportunidades de maior impacto."
}, {
  icon: ClipboardList,
  title: "Planejamento",
  description: "Priorizamos ações pelo maior resultado com menor esforço."
}, {
  icon: Play,
  title: "Execução",
  description: "Acompanhamos a execução mão na massa das ações planejadas."
}, {
  icon: RefreshCw,
  title: "Revisão",
  description: "Revisamos resultados e ajustamos o próximo ciclo."
}];
const finalResults = ["Execução consistente", "Máquina de vendas sustentável", "Crescimento previsível"];
export default function MethodologyInfographic() {
  return <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{
            fontFamily: 'Oxanium, sans-serif'
          }}>
              Sem atalhos. Sem fórmulas prontas. Sem hacks.
            </h2>
            <p className="text-xl text-primary font-semibold" style={{
            fontFamily: 'Oxanium, sans-serif'
          }}>
              Apenas execução disciplinada da Gestão Comercial.
            </p>
          </motion.div>

          {/* Setinha animada - O que a Loboh faz? */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                O que a Loboh faz?
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* 5 áreas críticas - todos os itens visíveis */}
          <motion.div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 mb-10" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <div className="text-center mb-8">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cuidamos de <span className="font-semibold text-primary">5 áreas críticas</span> que precisam funcionar em sincronia para que seu time comercial imprima um <span className="font-semibold text-foreground">ritmo constante e eficiente</span> de vendas.
              </p>
            </div>

            {/* Visual dos 5 pilares com TODOS os itens */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {pillars.map((pillar, index) => <motion.div key={pillar.number} className="relative p-4 rounded-xl bg-card border-2 border-primary/50 shadow-md" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3,
              delay: 0.1 + index * 0.08
            }}>
                  {/* Check badge */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                      <pillar.icon className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <span className="font-bold text-foreground text-sm" style={{ fontFamily: 'Oxanium, sans-serif' }}>{pillar.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {pillar.includes.map((item, i) => <span key={i} className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-[10px] text-primary font-medium">
                        {item}
                      </span>)}
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Fundo preto forte - CTA de ritmo - Copy melhorada */}
          <motion.div className="p-6 md:p-8 rounded-2xl bg-foreground mb-10" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.15
        }}>
            <div className="text-center">
              <p className="text-sm text-background/70 mb-2">
                São <span className="font-semibold text-background">múltiplas frentes estratégicas, táticas e operacionais</span> para 1 liderança gerir sozinha.
              </p>
              <p className="text-lg md:text-xl font-bold text-background" style={{
              fontFamily: 'Oxanium, sans-serif'
            }}>
                Você precisa de ritmo e método. <span className="text-primary">Nós orquestramos e executamos para você.</span>
              </p>
            </div>
          </motion.div>

          {/* Setinha animada - Como funciona? */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Como funciona?
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Implementação em 65 dias */}
          <motion.div className="mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{
              fontFamily: 'Oxanium, sans-serif'
            }}>
                <span className="text-primary">Go-To-Market Foundation</span>
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{
              fontFamily: 'Oxanium, sans-serif'
            }}>
                Implementação em 65 dias
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Implementamos uma base sólida de Processos, Stack de tecnologia, Trilha de Capacitação e Rituais de Acompanhamento de Metas e KPIs que prepara seu time para escala de verdade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {implementationSteps.map((step, index) => <motion.div key={step.number} className="relative p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3,
              delay: 0.1 + index * 0.1
            }}>
                  <div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-3 mb-3 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground" style={{
                  fontFamily: 'Oxanium, sans-serif'
                }}>
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Arrow transition */}
          <motion.div className="flex justify-center mb-12" initial={{
          opacity: 0,
          y: -10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }}>
            <div className="flex flex-col items-center gap-2">
              <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Depois, ciclos contínuos de melhoria
              </span>
            </div>
          </motion.div>

          {/* Gestão de Vendas Ágil - Fundo azul clarinho */}
          <motion.div className="p-6 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="text-center mb-10">
              <span className="text-primary font-bold text-3xl md:text-4xl tracking-wider" style={{
                fontFamily: 'Oxanium, sans-serif'
              }}>
                Loboh Sales Agile
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3" style={{
              fontFamily: 'Oxanium, sans-serif'
            }}>
                Gestão de Vendas Ágil
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Rodamos sprints que orquestram ações em <span className="font-semibold text-foreground">Oferta, Gestão, Tecnologia, Capacitação e Cultura</span>,
                <br className="hidden md:block" />
                sempre atacando o que gera <span className="font-semibold text-primary">maior resultado por esforço</span>.
              </p>
            </div>

            {/* Ciclo Visual Profissional */}
            <div className="relative mb-8">
              {/* Desktop: Ciclo elegante */}
              <div className="hidden md:block relative">
                <div className="flex justify-center">
                  <div className="relative w-[580px] h-[520px]">
                    
                    {/* Círculo elegante de fundo - contínuo, passando por trás das caixas */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 580 520">
                      <defs>
                        {/* Gradiente suave para o círculo */}
                        <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                        </linearGradient>
                        
                        {/* Glow suave */}
                        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Elipse principal - o ciclo contínuo */}
                      {/* Centro: 290, 260 | rx: 240 | ry: 200 */}
                      <motion.ellipse cx="290" cy="260" rx="240" ry="200" fill="none" stroke="url(#cycleGradient)" strokeWidth="2.5" filter="url(#softGlow)" initial={{
                      pathLength: 0,
                      opacity: 0
                    }} whileInView={{
                      pathLength: 1,
                      opacity: 1
                    }} viewport={{
                      once: true
                    }} transition={{
                      duration: 1.2,
                      ease: "easeOut"
                    }} />
                    </svg>
                    
                    {/* Centro do ciclo - SPRINT */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary flex items-center justify-center z-20 shadow-xl">
                      <div className="text-center">
                        <Repeat className="w-6 h-6 text-primary-foreground mx-auto mb-1" />
                        <span className="text-xs font-bold text-primary-foreground tracking-wide">SPRINT</span>
                      </div>
                    </div>
                    
                    {/* Análise - Topo */}
                    <motion.div className="absolute w-[180px] p-4 rounded-2xl bg-background border border-border/50 shadow-lg z-10" style={{
                    top: '10px',
                    left: '200px'
                  }} initial={{
                    opacity: 0,
                    y: -20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.5,
                    delay: 0.2
                  }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                          <Search className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h4 className="font-bold text-foreground text-sm" style={{
                        fontFamily: 'Oxanium, sans-serif'
                      }}>
                          Análise
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">Identificamos causas raízes e oportunidades de maior impacto.</p>
                    </motion.div>
                    
                    {/* Planejamento - Direita */}
                    <motion.div className="absolute w-[180px] p-4 rounded-2xl bg-background border border-border/50 shadow-lg z-10" style={{
                    top: '200px',
                    right: '0px'
                  }} initial={{
                    opacity: 0,
                    x: 20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.5,
                    delay: 0.4
                  }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                          <ClipboardList className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h4 className="font-bold text-foreground text-sm" style={{
                        fontFamily: 'Oxanium, sans-serif'
                      }}>
                          Planejamento
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">Priorizamos ações pelo maior resultado com menor esforço.</p>
                    </motion.div>
                    
                    {/* Execução - Baixo */}
                    <motion.div className="absolute w-[180px] p-4 rounded-2xl bg-background border border-border/50 shadow-lg z-10" style={{
                    bottom: '10px',
                    left: '200px'
                  }} initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.5,
                    delay: 0.6
                  }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                          <Play className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h4 className="font-bold text-foreground text-sm" style={{
                        fontFamily: 'Oxanium, sans-serif'
                      }}>
                          Execução
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">Acompanhamos a execução mão na massa das ações planejadas.</p>
                    </motion.div>
                    
                    {/* Revisão - Esquerda */}
                    <motion.div className="absolute w-[180px] p-4 rounded-2xl bg-background border border-border/50 shadow-lg z-10" style={{
                    top: '200px',
                    left: '0px'
                  }} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.5,
                    delay: 0.8
                  }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                          <RefreshCw className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h4 className="font-bold text-foreground text-sm" style={{
                        fontFamily: 'Oxanium, sans-serif'
                      }}>
                          Revisão
                        </h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">Revisamos resultados e ajustamos o próximo ciclo.</p>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Mobile: Grid com setas - ordem: Análise, Planejamento, Revisão, Execução */}
              <div className="md:hidden grid grid-cols-2 gap-3">
                {[agileCycle[0], agileCycle[1], agileCycle[3], agileCycle[2]].map((phase, index) => <motion.div key={phase.title} className="relative p-4 rounded-xl bg-background border border-background/20 shadow-md" initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.3,
                delay: 0.1 + index * 0.1
              }}>
                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {index === 0 ? 1 : index === 1 ? 2 : index === 2 ? 4 : 3}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <phase.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <h4 className="font-bold text-foreground text-sm" style={{
                    fontFamily: 'Oxanium, sans-serif'
                  }}>
                        {phase.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{phase.description}</p>
                  </motion.div>)}
              </div>
              
              {/* Mobile cycle indicator */}
              <motion.div className="md:hidden flex justify-center mt-4" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5
            }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary border border-primary">
                  <Repeat className="w-4 h-4 text-primary-foreground" />
                  <span className="text-sm font-medium text-primary-foreground">Ciclo contínuo</span>
                </div>
              </motion.div>
            </div>

            {/* Resultado Final */}
            <div className="pt-6 border-t border-primary/20">
              <p className="text-center text-sm font-semibold text-muted-foreground mb-4">RESULTADO:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {finalResults.map((result, index) => <motion.div key={index} className="flex items-center gap-2" initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.6 + index * 0.1
              }}>
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{result}</span>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
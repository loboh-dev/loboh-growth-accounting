import { motion } from "framer-motion";
import { 
  Eye, 
  Lightbulb, 
  Target, 
  Package, 
  AlertCircle, 
  Cloud, 
  Users, 
  Link2
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Eye,
    text: "Sofre com a ",
    bold: "falta de visibilidade",
    rest: " dos dados da operação de vendas."
  },
  {
    number: 2,
    icon: Lightbulb,
    text: "Decide ",
    bold: "no escuro",
    rest: " e não sabe qual deve ser o foco real das estratégias para o mercado."
  },
  {
    number: 3,
    icon: Target,
    text: "Não consegue ",
    bold: "definir metas realistas",
    rest: " nem identificar novas alavancas de crescimento."
  },
  {
    number: 4,
    icon: Package,
    text: "Não gera ",
    bold: "demanda suficiente",
    rest: " ou os leads entram, mas não viram vendas."
  },
  {
    number: 5,
    icon: AlertCircle,
    text: "As metas ",
    bold: "não são alcançadas",
    rest: ", comprometendo o planejamento de crescimento e escala."
  },
  {
    number: 6,
    icon: Cloud,
    text: "Falta ",
    bold: "direção clara",
    rest: " e capacitação para a liderança e o time comercial."
  },
  {
    number: 7,
    icon: Users,
    text: "A equipe de vendas fica ",
    bold: "desmotivada",
    rest: " por não ter capacitação e direcionamento."
  },
  {
    number: 8,
    icon: Link2,
    text: "O dono fica ",
    bold: "preso",
    rest: " na operação comercial e o crescimento depende sempre dele."
  }
];

const BottleneckInfographic = () => {
  return (
    <section id="problema" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Diagnóstico</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              Como o dono da contabilidade vira<br />
              o maior <span className="text-primary">gargalo do crescimento</span> do negócio
            </h2>
          </motion.div>

          {/* Zigzag Flow */}
          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              const isLast = index === steps.length - 1;
              const isSecondToLast = index === steps.length - 2;
              
              return (
                <div key={step.number} className="relative">
                  {/* Row Container */}
                  <motion.div
                    className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-0 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {/* Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                      <div className={`flex items-start gap-4 p-5 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 group ${
                        isLast 
                          ? 'bg-destructive/5 border-destructive/30 hover:border-destructive/50' 
                          : 'bg-card border-border hover:border-primary/30'
                      } ${isEven ? '' : 'lg:flex-row-reverse lg:text-left'}`}>
                        {/* Number Badge */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                          isLast 
                            ? 'bg-destructive text-destructive-foreground' 
                            : 'bg-muted-foreground text-background'
                        }`}>
                          {step.number}
                        </div>
                        
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isLast 
                            ? 'bg-destructive/10 group-hover:bg-destructive/20' 
                            : 'bg-background border border-border group-hover:bg-muted'
                        }`}>
                          <step.icon className={`w-6 h-6 ${isLast ? 'text-destructive' : 'text-foreground'}`} />
                        </div>
                        
                        {/* Text */}
                        <p className="text-foreground leading-relaxed flex-1 pt-1 text-left">
                          {step.text}
                          <span className={`font-bold ${isLast ? 'text-destructive' : 'text-foreground'}`}>{step.bold}</span>
                          {step.rest}
                        </p>
                      </div>
                    </div>

                    {/* Center connector area */}
                    <div className="hidden lg:flex w-2/12 justify-center items-center relative h-24">
                      {/* Horizontal line to center */}
                      <motion.div 
                        className={`absolute top-1/2 h-0.5 ${isLast ? 'bg-destructive' : 'bg-muted-foreground/50'}`}
                        style={{ 
                          width: '50%',
                          [isEven ? 'right' : 'left']: '50%'
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                      />
                      
                      {/* Center dot */}
                      <motion.div 
                        className={`w-3 h-3 rounded-full z-10 ${isLast ? 'bg-destructive' : 'bg-muted-foreground'}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4, duration: 0.2 }}
                      />
                    </div>

                    {/* Empty space on opposite side */}
                    <div className="hidden lg:block w-5/12" />
                  </motion.div>

                  {/* Vertical connector to next row */}
                  {!isLast && (
                    <motion.div 
                      className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 h-6 bg-destructive"
                      style={{ top: '100%' }}
                      initial={{ scaleY: 0, originY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.2 }}
                    />
                  )}

                  {/* Mobile arrow */}
                  {!isLast && (
                    <motion.div 
                      className="lg:hidden flex justify-center py-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-destructive">
                        <path d="M10 20L0 8H20L10 20Z" fill="currentColor" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary to-primary/5 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Se a sua Contabilidade passou por isso em 2025,<br />
              <span className="text-primary">chegou a hora de mudar!</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BottleneckInfographic;

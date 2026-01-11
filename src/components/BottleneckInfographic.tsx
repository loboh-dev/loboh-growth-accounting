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
  const leftColumn = steps.slice(0, 4);
  const rightColumn = steps.slice(4, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    }
  };

  return (
    <section id="problema" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Diagnóstico</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Como o dono da contabilidade vira o maior <span className="text-primary">gargalo do crescimento</span> do negócio
            </h2>
          </div>

          {/* Two Column Infographic */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {leftColumn.map((step, index) => (
                <motion.div key={step.number} variants={itemVariants} className="relative">
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Text */}
                    <p className="text-foreground leading-relaxed flex-1 pt-1">
                      {step.text}
                      <span className="font-bold text-foreground">{step.bold}</span>
                      {step.rest}
                    </p>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < leftColumn.length - 1 && (
                    <motion.div 
                      variants={arrowVariants}
                      className="absolute left-5 -bottom-2 z-10"
                    >
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="text-primary">
                        <path d="M10 16L0 0H20L10 16Z" fill="currentColor" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
              
              {/* Bridge arrow to right column (visible on lg+) */}
              <motion.div 
                className="hidden lg:flex justify-end pr-4 pt-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="text-primary">
                  <path 
                    d="M0 20H60M60 20L45 5M60 20L45 35" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {rightColumn.map((step, index) => (
                <motion.div key={step.number} variants={itemVariants} className="relative">
                  <div className={`flex items-start gap-4 p-5 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 group ${
                    step.number === 8 
                      ? 'bg-destructive/5 border-destructive/30 hover:border-destructive/50' 
                      : 'bg-card border-border hover:border-primary/30'
                  }`}>
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                      step.number === 8 
                        ? 'bg-destructive text-destructive-foreground' 
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      step.number === 8 
                        ? 'bg-destructive/10 group-hover:bg-destructive/20' 
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <step.icon className={`w-6 h-6 ${step.number === 8 ? 'text-destructive' : 'text-primary'}`} />
                    </div>
                    
                    {/* Text */}
                    <p className="text-foreground leading-relaxed flex-1 pt-1">
                      {step.text}
                      <span className={`font-bold ${step.number === 8 ? 'text-destructive' : 'text-foreground'}`}>{step.bold}</span>
                      {step.rest}
                    </p>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < rightColumn.length - 1 && (
                    <motion.div 
                      variants={arrowVariants}
                      className="absolute left-5 -bottom-2 z-10"
                    >
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className={step.number === 7 ? "text-destructive" : "text-primary"}>
                        <path d="M10 16L0 0H20L10 16Z" fill="currentColor" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary to-primary/5 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Contabilidades não quebram por falta de clientes.<br />
              <span className="text-primary">Elas travam por falta de método.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BottleneckInfographic;

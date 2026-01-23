import { Target, TrendingUp, Users, BarChart3, CheckCircle2, Rocket, Calendar, Lightbulb, Zap, Award, Building2, LineChart, ArrowRight, ArrowDown, ChevronRight, GitBranch, Eye, MessageCircleQuestion, ClipboardCheck, AlertTriangle, Cog, Monitor, GraduationCap, ShieldCheck, X, Check, Briefcase, Globe, Code, ChartNoAxesCombined } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-consulting.jpg";
import logoWhite from "@/assets/logo-white.svg";
import logoDark from "@/assets/logo-dark.svg";
import logoGupy from "@/assets/logos/gupy.svg";
import logoRockContent from "@/assets/logos/rock-content.png";
import logoMovidesk from "@/assets/logos/movidesk-updated.png";
import logoContaAzul from "@/assets/logos/contaazul-white.png";
import foundersTransparent from "@/assets/founders-transparent.png";
import tiagoPhoto from "@/assets/tiago-faria.jpg";
import fayolaPhoto from "@/assets/fayola-damaceno.jpg";
import { Link } from "react-router-dom";
import BottleneckInfographic from "@/components/BottleneckInfographic";
import MethodologyInfographic from "@/components/MethodologyInfographic";
import ComparisonSection from "@/components/ComparisonSection";

const LandingPage = () => {
  const scrollToContact = () => {
    document.getElementById('cta-final')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-loboh-navy/95 backdrop-blur-md border-b border-muted/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <img src={logoWhite} alt="Loboh" className="h-7" />
          <Button variant="hero" size="sm" onClick={scrollToContact}>
            Quero crescer como scale-up
          </Button>
        </div>
      </nav>

      {/* Hero Section - Full Viewport */}
      <section className="relative h-screen flex items-center bg-loboh-navy overflow-visible">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />
        
        
        {/* Right - Partner Images with Smoke Effect */}
        <div className="hidden lg:block absolute pointer-events-none z-20" style={{
        right: '-80px',
        bottom: '4px',
        height: '85vh',
        width: 'auto'
      }}>
          {/* Smoke layers */}
          <div className="absolute inset-0 overflow-hidden" style={{
          width: '150%',
          left: '-25%'
        }}>
            <div className="absolute inset-0 animate-smoke-drift" style={{
            background: 'radial-gradient(ellipse 60% 80% at 70% 50%, hsl(214 47% 53% / 0.4) 0%, transparent 60%)',
            filter: 'blur(60px)'
          }} />
            <div className="absolute inset-0 animate-smoke-drift-slow animation-delay-2000" style={{
            background: 'radial-gradient(ellipse 50% 70% at 60% 60%, hsl(210 20% 60% / 0.3) 0%, transparent 50%)',
            filter: 'blur(80px)'
          }} />
            <div className="absolute inset-0 animate-smoke-drift-fast animation-delay-4000" style={{
            background: 'radial-gradient(ellipse 70% 60% at 80% 40%, hsl(214 47% 53% / 0.25) 0%, transparent 55%)',
            filter: 'blur(50px)'
          }} />
          </div>
          <img src={foundersTransparent} alt="Tiago Faria e Fayola Damaceno" className="h-full w-auto relative z-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="py-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-5 animate-fade-up">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-loboh-gray-200 text-sm font-medium">Exclusivo para Contabilidades</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4 animate-fade-up animation-delay-100" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                <span className="text-primary">Serviços de Gestão Comercial</span><br />
                para Contabilidades
              </h1>
              
              <p className="text-base md:text-lg text-loboh-gray-200 max-w-xl mb-3 animate-fade-up animation-delay-200 leading-relaxed">
                Fazemos a gestão <span className="font-bold">total ou parcial</span> da sua equipe comercial para imprimir um <span className="font-bold">ritmo constante e eficiente</span> de vendas.
              </p>
              <p className="text-base md:text-lg text-loboh-gray-200 max-w-xl mb-6 animate-fade-up animation-delay-200 leading-relaxed">
                <span className="font-bold">Mais oportunidades, mais conversão, mais previsibilidade</span> — sem depender apenas de indicações ou esforço heroico do dono.
              </p>
              
              {/* Benefits grid - Logo bar */}
              <div className="flex items-center gap-8 mb-6 animate-fade-up animation-delay-300 opacity-40">
                <img src={logoGupy} alt="Gupy" className="h-4 w-auto object-contain brightness-0 invert" />
                <img src={logoRockContent} alt="Rock Content" className="h-5 w-auto object-contain brightness-0 invert" />
                <img src={logoMovidesk} alt="Movidesk" className="h-[18px] w-auto object-contain brightness-0 invert" />
                <img src={logoContaAzul} alt="ContaAzul" className="h-3.5 w-auto object-contain brightness-0 invert" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-up animation-delay-400">
                <Button variant="hero" size="lg" onClick={scrollToContact}>
                  Quero crescer como scale-up
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="default" onClick={() => document.getElementById('problema')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Entender o método
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blue accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      {/* O Problema - Infográfico Animado */}
      <BottleneckInfographic />

      {/* Seção de Comparação - Modinha vs Atemporal */}
      <ComparisonSection />



      {/* Metodologia Loboh - 5 Pilares Infográfico */}
      <MethodologyInfographic />

      {/* O que muda na prática */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resultados</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6" style={{ fontFamily: 'Oxanium, sans-serif' }}>O que muda na prática</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
{[{
              icon: Target,
              text: "Mais leads qualificados"
            }, {
              icon: Rocket,
              text: "Conversões mais altas"
            }, {
              icon: Zap,
              text: "Ciclo de vendas mais curto"
            }, {
              icon: TrendingUp,
              text: "Mais previsibilidade de receita"
            }, {
              icon: LineChart,
              text: "Time mais engajado e produtivo"
            }, {
              icon: Users,
              text: "Menos dependência do dono"
            }].map((item, index) => <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>)}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-lg font-semibold text-foreground">
                Crescimento não é sorte. <span className="text-primary">É sistema.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social / Cases */}
      <section className="py-12 md:py-16 bg-loboh-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>Resultados reais em contabilidades reais</h2>
              <p className="text-muted">Transformações de operação comercial, crescimento de receita e times mais organizados.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Case Gupy */}
              <div className="p-6 rounded-lg bg-loboh-gray-900/80 border border-muted/20 hover:border-primary/40 transition-all duration-200">
                <div className="h-12 mb-4 flex items-center">
                  <img src={logoGupy} alt="Gupy" className="h-8 object-contain brightness-0 invert" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">2x</span>
                  <p className="text-lg font-semibold text-primary-foreground mt-1">mais conversão</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">Transformação completa da operação comercial com processos claros e gestão orientada a dados.</p>
              </div>

              {/* Case Rock Content */}
              <div className="p-6 rounded-lg bg-loboh-gray-900/80 border border-muted/20 hover:border-primary/40 transition-all duration-200">
                <div className="h-12 mb-4 flex items-center">
                  <img src={logoRockContent} alt="Rock Content" className="h-8 object-contain brightness-0 invert" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">3x</span>
                  <p className="text-lg font-semibold text-primary-foreground mt-1">maior conversão</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">Crescimento de receita consistente com redução de esforço operacional do dono.</p>
              </div>

              {/* Case Movidesk */}
              <div className="p-6 rounded-lg bg-loboh-gray-900/80 border border-muted/20 hover:border-primary/40 transition-all duration-200">
                <div className="h-12 mb-4 flex items-center">
                  <img src={logoMovidesk} alt="Movidesk" className="h-8 object-contain brightness-0 invert" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">2x</span>
                  <p className="text-lg font-semibold text-primary-foreground mt-1">mais vendas</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">Times mais organizados e produtivos com método validado de scale-ups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Storytelling - Credibilidade e Multidisciplinaridade */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Header com filosofia */}
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-foreground text-sm font-medium">Sem atalhos. Sem fórmulas prontas. Sem hacks milagrosos.</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                Apenas <span className="text-primary">execução disciplinada</span><br />da gestão comercial
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Crescimento previsível vem de gente que já fez, não de quem só fala sobre fazer.
              </p>
            </motion.div>

            {/* Triangulação Visual */}
            <div className="grid lg:grid-cols-3 gap-6 mb-10">
              
              {/* Pilar 1 - Scale-ups */}
              <motion.div 
                className="relative p-8 rounded-2xl bg-loboh-navy text-white overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                    <Rocket className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Oxanium, sans-serif' }}>Maturidade de Scale-up</h3>
                  <p className="text-loboh-gray-200 leading-relaxed mb-6">
                    Empresas tech de alto crescimento têm o maior nível de maturidade em gestão de vendas do Brasil. Metodologia, processos, dados — tudo é sistemático.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">Playbooks</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">OKRs</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">Sprints</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">Data-driven</span>
                  </div>
                </div>
              </motion.div>

              {/* Pilar 2 - Fomos lá */}
              <motion.div 
                className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'Oxanium, sans-serif' }}>Estivemos Lá</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Lideramos vendas nas maiores scale-ups do Brasil. Não aprendemos em curso — construímos máquinas de vendas que geraram milhões.
                  </p>
                  <div className="flex items-center gap-4 opacity-60">
                    <img src={logoGupy} alt="Gupy" className="h-4 object-contain" style={{ filter: 'grayscale(100%)' }} />
                    <img src={logoRockContent} alt="Rock Content" className="h-5 object-contain" style={{ filter: 'grayscale(100%)' }} />
                    <img src={logoContaAzul} alt="ContaAzul" className="h-3.5 object-contain" style={{ filter: 'grayscale(100%)' }} />
                  </div>
                </div>
              </motion.div>

              {/* Pilar 3 - Empreendedorismo */}
              <motion.div 
                className="relative p-8 rounded-2xl bg-primary text-white overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Oxanium, sans-serif' }}>Empreendemos com Sucesso</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Além de executivos, somos empreendedores. Fundamos empresas, entendemos a dor do dono e aplicamos o que funciona em contabilidades todos os dias.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium">Loboh</span>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium">Netlinks</span>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-medium">Contabilidades</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Seção dos Especialistas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  Nossos Especialistas
                </h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Valorizamos <span className="font-bold text-foreground">multidisciplinaridade</span> e <span className="font-bold text-foreground">diversidade</span> que geram sinergia.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Tiago */}
                <motion.div 
                  className="relative p-8 rounded-2xl bg-loboh-navy overflow-hidden group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 ring-4 ring-primary/30">
                      <img src={tiagoPhoto} alt="Tiago Faria" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="text-center sm:text-left flex-1">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">CEO</span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-loboh-gray-200 text-xs">Vendas</span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-loboh-gray-200 text-xs">Estratégia</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Tiago Faria</h4>
                      <p className="text-loboh-gray-300 text-sm leading-relaxed">
                        Após 10+ anos de carreira técnica em TI, atuou na liderança de vendas de grandes scale-ups como <span className="text-primary font-medium">Gupy</span>, <span className="text-primary font-medium">Rock Content</span>, <span className="text-primary font-medium">ContaAzul</span> e <span className="text-primary font-medium">Kenoby</span>, onde consolidou seu próprio método de gestão de vendas ágil. Co-fundador da agência global de SEO <span className="text-primary font-medium">Netlinks</span>.
                      </p>
                    </div>
                  </div>
                  
                  {/* Competências */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-3 justify-center sm:justify-start">
                    <div className="flex items-center gap-2 text-loboh-gray-300 text-xs">
                      <ChartNoAxesCombined className="w-4 h-4 text-primary" />
                      <span>Sales Operations</span>
                    </div>
                    <div className="flex items-center gap-2 text-loboh-gray-300 text-xs">
                      <Code className="w-4 h-4 text-primary" />
                      <span>Tech Background</span>
                    </div>
                    <div className="flex items-center gap-2 text-loboh-gray-300 text-xs">
                      <Globe className="w-4 h-4 text-primary" />
                      <span>SEO Global</span>
                    </div>
                  </div>
                </motion.div>

                {/* Fayola */}
                <motion.div 
                  className="relative p-8 rounded-2xl bg-loboh-navy overflow-hidden group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 ring-4 ring-accent/30">
                      <img src={fayolaPhoto} alt="Fayola Damaceno" className="w-full h-full object-cover object-top" style={{ objectPosition: 'center 15%' }} />
                    </div>
                    
                    <div className="text-center sm:text-left flex-1">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">COO</span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-loboh-gray-200 text-xs">Enablement</span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-loboh-gray-200 text-xs">Operações</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Fayola Damaceno</h4>
                      <p className="text-loboh-gray-300 text-sm leading-relaxed">
                        Especialista em <span className="text-accent font-medium">Sales Enablement</span> com mais de 15 anos de experiência em Vendas. Fayola treinou times de vendas de alta performance na <span className="text-accent font-medium">ContaAzul</span>, <span className="text-accent font-medium">Cobli</span> e <span className="text-accent font-medium">Movidesk</span>.
                      </p>
                    </div>
                  </div>
                  
                  {/* Competências */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-3 justify-center sm:justify-start">
                    <div className="flex items-center gap-2 text-loboh-gray-300 text-xs">
                      <GraduationCap className="w-4 h-4 text-accent" />
                      <span>Treinamento</span>
                    </div>
                    <div className="flex items-center gap-2 text-loboh-gray-300 text-xs">
                      <Users className="w-4 h-4 text-accent" />
                      <span>Gestão de Times</span>
                    </div>
                    <div className="flex items-center gap-2 text-loboh-gray-300 text-xs">
                      <Briefcase className="w-4 h-4 text-accent" />
                      <span>Processos</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mensagem de sinergia - Fundação + Ciclo Contínuo */}
              <motion.div 
                className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                    Fundação Sólida + Ciclo de Melhoria Contínua
                  </h4>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Nossa entrega começa com a <span className="font-bold text-foreground">GTM Foundation</span> — a base indispensável de playbook, CRM e treinamento — e evolui continuamente com o <span className="font-bold text-foreground">Loboh Sales Agile</span>: 5 pilares estratégicos orquestrados em sprints semanais. O resultado? <span className="font-bold text-primary">Um sistema de vendas que cresce com você, nunca para.</span>
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-12 md:py-16 bg-loboh-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              Pronto para crescer como uma scale-up?
            </h2>
            
            <p className="text-muted mb-8">
              Descubra como estruturar vendas, gestão e crescimento previsível na sua contabilidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/Formulario">
                <Button variant="hero" size="xl">
                  Agendar conversa estratégica
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="lg" onClick={() => document.getElementById('problema')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Quero entender o método
              </Button>
            </div>
            
            <p className="text-muted/60 text-sm mt-6">Sem compromisso • Foco total no seu crescimento.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-loboh-navy border-t border-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={logoWhite} alt="Loboh" className="h-5" />
            <p className="text-muted/60 text-sm">© 2025 Loboh. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;

import { Target, TrendingUp, Users, BarChart3, CheckCircle2, Rocket, Calendar, Lightbulb, Zap, Award, Building2, LineChart, ArrowRight, ArrowDown, ChevronRight, GitBranch, Eye, MessageCircleQuestion, ClipboardCheck, AlertTriangle, Cog, Monitor, GraduationCap, ShieldCheck, X, Check, Briefcase, Globe, Code, ChartNoAxesCombined, Linkedin, ChefHat, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-consulting.jpg";
import logoWhite from "@/assets/logo-white.svg";
import logoDark from "@/assets/logo-dark.svg";
import logoGupy from "@/assets/logos/gupy.svg";
import logoRockContent from "@/assets/logos/rock-content.png";
import logoMovidesk from "@/assets/logos/movidesk-updated.png";
import logoContaAzul from "@/assets/logos/contaazul.svg";
import logoForDoctor from "@/assets/logos/fordoctor.svg";
import logoPejota from "@/assets/logos/pejota.webp";
import logoAMContabilidade from "@/assets/logos/am-contabilidade.webp";
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
                Fazemos a gestão <span className="font-bold">total ou parcial</span> da sua equipe comercial aplicando <span className="font-bold">método validado em scale-ups de sucesso</span> no Brasil.
              </p>
              <p className="text-base md:text-lg text-loboh-gray-200 max-w-xl mb-6 animate-fade-up animation-delay-200 leading-relaxed">
                <span className="font-bold">Mais oportunidades, mais conversão, mais previsibilidade</span> — sem depender apenas de indicações ou esforço heroico do dono.
              </p>
              
              {/* Benefits grid - Logo bar */}
              <div className="flex items-center gap-8 mb-6 animate-fade-up animation-delay-300 opacity-40">
                <img src={logoGupy} alt="Gupy" className="h-4 w-auto object-contain brightness-0 invert" />
                <img src={logoRockContent} alt="Rock Content" className="h-5 w-auto object-contain brightness-0 invert" />
                <img src={logoMovidesk} alt="Movidesk" className="h-[24px] w-auto object-contain brightness-0 invert" />
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

      {/* Título de Conexão */}
      <section className="pt-12 md:pt-16 pb-4 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center"
            style={{ fontFamily: 'Oxanium, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">Fundação Sólida</span> + <span className="text-foreground">Ciclo de Melhoria Contínua</span>
          </motion.h2>
        </div>
      </section>

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
              {/* Case ForDoctor */}
              <div className="p-6 rounded-lg bg-loboh-gray-900/80 border border-muted/20 hover:border-primary/40 transition-all duration-200">
                <div className="h-12 mb-4 flex items-center">
                  <img src={logoForDoctor} alt="ForDoctor" className="h-8 object-contain brightness-0 invert" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">2x</span>
                  <p className="text-lg font-semibold text-primary-foreground mt-1">mais conversão</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">Com a entrada de novos players no mercado, a demanda gerada precisava ser aproveitada ao máximo. Otimizamos cada etapa do funil para dobrar a taxa de conversão.</p>
              </div>

              {/* Case Pejota Contabilidade */}
              <div className="p-6 rounded-lg bg-loboh-gray-900/80 border border-muted/20 hover:border-primary/40 transition-all duration-200">
                <div className="h-12 mb-4 flex items-center">
                  <img src={logoPejota} alt="Pejota Contabilidade" className="h-8 object-contain brightness-0 invert" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">2x</span>
                  <p className="text-lg font-semibold text-primary-foreground mt-1">mais vendas no 1º ano</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">A visibilidade de dados dependia de planilhas e controles externos ao CRM. Com dados organizados, identificamos o ICP e dobramos as vendas — com 3 pessoas a menos no time.</p>
              </div>

              {/* Case AM Contabilidade */}
              <div className="p-6 rounded-lg bg-loboh-gray-900/80 border border-muted/20 hover:border-primary/40 transition-all duration-200">
                <div className="h-12 mb-4 flex items-center">
                  <img src={logoAMContabilidade} alt="AM Contabilidade" className="h-8 object-contain brightness-0 invert" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">3x</span>
                  <p className="text-lg font-semibold text-primary-foreground mt-1">mais conversão + novo canal</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">Com o banimento do principal canal de demanda, criamos uma campanha de indicações com a base que não só cobriu o canal perdido, mas triplicou a conversão.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                A diferença entre <span className="text-muted-foreground">comprar informação</span> e <span className="text-primary">contratar execução</span>.
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Crescimento previsível não vem de modinha. Vem de <span className="font-semibold text-foreground">gestão comercial otimizada continuamente</span>.
              </p>
            </motion.div>

            {/* Introdução aos Fundadores */}
            <motion.div 
              className="mb-10 p-8 rounded-2xl bg-loboh-navy text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="flex items-center gap-4 opacity-60">
                    <img src={logoGupy} alt="Gupy" className="h-4 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                    <img src={logoRockContent} alt="Rock Content" className="h-5 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                    <img src={logoContaAzul} alt="ContaAzul" className="h-3.5 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                  </div>
                </div>
                
                <p className="text-lg text-loboh-gray-200 leading-relaxed">
                  <span className="text-primary font-bold">Maturidade de scale-up.</span> Lideramos vendas nas maiores empresas tech do Brasil. <span className="text-accent font-bold">Empreendemos com sucesso.</span> Fundamos empresas que faturam milhões. Não vendemos teoria — <span className="text-white font-semibold">entregamos execução</span>.
                </p>
              </div>
            </motion.div>

            {/* Header dos Especialistas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  Conheça quem vai liderar sua transformação
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Tiago */}
                <motion.div 
                  className="relative rounded-2xl bg-loboh-navy overflow-hidden group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Header com tags */}
                  <div className="px-6 pt-6 pb-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">Founder</span>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">CEO</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-loboh-gray-200 text-xs">Go-To-Market</span>
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-primary/40">
                        <img src={tiagoPhoto} alt="Tiago Faria" className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Oxanium, sans-serif' }}>Tiago Faria</h4>
                        <p className="text-loboh-gray-300 text-sm leading-relaxed">
                          Após 10+ anos de carreira técnica em TI, atuou na liderança de vendas de grandes scale-ups, onde consolidou seu próprio método de gestão de vendas ágil.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empresas */}
                  <div className="px-6 py-4 border-t border-white/10 relative z-10">
                    <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                      <span className="font-semibold text-white">Gupy</span>
                      <span className="text-white/30">•</span>
                      <span className="font-semibold text-white">Rock Content</span>
                      <span className="text-white/30">•</span>
                      <span className="font-semibold text-white">ContaAzul</span>
                    </div>
                    
                    {/* Destaque Netlinks */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          Co-fundador da <span className="text-primary">Holding Global Netlinks</span>
                        </p>
                        <p className="text-loboh-gray-400 text-xs">Holding de Martechs com atuação multinacional</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer com redes sociais */}
                  <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex items-center justify-center gap-3 relative z-10">
                    <a 
                      href="https://www.instagram.com/tiagofariabh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-primary" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/tiagofariabh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                </motion.div>

                {/* Fayola */}
                <motion.div 
                  className="relative rounded-2xl bg-loboh-navy overflow-hidden group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Header com tags */}
                  <div className="px-6 pt-6 pb-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">Sócia Diretora</span>
                      <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">CLO</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-loboh-gray-200 text-xs">Enablement</span>
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-accent/40">
                        <img src={fayolaPhoto} alt="Fayola Damaceno" className="w-full h-full object-cover object-top" style={{ objectPosition: 'center 15%' }} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Oxanium, sans-serif' }}>Fayola Damaceno</h4>
                        <p className="text-loboh-gray-300 text-sm leading-relaxed">
                          Especialista em <span className="text-accent font-medium">Sales Enablement</span> com mais de 15 anos de experiência. Treinou times de vendas de alta performance nas maiores scale-ups do Brasil.
                        </p>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Empresas */}
                  <div className="px-6 py-4 border-t border-white/10 relative z-10">
                    <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                      <span className="font-semibold text-white">ContaAzul</span>
                      <span className="text-white/30">•</span>
                      <span className="font-semibold text-white">Cobli</span>
                      <span className="text-white/30">•</span>
                      <span className="font-semibold text-white">Movidesk</span>
                    </div>
                    
                    {/* Destaque FAM */}
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <ChefHat className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          Co-fundadora do <span className="text-accent">Restaurante FAM</span>
                        </p>
                        <p className="text-loboh-gray-400 text-xs">Mais de 10.000 refeições vendidas mensalmente</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer com redes sociais */}
                  <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex items-center justify-center gap-3 relative z-10">
                    <a 
                      href="https://www.instagram.com/fayoladamaceno/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-accent" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/fayoladamaceno/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-accent" />
                    </a>
                  </div>
                </motion.div>
              </div>
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

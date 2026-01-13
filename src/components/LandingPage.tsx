import { Target, TrendingUp, Users, BarChart3, CheckCircle2, Rocket, Calendar, Lightbulb, Zap, Award, Building2, LineChart, ArrowRight, ChevronRight, GitBranch, Eye, MessageCircleQuestion, ClipboardCheck, AlertTriangle, Cog, Monitor, GraduationCap, ShieldCheck, Crosshair, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";
import logoWhite from "@/assets/logo-white.svg";
import logoDark from "@/assets/logo-dark.svg";
import logoFordoctor from "@/assets/logos/fordoctor.svg";
import logoAM from "@/assets/logos/am-contabilidade.webp";
import logoPejota from "@/assets/logos/pejota.webp";
import foundersTransparent from "@/assets/founders-transparent.png";
import { Link } from "react-router-dom";
import BottleneckInfographic from "@/components/BottleneckInfographic";

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
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4 animate-fade-up animation-delay-100">
                Aumente a receita da sua contabilidade com o<br />
                <span className="text-primary">método das scale-ups.</span>
              </h1>
              
              <p className="text-base md:text-lg text-loboh-gray-200 max-w-xl mb-6 animate-fade-up animation-delay-200 leading-relaxed">
                Ajude sua contabilidade a crescer como empresas que escalam de verdade: <span className="font-bold">mais oportunidades, mais conversão, mais previsibilidade</span> — sem depender de indicações ou esforço heroico do dono.
              </p>
              
              {/* Benefits grid - Logo bar */}
              <div className="flex items-center gap-6 mb-6 animate-fade-up animation-delay-300 opacity-60">
                <img src={logoFordoctor} alt="ForDoctor" className="h-6 object-contain brightness-0 invert" />
                <img src={logoAM} alt="AM Contabilidade" className="h-6 object-contain brightness-0 invert" />
                <img src={logoPejota} alt="Pejota" className="h-6 object-contain brightness-0 invert" />
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

      {/* O Método das Scale-ups */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Posicionamento</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                O mesmo método usado por empresas que escalam receita de forma consistente
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                A Loboh aplica na contabilidade os princípios usados por scale-ups: processos claros, gestão orientada a dados, execução disciplinada e capacitação contínua.
              </p>
              <p className="text-foreground font-semibold text-lg mt-6">
                Não é sobre "vender mais".<br />
                É sobre construir um <span className="text-primary">ativo de crescimento previsível</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Loboh - 5 Pilares */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Metodologia Loboh</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                5 Pilares para Crescimento Comercial Previsível
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              icon: BarChart3,
              title: "Gestão",
              desc: "Metas claras, KPIs bem definidos e rituais de acompanhamento que garantem direção, disciplina de execução e decisões baseadas em dados."
            }, {
              icon: Crosshair,
              title: "Oferta",
              desc: "Definição clara de ICP, personas, mercado e posicionamento para concentrar esforços comerciais nos clientes certos e aumentar conversão."
            }, {
              icon: Monitor,
              title: "Tecnologia",
              desc: "Automação, Business Intelligence, stack de tecnologia comercial e integrações que dão visibilidade real da operação e escalam a performance."
            }, {
              icon: GraduationCap,
              title: "Capacitação",
              desc: "Treinamento contínuo, processos documentados, gestão do conhecimento e plano de desenvolvimento individual para execução com excelência."
            }, {
              icon: Heart,
              title: "Cultura",
              desc: "Cultura de vendas orientada a resultado, com plano de carreira, remuneração variável e incentivos que geram engajamento e alta performance."
            }].map((item, index) => <div key={index} className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-cta/10 flex items-center justify-center mb-4 group-hover:bg-cta/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>)}
            </div>
            
            <div className="text-center mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-xl font-semibold text-foreground">
                Scale-ups não crescem no improviso.<br />
                <span className="text-primary">Elas crescem com gestão.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que muda na prática */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resultados</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">O que muda na prática</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{
              icon: Target,
              text: "Mais leads qualificados"
            }, {
              icon: TrendingUp,
              text: "Melhor aproveitamento das oportunidades"
            }, {
              icon: Rocket,
              text: "Conversões mais altas"
            }, {
              icon: Zap,
              text: "Ciclo de vendas mais curto"
            }, {
              icon: LineChart,
              text: "Receita previsível"
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
      <section className="py-20 bg-loboh-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados reais em contabilidades reais</h2>
              <p className="text-muted">Transformações de operação comercial, crescimento de receita e times mais organizados.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Case ForDoctor */}
              <div className="p-6 rounded-lg bg-loboh-gray-900/80 border border-muted/20 hover:border-primary/40 transition-all duration-200">
                <div className="h-12 mb-4 flex items-center">
                  <img src={logoFordoctor} alt="ForDoctor" className="h-8 object-contain brightness-0 invert" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">2x</span>
                  <p className="text-lg font-semibold text-primary-foreground mt-1">mais conversão</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">Transformação completa da operação comercial com processos claros e gestão orientada a dados.</p>
              </div>

              {/* Case AM */}
              <div className="p-6 rounded-lg bg-loboh-gray-900/80 border border-muted/20 hover:border-primary/40 transition-all duration-200">
                <div className="h-12 mb-4 flex items-center">
                  <img src={logoAM} alt="AM Contabilidade" className="h-8 object-contain brightness-0 invert" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">3x</span>
                  <p className="text-lg font-semibold text-primary-foreground mt-1">maior conversão</p>
                </div>
                <p className="text-muted text-sm leading-relaxed">Crescimento de receita consistente com redução de esforço operacional do dono.</p>
              </div>

              {/* Case Pejota */}
              <div className="p-6 rounded-lg bg-loboh-gray-900/80 border border-muted/20 hover:border-primary/40 transition-all duration-200">
                <div className="h-12 mb-4 flex items-center">
                  <img src={logoPejota} alt="Pejota" className="h-8 object-contain brightness-0 invert" />
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

      {/* Por que a Loboh */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Diferencial</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Por que a Loboh é diferente de consultorias tradicionais
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[{
              icon: Target,
              text: "Especialistas em vendas e crescimento"
            }, {
              icon: Rocket,
              text: "Atuação prática, não teórica"
            }, {
              icon: CheckCircle2,
              text: "Foco em execução e resultado"
            }, {
              icon: Award,
              text: "Método validado em múltiplas empresas"
            }, {
              icon: TrendingUp,
              text: "Pensamento de scale-up aplicado à contabilidade"
            }].map((item, index) => <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade - Tiago */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Quem está por trás</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Liderança com experiência em scale-ups
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-2xl bg-card border border-border shadow-lg">
              <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/assets/tiago-faria.jpg" alt="Tiago Faria - CEO da Loboh" className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  CEO da Loboh
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Tiago Faria (Aspira)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Escalou times em ContaAzul, Gupy e Rock Content</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>10+ anos liderando vendas em scale-ups</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Criador da metodologia Loboh de crescimento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-20 bg-loboh-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
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

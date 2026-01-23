import { Target, TrendingUp, Users, BarChart3, CheckCircle2, Rocket, Calendar, Lightbulb, Zap, Award, Building2, LineChart, ArrowRight, ChevronRight, GitBranch, Eye, MessageCircleQuestion, ClipboardCheck, AlertTriangle, Cog, Monitor, GraduationCap, ShieldCheck, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";
import logoWhite from "@/assets/logo-white.svg";
import logoDark from "@/assets/logo-dark.svg";
import logoGupy from "@/assets/logos/gupy.svg";
import logoRockContent from "@/assets/logos/rock-content.png";
import logoMovidesk from "@/assets/logos/movidesk-updated.png";
import logoContaAzul from "@/assets/logos/contaazul-white.png";
import foundersTransparent from "@/assets/founders-transparent.png";
import { Link } from "react-router-dom";
import BottleneckInfographic from "@/components/BottleneckInfographic";
import MethodologyInfographic from "@/components/MethodologyInfographic";

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
                Fazemos a gestão <span className="font-bold">total ou parcial</span> da sua equipe de vendas aplicando método validado em scale-ups de sucesso no Brasil.
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

      {/* Seção: Escolha seu caminho - Winners vs Losers Consolidado */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                Você quer <span className="text-primary">resultado</span> ou quer <span className="text-destructive">mais do mesmo</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                O mercado está cheio de atalhos e falsas promessas de crescimento rápido. Compare e decida onde investir seu tempo e dinheiro.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Coluna LOSERS - Modinha */}
              <div className="relative">
                <div className="absolute -top-4 left-6 px-4 py-1 bg-destructive text-destructive-foreground text-sm font-bold uppercase tracking-wider rounded-full" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  Modinha
                </div>
                <div className="bg-destructive/5 border-2 border-destructive/30 rounded-3xl p-8 pt-10 h-full">
                  <p className="text-destructive font-bold text-lg mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                    Caminho "fácil", resultado difícil
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { title: "Clubinhos de networking", desc: "Foco em status e ambiência. Ninguém bota a mão na massa por você." },
                      { title: "Cursinho gravado", desc: "Assiste uma vez, não aplica nada. Zero acompanhamento." },
                      { title: "Mentoria de palco", desc: "Grupo lotado, templates genéricos, zero personalização." },
                      { title: "Consultoria de projeto", desc: "Entrega um PDF bonito e desaparece. Você que se vire." },
                      { title: "Promessa de automação mágica com IA", desc: "Sem processo, sem dados, sem gestão real. Não garante resultado." },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-destructive" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{item.title}</p>
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-destructive/20 pt-6">
                    <p className="text-destructive font-semibold italic text-center">"Boa sorte com a execução!"</p>
                    <p className="text-muted-foreground text-sm text-center mt-2">Passageiro. Genérico. Sem resultado sustentável.</p>
                  </div>
                </div>
              </div>
              
              {/* Coluna WINNERS - Atemporal */}
              <div className="relative">
                <div className="absolute -top-4 left-6 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider rounded-full" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  Atemporal
                </div>
                <div className="bg-primary/5 border-2 border-primary/30 rounded-3xl p-8 pt-10 h-full">
                  <p className="text-primary font-bold text-lg mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                    Esforço correto, resultado previsível
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { title: "Go to Market estruturado", desc: "Processos definidos, indicadores confiáveis, execução disciplinada." },
                      { title: "Capacitação contínua + monitoramento", desc: "Treinamento aplicado na prática com acompanhamento semanal." },
                      { title: "Serviços 100% personalizados", desc: "Construído no contexto da sua contabilidade. Nada de template." },
                      { title: "Gestão Comercial com Loboh Sales Agile", desc: "Melhoria contínua baseada em dados, sprints e ajustes semanais." },
                      { title: "IA aplicada em processos validados e dados íntegros", desc: "Tecnologia a serviço de uma operação que já funciona." },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{item.title}</p>
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-primary/20 pt-6">
                    <p className="text-primary font-semibold italic text-center">"A gente executa junto com você."</p>
                    <p className="text-muted-foreground text-sm text-center mt-2">Perene. Personalizado. Resultado sustentável.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                A diferença entre <span className="text-destructive">comprar informação</span> e <span className="text-primary">contratar execução</span>.
              </p>
              <p className="text-muted-foreground">
                Crescimento previsível não vem de modinha. Vem de <span className="text-primary font-semibold">gestão comercial otimizada continuamente</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Nosso Posicionamento */}
      <section className="py-24 bg-loboh-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              A Loboh não é "mais uma promessa".
            </h2>
            
            <p className="text-2xl md:text-3xl font-bold text-red-500 mb-8" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              Não Somos
            </p>
            
            <div className="flex flex-col gap-4 mb-12 max-w-2xl mx-auto">
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-lg text-muted flex-1"><span className="font-bold text-primary-foreground">Curso</span> que você <span className="font-bold text-primary-foreground">vê 1 vez e não aplica</span>.</p>
                </div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-lg text-muted flex-1"><span className="font-bold text-primary-foreground">Mentoria</span> que <span className="font-bold text-primary-foreground">só entrega template</span>.</p>
                </div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <p className="text-lg text-muted flex-1"><span className="font-bold text-primary-foreground">Consultoria</span> que <span className="font-bold text-primary-foreground">entrega um projeto</span> e te <span className="font-bold text-primary-foreground">abandona sem resultados</span>.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-xl text-primary-foreground leading-relaxed">
                    Somos uma empresa de <span className="text-primary font-bold" style={{ fontFamily: 'Oxanium, sans-serif' }}>Serviços Profissionais para Vendas</span>.
                  </p>
                  <p className="text-xl text-primary-foreground leading-relaxed mt-2">
                    Entramos na operação, estruturamos, executamos, medimos e evoluímos continuamente junto com o cliente para alcance das metas de crescimento da empresa.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="inline-block p-6 rounded-2xl bg-primary/10 border border-primary/30">
              <p className="text-muted text-sm uppercase tracking-wider mb-2">Chamamos isso de</p>
              <p className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                Gestão Comercial como Serviço
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Metodologia Loboh - 5 Pilares Infográfico */}
      <MethodologyInfographic />

      {/* O que muda na prática */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
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
      <section className="py-20 bg-loboh-navy text-primary-foreground">
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

      {/* Por que a Loboh */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Diferencial</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4" style={{ fontFamily: 'Oxanium, sans-serif' }}>
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

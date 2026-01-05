import { Target, TrendingUp, Users, BarChart3, CheckCircle2, Rocket, Calendar, Lightbulb, Zap, Award, Building2, LineChart, ArrowRight, ChevronRight, GitBranch, Eye, MessageCircleQuestion, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";
import logoWhite from "@/assets/logo-white.svg";
import logoDark from "@/assets/logo-dark.svg";
import logoFordoctor from "@/assets/logos/fordoctor.svg";
import logoAM from "@/assets/logos/am-contabilidade.webp";
import logoPejota from "@/assets/logos/pejota.webp";
import foundersTransparent from "@/assets/founders-transparent.png";
import { Link } from "react-router-dom";

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
            Agendar Sessão
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
                Planejamento Comercial<br />
                <span className="text-primary">Gratuito 2026</span>
              </h1>
              
              <p className="text-base md:text-lg text-loboh-gray-200 max-w-xl mb-6 animate-fade-up animation-delay-200 leading-relaxed">Sessão estratégica de 60 minutos com o CEO da Loboh, exclusiva para <span className="font-bold">contabilidades em expansão</span>.</p>
              
              {/* Benefits grid */}
              <div className="grid grid-cols-2 gap-2 mb-6 animate-fade-up animation-delay-300">
                {["Metas SMART para 2026", "KPIs por canal de aquisição", "Diagnóstico de maturidade comercial", "O que fazer para bater metas"].map((benefit, index) => <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-loboh-gray-100 text-sm">{benefit}</span>
                  </div>)}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-up animation-delay-400">
                <Button variant="hero" size="lg" onClick={scrollToContact}>
                  Quero meu Planejamento Gratuito
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="default" onClick={() => document.getElementById('para-quem')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blue accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      {/* Para quem é */}
      <section id="para-quem" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Critérios</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Para quem é essa sessão?</h2>
              <p className="text-muted-foreground">Contabilidades em crescimento que querem escalar em 2026.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[{
              icon: Building2,
              text: "Equipe comercial com 3+ colaboradores",
              highlight: false
            }, {
              icon: TrendingUp,
              text: "Buscando escalabilidade e eficiência",
              highlight: false
            }, {
              icon: Users,
              text: "Pelo menos 1 canal de aquisição consistente",
              highlight: false
            }, {
              icon: BarChart3,
              text: "Querem trabalhar com dados e metas claras",
              highlight: false
            }].map((item, index) => <div key={index} className="flex items-center gap-4 p-5 rounded-lg bg-secondary border border-border hover:border-primary/30 transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>)}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="ctaOutline" size="lg" onClick={scrollToContact}>
                Quero participar
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Por que você não pode perder essa oportunidade exclusiva?</span>
              <p className="text-muted-foreground text-lg mt-4 mb-4">
                Visão, Clareza, Racionalidade e Previsibilidade em apenas 60 minutos.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dá uma olhadinha no que preparamos para nossa<br />Sessão Estratégica Gratuita.
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
              icon: Target,
              title: "Metas Comerciais SMART para 2026",
              desc: "O primeiro passo para previsibilidade é ter uma meta SMART. Nosso método exclusivo de definição de metas tem média de assertividade de 96% em nossos clientes. Somos agressivos e realistas!"
            }, {
              icon: GitBranch,
              title: "Metas Comerciais Smart por Canal de Aquisição",
              desc: "Saber quais canais priorizar é o que vai te trazer eficiência operacional. Tenha à sua disposição benchmarking de dezenas de empresas do setor somada à experiência de 10 anos escalando times de alta performance em empresas líderes em seus segmentos."
            }, {
              icon: BarChart3,
              title: "KPIs para acompanhamento por canal de aquisição",
              desc: "Os KPIs te permitem prever o resultado. Saber quantos leads, oportunidades, as conversões e ticket médio necessários para o atingimento do objetivo é essencial para uma gestão comercial efetiva."
            }, {
              icon: Eye,
              title: "Visibilidade dos Recursos Necessários",
              desc: "Baseado em sua meta, histórico e benchmarkings de mercado, definimos quais recursos de pessoas, tecnologias, estratégias e métodos que vocês precisarão adotar para o alcance das metas definidas."
            }, {
              icon: MessageCircleQuestion,
              title: "Insights Estratégicos, Táticos e Operacionais de Gestão",
              desc: "Aproveite o momento para tirar dúvidas com um líder e gestor que escalou equipes de vendas vencedoras em Scale-ups como ContaAzul, Gupy e Rock Content."
            }, {
              icon: ClipboardCheck,
              title: "Diagnóstico de Maturidade de Gestão Comercial",
              desc: "Entenda os pontos fortes e os pontos de melhoria da sua gestão comercial. Faremos uma avaliação 360º da sua Gestão, Tecnologia, Capacitação e Cultura em vendas."
            }].map((item, index) => <div key={index} className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-cta/10 flex items-center justify-center mb-4 group-hover:bg-cta/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>)}
            </div>
            
            <div className="text-center mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-xl font-semibold text-foreground mb-4">Tudo isso sem custo.</p>
              <Button variant="cta" size="lg" onClick={scrollToContact}>
                Solicitar minha sessão gratuita
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Alinhamento de Expectativas</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Como a reunião funciona?</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold">
                <Calendar className="w-5 h-5" />
                <span>Duração: 60 minutos</span>
              </div>
              <p className="text-muted-foreground text-lg mt-6">Conduzida diretamente pelo CEO da Loboh, Tiago Faria (Aspira).</p>
            </div>
            
            <div className="space-y-4">
              {["Mapear sua estrutura comercial atual", "Definir metas realistas e agressivas para 2026", "Identificar quais canais são mais eficientes para sua operação", "Distribuir a meta entre os canais", "Definir seus KPIs por canal de aquisição (leads, oportunidades, conversões, Ticket médio)", "Desenhar os recursos necessários para que o plano aconteça"].map((item, index) => <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-cta flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="py-20 bg-loboh-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que acontece quando Contabilidades usam o Método de Crescimento das Scale-Ups
              <br />
                o método de Crescimento das Scale-Ups
              </h2>
              <p className="text-muted">Ganhos reais em Escalabilidade, Eficiência e Resultados</p>
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
                <p className="text-muted text-sm leading-relaxed">Refinamos ICP, distribuímos metas por canal e capacitamos a equipe em atendimento consultivo.</p>
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
                <p className="text-muted text-sm leading-relaxed">Construímos canal de indicações e compensamos integralmente canal que estava fora do ar.</p>
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
                <p className="text-muted text-sm leading-relaxed">Refinamos ICP e destravamos alavancas comerciais com ajustes táticos e rituais de gestão.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Mais de 20 anos de experiência em matemática comercial</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                Quem vai conduzir sua sessão?
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
                    <span>20+ anos de experiência em bancos de dados, 10+ anos liderando vendas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Co-fundador da agência global de SEO Netlinks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Criador da metodologia Loboh Sales Agile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que foram selecionadas */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Seleção</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Por que empresas como a sua foram selecionadas?</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Selecionamos contabilidades que demonstram sinais claros de expansão:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {["Site moderno e atualizado", "Presença ativa no Instagram ou LinkedIn", "Time comercial estruturado ou em formação", "Engajamento digital crescente"].map((item, index) => <div key={index} className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>)}
            </div>
            
            <p className="text-lg text-foreground mt-12 font-medium">
              Essas são as empresas que mais se beneficiam do nosso planejamento.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Benefícios</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Benefícios diretos para sua contabilidade
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {["Clareza total sobre como crescer em 2026", "Aumento de previsibilidade de receita", "Estratégia desenhada sob medida para sua operação", "Entendimento de quais canais priorizar", "Otimização de pessoas, processos e tecnologia", "Redução de desperdícios e decisões baseadas em achismo"].map((item, index) => <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-final" className="py-20 bg-loboh-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Garanta sua Sessão Gratuita
            </h2>
            
            <p className="text-muted mb-8">
              60 minutos com o CEO da Loboh. Agenda limitada.
            </p>
            
            <Link to="/Formulario">
              <Button variant="hero" size="xl">
                Quero meu Planejamento Gratuito
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            
            <p className="text-muted/60 text-sm mt-6">100% gratuito • Compromisso apenas com seu crescimento.</p>
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
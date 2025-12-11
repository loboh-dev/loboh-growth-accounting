import { Target, TrendingUp, Users, BarChart3, CheckCircle2, Rocket, Calendar, Lightbulb, Zap, Award, Building2, LineChart, ArrowRight, ChevronRight, GitBranch, Eye, MessageCircleQuestion, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consulting.jpg";
import logoWhite from "@/assets/logo-white.svg";
import logoDark from "@/assets/logo-dark.svg";
import logoFordoctor from "@/assets/logos/fordoctor.svg";
import logoAM from "@/assets/logos/am-contabilidade.webp";
import logoPejota from "@/assets/logos/pejota.webp";
const LandingPage = () => {
  const scrollToContact = () => {
    document.getElementById('cta-final')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <img src={logoDark} alt="Loboh" className="h-8" />
          <Button variant="cta" size="sm" onClick={scrollToContact}>
            Quero meu Planejamento
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-loboh-navy/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-8 animate-fade-up animation-delay-100">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Sessão Estratégica Gratuita</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-200">
              Planejamento Comercial Gratuito<br />
              para Contabilidades que Querem<br />
              <span className="text-accent">Crescer como Scale-ups em 2026</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 animate-fade-up animation-delay-200">
              Receba uma sessão estratégica individual com o CEO da Loboh, Tiago Faria (Aspira). Em apenas 60 minutos, você terá metas claras para 2026, KPIs prontos para acompanhar, metas por canal e um diagnóstico 360º da sua gestão comercial, tudo sem custo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Quero meu Planejamento Gratuito
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => document.getElementById('para-quem')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Quero saber mais
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section id="para-quem" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Confira os critérios qualificatórios</span>
              <p className="text-muted-foreground text-lg mt-4 mb-4">A sessão estratégica que <span className="font-bold text-foreground">contabilidades em crescimento</span> adorariam ter feito antes.</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Para quem é essa Sessão Gratuita?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[{
              icon: Building2,
              text: "Possuem 3 ou mais colaboradores na equipe comercial",
              highlight: false
            }, {
              icon: TrendingUp,
              text: "Estão em expansão e querem mais escalabilidade e eficiência em 2026",
              highlight: false
            }, {
              icon: Users,
              text: "Possuem pelo menos 1 canal de aquisição consistente de leads",
              highlight: false
            }, {
              icon: BarChart3,
              text: "Querem trabalhar com dados, metas claras, previsibilidade e ritmo em 2026",
              highlight: false
            }, {
              icon: Rocket,
              text: "Que acreditem verdadeiramente no potencial de crescimento da sua contabilidade em 2026",
              highlight: true
            }].map((item, index) => <div key={index} className={`flex items-start gap-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${item.highlight ? 'md:col-span-2 bg-black border-2 border-accent p-8' : 'bg-card border border-border'}`}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${item.highlight ? 'bg-accent/20' : 'bg-primary/10'}`}>
                    <item.icon className={`w-6 h-6 ${item.highlight ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <p className={`font-medium pt-2 ${item.highlight ? 'text-white text-lg' : 'text-foreground'}`}>{item.text}</p>
                </div>)}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="ctaOutline" size="lg" onClick={scrollToContact}>
                Minha contabilidade vai crescer em 2026
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
                Visão, Clareza, Racionalidade e Sonhos Realizáveis em apenas 60 minutos.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dá uma olhadinha no que preparamos para nossa Sessão Estratégica Gratuita.
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
      <section className="py-24 bg-loboh-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                O que acontece quando as contabilidades usam o método de crescimento das scale-ups
              </h2>
              <p className="text-primary-foreground/70 text-lg">
                Resultados consistentes e previsíveis construídos pela Loboh com contabilidades em expansão.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Case ForDoctor */}
              <div className="group p-8 rounded-2xl bg-loboh-gray-900/50 border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                <div className="h-16 mb-6 flex items-center">
                  <img src={logoFordoctor} alt="ForDoctor" className="h-10 object-contain brightness-0 invert" />
                </div>
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-accent">2x</span>
                  <p className="text-xl font-semibold text-primary-foreground mt-2">mais conversão em todos os canais</p>
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">Em um cenário altamente competitivo, com novos entrantes investindo pesado em tráfego e aquisição, a ForDoctor precisava aumentar o aproveitamento de cada lead. Refinamos ICP, distribuímos metas por canal, estabelecemos processos padronizados para cada canal, implantamos rituais de acompanhamento e capacitamos a equipe em atendimento consultivo.</p>
                <p className="text-accent font-semibold mt-4 text-sm">O resultado: o dobro de conversão em todos os canais em apenas 6 meses.</p>
              </div>

              {/* Case AM Contabilidade */}
              <div className="group p-8 rounded-2xl bg-loboh-gray-900/50 border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                <div className="h-16 mb-6 flex items-center">
                  <img src={logoAM} alt="AM Contabilidade" className="h-10 object-contain brightness-0 invert" />
                </div>
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-accent">3x</span>
                  <p className="text-xl font-semibold text-primary-foreground mt-2">maior a conversão, cobrindo 100% de um canal paralisado</p>
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">A AM enfrentou um incidente crítico que paralisou completamente seu principal canal de aquisição. Em vez de perder o ano, construímos rapidamente um canal de indicações, estruturamos processos, redesenhamos prioridades comerciais e treinamos a equipe para maximizar o aproveitamento dos leads com atendimento consultivo.</p>
                <p className="text-accent font-semibold mt-4 text-sm">
                  O resultado: triplicamos a conversão e compensamos integralmente o canal que estava fora do ar.
                </p>
              </div>

              {/* Case Pejota */}
              <div className="group p-8 rounded-2xl bg-loboh-gray-900/50 border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                <div className="h-16 mb-6 flex items-center">
                  <img src={logoPejota} alt="Pejota Contabilidade" className="h-10 object-contain brightness-0 invert" />
                </div>
                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-bold text-accent">2x</span>
                  <p className="text-xl font-semibold text-primary-foreground mt-2">mais vendas e equipe mais enxuta</p>
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">Após dois anos de crescimento estabilizado, mergulhamos em dados, refinamos continuamente o ICP e destravamos novas alavancas comerciais com ajustes táticos e rituais de gestão. Em paralelo, otimizamos o fluxo de pré-vendas, reduzindo de 3 pessoas para 1 sem perder velocidade.</p>
                <p className="text-accent font-semibold mt-4 text-sm">
                  O resultado: um ano inteiro com 2x mais vendas e uma operação muito mais eficiente.
                </p>
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
      <section id="cta-final" className="py-24 bg-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-8">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Agenda limitada</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Garanta sua Sessão Gratuita com o CEO da Loboh
            </h2>
            
            <p className="text-xl text-primary-foreground/80 mb-10">
              Agenda limitada para contabilidades em expansão.
            </p>
            
            <Button variant="hero" size="xl">
              Quero meu Planejamento Comercial Gratuito
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <p className="text-primary-foreground/60 text-sm mt-8">Sessão de 60 minutos • 100% gratuita • Compromisso apenas com seu crescimento.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={logoWhite} alt="Loboh" className="h-6" />
            <p className="text-primary-foreground/60 text-sm">© 2025 Loboh. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default LandingPage;
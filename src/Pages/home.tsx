import { Button } from "../Components/button";
import { ProjectCard } from "../Components/projectCard";
import { TestimonialCard } from "../Components/testimonialCard";
import { ScrollReveal } from "../Components/ScrollReveal";
import { WhatsAppButton } from "../Components/WhatsAppButton";

export const Home = () => {
  return (
    <div className="relative flex flex-col bg-white text-neutral-800 dark:bg-neutral-950 dark:text-white transition-colors duration-300">
      <main className="flex flex-col gap-16">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-screen w-full px-6 py-12 md:px-12 lg:px-20 overflow-hidden flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10 rounded-2xl bg-neutral-950 text-white">
          
          {/* Vídeo de Background */}
          <video
            className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-50 pointer-events-none z-0"
            src="/v4.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay de Contraste */}
          <div className="absolute inset-0 bg-neutral-950/40 z-0 pointer-events-none" />

          {/* Mosaico de Vídeos em Grid */}
          <div className="relative z-10 grid w-full grid-cols-2 items-center gap-4 lg:w-1/2">
            <video
              className="col-span-2 h-48 sm:h-64 md:h-72 lg:h-80 w-full rounded-2xl object-cover object-center shadow-lg"
              src="/v1.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              className="h-28 sm:h-36 md:h-40 lg:h-44 w-full rounded-2xl object-cover object-center shadow-lg"
              src="/v2.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              className="h-28 sm:h-36 md:h-40 lg:h-44 w-full rounded-2xl object-cover object-center shadow-lg"
              src="/v3.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Conteúdo de Texto */}
          <div className="relative z-10 flex w-full flex-col justify-center gap-8 lg:w-[45%]">
            <div className="flex flex-col gap-3">
              <span className="text-primary text-3xl sm:text-5xl font-semibold uppercase tracking-wider leading-tight">
                AGENCY <br/> <span>DREAMS & CO.</span> 
              </span>
              <h1 className="text-base font-light leading-tight sm:text-lg md:text-xl lg:text-2xl">
                Sua marca não precisa de mais do mesmo. <br />Ela precisa do{" "}
                <span className="text-primary font-bold dark:text-secondary">EXTRAORDINÁRIO!</span>
              </h1>
            </div>

            <hr className="border-primary w-full opacity-60" />

            <div className="flex flex-col gap-3 max-w-md">
              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="w-full rounded-2xl border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={() => window.location.href = "#contato"}>
                Fazer Orçamento
              </Button>
              <Button variant="secundary" onClick={() => window.location.href = "#servicos"}>
                Ver Serviços
              </Button>
            </div>
          </div>
        </section>

        {/* ================= NOSSO POSICIONAMENTO ================= */}
        <section className="flex flex-col gap-8 px-6 py-8 mx-6 md:px-12 lg:px-10 lg:mx-20 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/40 shadow-lg">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white md:text-3xl">
              Nosso Posicionamento
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 p-6 shadow-sm dark:shadow-none h-full">
                <span className="text-primary dark:text-secondary text-2xl font-extrabold">01</span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Criatividade Premium</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Identidades de marca autorais, design que causa impacto à primeira vista e narrativas envolventes que geram desejo imediato.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 p-6 shadow-sm dark:shadow-none h-full">
                <span className="text-primary dark:text-secondary text-2xl font-extrabold">02</span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Performance Científica</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  Campanhas focadas em ROI, otimização contínua de tráfego qualificado e análise de dados para transformar anúncios em vendas.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================= NOSSO OBJETIVO / QUEM SOMOS ================= */}
        <section className="flex flex-col gap-8 px-6 py-8 mx-6 md:px-12 lg:px-10 lg:mx-20 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/90 dark:bg-neutral-900/60 shadow-lg">
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              <span className="text-primary dark:text-secondary text-sm font-semibold uppercase tracking-wider">
                Agency Dreams & Co.
              </span>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-neutral-800 dark:text-neutral-200">
                O Nosso Objetivo é convidá-lo a se tornar um de nós. Somos Profissionais Capacitados. Estudantes Perpétuo.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ================= PROJETOS / SERVIÇOS ================= */}
        <section id="servicos" className="flex flex-col gap-8 py-8 md:px-12 lg:px-10 mx-6 lg:mx-10"> 
          <ScrollReveal>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Projetos</h2>
              <span className="text-primary dark:text-secondary text-sm font-semibold uppercase tracking-wider">
                All Classes
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0.1}>
              <ProjectCard
                imageSrc="/p1.jpg"
                category="BRANDING & DESIGN"
                description="Logotipos, paletas exclusivas, panfletos embalagens e rebrandings que traduzem a alma do seu negócio."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ProjectCard
                imageSrc="/p2.jpg"
                category="TRÁFEGO PAGO"
                description="Campanhas estratégicas no Meta Ads, Google Ads e LinkedIn Ads focadas em conversão máxima."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ProjectCard
                imageSrc="/p3.jpg"
                category="SOCIAL MEDIA"
                description="Criação de conteúdo altamente engajador, design estratégico e gestão profissional de comunidades."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <ProjectCard
                imageSrc="/p4.jpg"
                category="SITES & LANDING PAGES"
                description="Sites modernos e páginas estratégicas e responsivas, projetadas para atrair clientes e impulsionar os resultados do seu negócio."
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ================= DIAGNÓSTICO / BANNER ESTILO NIKE ================= */}
        <ScrollReveal>
          <section
            id="diagnostico"
            className="relative mx-6 overflow-hidden rounded-2xl border border-neutral-200 shadow-lg dark:border-neutral-800 lg:mx-20"
          >
            <video
              className="h-72 w-full object-cover md:h-96 lg:h-105"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/v5.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex flex-col justify-center bg-linear-to-r from-neutral-950/90 via-neutral-950/60 to-transparent p-6 text-white md:p-12">
              <div className="flex max-w-lg flex-col gap-6 text-left">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                    Pronto para tirar o seu projeto do papel?
                  </h2>
                  <p className="text-xl text-neutral-300 md:text-base">
                    Fale diretamente com nosso diretor de estratégia e receba um diagnóstico exclusivo de marca.
                  </p>
                </div>

                <div>
                  <Button onClick={() => (window.location.href = "#contato")}>
                    Agendar Diagnóstico Gratuito
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ================= TESTEMUNHO VIVO ================= */}
        <section className="flex flex-col gap-8 py-8 md:px-12 lg:px-10 mx-6 lg:mx-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Testemunho Vivo</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <TestimonialCard
                avatarSrc="/1.png"
                quote="I wasn't the biggest fitness guy, but thanks to MotivAQ I finally found an easy way to workout from home! The classes are easy to follow and go at a good pace."
                author="Korey Torres"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TestimonialCard
                avatarSrc="/1.png"
                quote="MotivAQ took me to the next level of my at-home exercising. The instructors are really top-notch, which is amazing considering the low cost of the classes!"
                author="Terry Dennis"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <TestimonialCard
                avatarSrc="/1.png"
                quote="Highly recommended! They have such a big variety of classes that I can always find something new and interesting for me based on what I'm in the mood for!"
                author="Katy Gilmore"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ================= FORMULÁRIO DE CONTATO ================= */}
        <ScrollReveal>
          <section id="contato" className="flex flex-col lg:flex-row py-8 md:px-12 lg:px-10 mx-6 lg:mx-10 gap-8 items-center">
            <div className="flex flex-col justify-center gap-3 p-6 dark:shadow-none h-full lg:w-1/2">
              <h3 className="text-2xl font-bold leading-tight text-neutral-900 dark:text-white md:text-4xl">
                Tire todas as suas dúvidas ou envie suas sugestões para nossa equipe.
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
                Entre em contato com a equipe através do nosso e-mail{" "}
                <span className="text-lg font-bold text-primary dark:text-secondary">
                  suporte@agencydreams.com.br
                </span>{" "}
                ou preenchendo o formulário de contato ao lado.
              </p>
            </div>

            <form action="#" className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-4">
              <div className="relative flex flex-col w-full gap-4">
                <input
                  type="text"
                  className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-500 block w-full rounded-2xl border bg-transparent px-5 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nome"
                  required
                />
                <input
                  type="email"
                  className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-500 block w-full rounded-2xl border bg-transparent px-5 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="E-mail"
                  required
                />
                <input
                  type="tel"
                  className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-500 block w-full rounded-2xl border bg-transparent px-5 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Telefone"
                  required
                />
              </div>
              <div className="flex items-center w-full justify-start gap-4">
                <Button>Falar com Especialista</Button>
              </div>
            </form>
          </section>
        </ScrollReveal>

      </main>

      {/* ================= RODAPÉ ================= */}
      <footer className="flex flex-col items-center justify-between gap-8 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 px-6 py-6 md:flex-row md:px-20 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
        <p>CNPJ: 30.180.847/0001-66 | Agency Dreams & Co.</p>
        <p>© 2026 Agency Dreams & Co. | Todos os Direitos Reservados</p>
      </footer>

      {/* ================= BOTÃO FLUTUANTE DO WHATSAPP ================= */}
      <WhatsAppButton phoneNumber="5500000000000" />
    </div>
  );
};
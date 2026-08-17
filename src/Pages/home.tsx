import { useState } from "react";
import { Button } from "../Components/button";
import { ProjectCard } from "../Components/projectCard";
import { TestimonialCard } from "../Components/testimonialCard";
import { ScrollReveal } from "../Components/ScrollReveal";
import { WhatsAppButton } from "../Components/WhatsAppButton";
import { LanguageToggle } from "../Components/LanguageToggle";

// ================= IMPORTS DE MÍDIA (ASSETS) =================
// Vídeos
import videoBg from "../assets/v4.mp4";
import video1 from "../assets/v1.mp4";
import video2 from "../assets/v2.mp4";
import video3 from "../assets/v3.mp4";
import videoBanner from "../assets/v5.mp4";

// Imagens de Projetos
import project1 from "../assets/p1.jpg";
import project2 from "../assets/p2.jpg";
import project3 from "../assets/p3.jpg";
import project4 from "../assets/p4.jpg";

// Avatares / Depoimentos
import avatar1 from "../assets/1.png";

// ================= DADOS DE TRADUÇÃO =================
const translations = {
  PT: {
    heroSub1: "Sua marca não precisa de mais do mesmo. Ela precisa do ",
    heroSub2: "EXTRAORDINÁRIO!",
    emailPlaceholder: "Digite seu e-mail",
    btnQuote: "Fazer Orçamento",
    btnServices: "Ver Serviços",
    posTitle: "Nosso Posicionamento",
    pos1Num: "01",
    pos1Title: "Criatividade Premium",
    pos1Desc: "Identidades de marca autorais, design que causa impacto à primeira vista e narrativas envolventes que geram desejo imediato.",
    pos2Num: "02",
    pos2Title: "Performance Científica",
    pos2Desc: "Campanhas focadas em ROI, otimização contínua de tráfego qualificado e análise de dados para transformar anúncios em vendas.",
    aboutBrand: "Agency Dreams & Co.",
    aboutText: "O Nosso Objetivo é convidá-lo a se tornar um de nós. Somos Profissionais Capacitados. Estudantes Perpétuos.",
    projectsTitle: "Projetos",
    projectsSubtitle: "All Classes",
    p1Cat: "BRANDING & DESIGN",
    p1Desc: "Logotipos, paletas exclusivas, panfletos, embalagens e rebrandings que traduzem a alma do seu negócio.",
    p2Cat: "TRÁFEGO PAGO",
    p2Desc: "Campanhas estratégicas no Meta Ads, Google Ads e LinkedIn Ads focadas em conversão máxima.",
    p3Cat: "SOCIAL MEDIA",
    p3Desc: "Criação de conteúdo altamente engajador, design estratégico e gestão profissional de comunidades.",
    p4Cat: "SITES & LANDING PAGES",
    p4Desc: "Sites modernos e páginas estratégicas e responsivas, projetadas para atrair clientes e impulsionar os resultados do seu negócio.",
    bannerTitle: "Pronto para tirar o seu projeto do papel?",
    bannerDesc: "Fale diretamente com nosso diretor de estratégia e receba um diagnóstico exclusivo de marca.",
    btnBanner: "Agendar Diagnóstico Gratuito",
    testimonialsTitle: "Testemunho Vivo",
    contactTitle: "Tire todas as suas dúvidas ou envie suas sugestões para nossa equipe.",
    contactText: "Entre em contato com a equipe através do nosso e-mail ",
    contactOr: " ou preenchendo o formulário de contato ao lado.",
    formName: "Nome",
    formEmail: "E-mail",
    formPhone: "Telefone",
    btnContact: "Falar com Especialista",
    footerCnpj: "CNPJ: 30.180.847/0001-66 | Agency Dreams & Co.",
    footerRights: "© 2026 Agency Dreams & Co. | Todos os Direitos Reservados",
  },
  EN: {
    heroSub1: "Your brand doesn't need more of the same. It needs the ",
    heroSub2: "EXTRAORDINARY!",
    emailPlaceholder: "Enter your email",
    btnQuote: "Get a Quote",
    btnServices: "View Services",
    posTitle: "Our Positioning",
    pos1Num: "01",
    pos1Title: "Premium Creativity",
    pos1Desc: "Original brand identities, design that creates instant impact, and engaging narratives that drive immediate desire.",
    pos2Num: "02",
    pos2Title: "Scientific Performance",
    pos2Desc: "ROI-focused campaigns, continuous optimization of qualified traffic, and data analysis to turn ads into sales.",
    aboutBrand: "Agency Dreams & Co.",
    aboutText: "Our Goal is to invite you to become one of us. We are Skilled Professionals. Perpetual Students.",
    projectsTitle: "Projects",
    projectsSubtitle: "All Classes",
    p1Cat: "BRANDING & DESIGN",
    p1Desc: "Logos, exclusive color palettes, flyers, packaging, and rebrandings that capture the soul of your business.",
    p2Cat: "PAID TRAFFIC",
    p2Desc: "Strategic campaigns on Meta Ads, Google Ads, and LinkedIn Ads focused on maximum conversion.",
    p3Cat: "SOCIAL MEDIA",
    p3Desc: "Creation of highly engaging content, strategic design, and professional community management.",
    p4Cat: "WEBSITES & LANDING PAGES",
    p4Desc: "Modern websites and strategic, responsive pages designed to attract clients and boost your business results.",
    bannerTitle: "Ready to get your project off the ground?",
    bannerDesc: "Speak directly with our strategy director and get an exclusive brand diagnosis.",
    btnBanner: "Schedule Free Diagnosis",
    testimonialsTitle: "Live Testimonials",
    contactTitle: "Clear all your questions or send your feedback to our team.",
    contactText: "Contact our team via email ",
    contactOr: " or by filling out the contact form.",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone",
    btnContact: "Talk to an Expert",
    footerCnpj: "CNPJ: 30.180.847/0001-66 | Agency Dreams & Co.",
    footerRights: "© 2026 Agency Dreams & Co. | All Rights Reserved",
  },
};

export const Home = () => {
  const [lang, setLang] = useState<"PT" | "EN">("PT");
  const t = translations[lang];

  return (
    <div className="relative flex flex-col bg-white text-neutral-800 dark:bg-neutral-950 dark:text-white transition-colors duration-300">
      
      {/* Botão Flutuante de Idioma no Canto Superior Direito */}
      <LanguageToggle currentLang={lang} onToggle={setLang} />

      <main className="flex flex-col gap-16">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-screen w-full px-6 py-12 md:px-12 lg:px-20 overflow-hidden flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10 rounded-2xl bg-neutral-950 text-white">
          
          {/* Vídeo de Background */}
          <video
            className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-50 pointer-events-none z-0"
            src={videoBg}
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
              src={video1}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              className="h-28 sm:h-36 md:h-40 lg:h-44 w-full rounded-2xl object-cover object-center shadow-lg"
              src={video2}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              className="h-28 sm:h-36 md:h-40 lg:h-44 w-full rounded-2xl object-cover object-center shadow-lg"
              src={video3}
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
                {t.heroSub1}
                <span className="text-primary font-bold dark:text-secondary">{t.heroSub2}</span>
              </h1>
            </div>

            <hr className="border-primary w-full opacity-60" />

            <div className="flex flex-col gap-3 max-w-md">
              <input
                type="text"
                placeholder={t.emailPlaceholder}
                className="w-full rounded-2xl border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={() => window.location.href = "#contato"}>
                {t.btnQuote}
              </Button>
              <Button variant="secundary" onClick={() => window.location.href = "#servicos"}>
                {t.btnServices}
              </Button>
            </div>
          </div>
        </section>

        {/* ================= NOSSO POSICIONAMENTO ================= */}
        <section className="flex flex-col gap-8 px-6 py-8 mx-6 md:px-12 lg:px-10 lg:mx-20 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/40 shadow-lg">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white md:text-3xl">
              {t.posTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 p-6 shadow-sm dark:shadow-none h-full">
                <span className="text-primary dark:text-secondary text-2xl font-extrabold">{t.pos1Num}</span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{t.pos1Title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t.pos1Desc}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 p-6 shadow-sm dark:shadow-none h-full">
                <span className="text-primary dark:text-secondary text-2xl font-extrabold">{t.pos2Num}</span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{t.pos2Title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t.pos2Desc}
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
                {t.aboutBrand}
              </span>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-neutral-800 dark:text-neutral-200">
                {t.aboutText}
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ================= PROJETOS / SERVIÇOS ================= */}
        <section id="servicos" className="flex flex-col gap-8 py-8 md:px-12 lg:px-10 mx-6 lg:mx-10"> 
          <ScrollReveal>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">{t.projectsTitle}</h2>
              <span className="text-primary dark:text-secondary text-sm font-semibold uppercase tracking-wider">
                {t.projectsSubtitle}
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0.1}>
              <ProjectCard
                imageSrc={project1}
                category={t.p1Cat}
                description={t.p1Desc}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ProjectCard
                imageSrc={project2}
                category={t.p2Cat}
                description={t.p2Desc}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ProjectCard
                imageSrc={project3}
                category={t.p3Cat}
                description={t.p3Desc}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <ProjectCard
                imageSrc={project4}
                category={t.p4Cat}
                description={t.p4Desc}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ================= DIAGNÓSTICO / BANNER ================= */}
        <ScrollReveal>
          <section
            id="diagnostico"
            className="relative mx-6 overflow-hidden rounded-2xl border border-neutral-200 shadow-lg dark:border-neutral-800 lg:mx-20"
          >
            <video
              className="h-72 w-full object-cover md:h-96 lg:h-105"
              src={videoBanner}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute inset-0 flex flex-col justify-center bg-linear-to-r from-neutral-950/90 via-neutral-950/60 to-transparent p-6 text-white md:p-12">
              <div className="flex max-w-lg flex-col gap-6 text-left">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                    {t.bannerTitle}
                  </h2>
                  <p className="text-xl text-neutral-300 md:text-base">
                    {t.bannerDesc}
                  </p>
                </div>

                <div>
                  <Button onClick={() => (window.location.href = "#contato")}>
                    {t.btnBanner}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ================= TESTEMUNHO VIVO ================= */}
        <section className="flex flex-col gap-8 py-8 md:px-12 lg:px-10 mx-6 lg:mx-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">{t.testimonialsTitle}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <TestimonialCard
                avatarSrc={avatar1}
                quote="I wasn't the biggest fitness guy, but thanks to MotivAQ I finally found an easy way to workout from home! The classes are easy to follow and go at a good pace."
                author="Korey Torres"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TestimonialCard
                avatarSrc={avatar1}
                quote="MotivAQ took me to the next level of my at-home exercising. The instructors are really top-notch, which is amazing considering the low cost of the classes!"
                author="Terry Dennis"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <TestimonialCard
                avatarSrc={avatar1}
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
                {t.contactTitle}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
                {t.contactText}
                <span className="text-lg font-bold text-primary dark:text-secondary">
                  suporte@agencydreams.com.br
                </span>
                {t.contactOr}
              </p>
            </div>

            <form action="#" className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-4">
              <div className="relative flex flex-col w-full gap-4">
                <input
                  type="text"
                  className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-500 block w-full rounded-2xl border bg-transparent px-5 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t.formName}
                  required
                />
                <input
                  type="email"
                  className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-500 block w-full rounded-2xl border bg-transparent px-5 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t.formEmail}
                  required
                />
                <input
                  type="tel"
                  className="border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-500 block w-full rounded-2xl border bg-transparent px-5 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t.formPhone}
                  required
                />
              </div>
              <div className="flex items-center w-full justify-start gap-4">
                <Button>{t.btnContact}</Button>
              </div>
            </form>
          </section>
        </ScrollReveal>

      </main>

      {/* ================= RODAPÉ ================= */}
      <footer className="flex flex-col items-center justify-between gap-8 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 px-6 py-6 md:flex-row md:px-20 text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
        <p>{t.footerCnpj}</p>
        <p>{t.footerRights}</p>
      </footer>

      {/* ================= BOTÃO FLUTUANTE DO WHATSAPP ================= */}
      <WhatsAppButton phoneNumber="5500000000000" />
    </div>
  );
};
import { useState } from "react";
import { Button } from "../Components/button";
import { ProjectCard } from "../Components/projectCard";
import { TestimonialCard } from "../Components/testimonialCard";
import { ScrollReveal } from "../Components/ScrollReveal";
import { WhatsAppButton } from "../Components/WhatsAppButton";
import { LanguageToggle } from "../Components/LanguageToggle";

// Importação das Mídias
import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import v3 from "../assets/v3.mp4";
import v4 from "../assets/v4.mp4";
import v5 from "../assets/v5.mp4";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

import avatar1 from "../assets/1.png";

// Dicionário de Traduções
const translations = {
  pt: {
    heroTag: "AGENCY DREAMS & CO.",
    heroTitle: "Sua marca não precisa de mais do mesmo. Ela precisa do",
    heroHighlight: "EXTRAORDINÁRIO!",
    inputPlaceholder: "Digite seu e-mail",
    btnQuote: "Fazer Orçamento",
    btnServices: "Ver Serviços",
    posTitle: "Nosso Posicionamento",
    pos1Title: "Criatividade Premium",
    pos1Desc: "Identidades de marca autorais, design que causa impacto à primeira vista e narrativas envolventes que geram desejo imediato.",
    pos2Title: "Performance Científica",
    pos2Desc: "Campanhas focadas em ROI, otimização contínua de tráfego qualificado e análise de dados para transformar anúncios em vendas.",
    aboutTag: "Agency Dreams & Co.",
    aboutText: "O Nosso Objetivo é convidá-lo a se tornar um de nós. Somos Profissionais Capacitados. Estudantes Perpétuos.",
    projectsTitle: "Projetos",
    projectsSub: "Todas as Categorias",
    proj1Cat: "BRANDING & DESIGN",
    proj1Desc: "Logotipos, paletas exclusivas, panfletos, embalagens e rebrandings que traduzem a alma do seu negócio.",
    proj2Cat: "TRÁFEGO PAGO",
    proj2Desc: "Campanhas estratégicas no Meta Ads, Google Ads e LinkedIn Ads focadas em conversão máxima.",
    proj3Cat: "SOCIAL MEDIA",
    proj3Desc: "Criação de conteúdo altamente engajador, design estratégico e gestão profissional de comunidades.",
    proj4Cat: "SITES & LANDING PAGES",
    proj4Desc: "Sites modernos e páginas estratégicas e responsivas, projetadas para atrair clientes e impulsionar os resultados do seu negócio.",
    diagTitle: "Pronto para tirar o seu projeto do papel?",
    diagDesc: "Fale diretamente com nosso diretor de estratégia e receba um diagnóstico exclusivo de marca.",
    btnDiag: "Agendar Diagnóstico Gratuito",
    testTitle: "Testemunho Vivo",
    test1Quote: "Eu não era muito focado em fitness, mas graças à MotivAQ finalmente encontrei uma maneira simples de treinar em casa!",
    test2Quote: "A MotivAQ levou meus treinos em casa para outro nível. Os instrutores são sensacionais!",
    test3Quote: "Altamente recomendado! Têm uma variedade enorme de aulas e sempre acho algo interessante.",
    contactTitle: "Tire todas as suas dúvidas ou envie suas sugestões para nossa equipe.",
    contactDescText: "Entre em contato com a equipe através do nosso e-mail",
    contactDescOr: "ou preenchendo o formulário de contato ao lado.",
    inputName: "Nome",
    inputEmail: "E-mail",
    inputPhone: "Telefone",
    btnContact: "Falar com Especialista",
    footerRights: "Todos os Direitos Reservados",
  },
  en: {
    heroTag: "AGENCY DREAMS & CO.",
    heroTitle: "Your brand doesn't need more of the same. It needs the",
    heroHighlight: "EXTRAORDINARY!",
    inputPlaceholder: "Enter your email",
    btnQuote: "Get a Quote",
    btnServices: "View Services",
    posTitle: "Our Positioning",
    pos1Title: "Premium Creativity",
    pos1Desc: "Bespoke brand identities, high-impact designs at first glance, and engaging storytelling that creates immediate desire.",
    pos2Title: "Scientific Performance",
    pos2Desc: "ROI-driven campaigns, continuous qualified traffic optimization, and data analysis to convert ads into sales.",
    aboutTag: "Agency Dreams & Co.",
    aboutText: "Our Goal is to invite you to become one of us. We are Skilled Professionals. Perpetual Learners.",
    projectsTitle: "Projects",
    projectsSub: "All Classes",
    proj1Cat: "BRANDING & DESIGN",
    proj1Desc: "Logos, exclusive color palettes, flyers, packaging, and rebrandings that express your business identity.",
    proj2Cat: "PAID MEDIA",
    proj2Desc: "Strategic campaigns across Meta Ads, Google Ads, and LinkedIn Ads focused on maximum conversion.",
    proj3Cat: "SOCIAL MEDIA",
    proj3Desc: "Highly engaging content creation, strategic design, and professional community management.",
    proj4Cat: "WEBSITES & LANDING PAGES",
    proj4Desc: "Modern websites and responsive strategic pages engineered to attract clients and boost your business results.",
    diagTitle: "Ready to get your project off the ground?",
    diagDesc: "Speak directly with our strategy director and receive an exclusive brand diagnosis.",
    btnDiag: "Schedule Free Diagnosis",
    testTitle: "Live Testimonials",
    test1Quote: "I wasn't the biggest fitness guy, but thanks to MotivAQ I finally found an easy way to workout from home!",
    test2Quote: "MotivAQ took me to the next level of my at-home exercising. The instructors are really top-notch!",
    test3Quote: "Highly recommended! They have such a big variety of classes that I can always find something new.",
    contactTitle: "Get all your questions answered or send suggestions to our team.",
    contactDescText: "Get in touch with our team via email at",
    contactDescOr: "or by filling out the contact form.",
    inputName: "Name",
    inputEmail: "Email",
    inputPhone: "Phone",
    btnContact: "Speak with a Specialist",
    footerRights: "All Rights Reserved",
  },
};

export const Home = () => {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const t = translations[lang];

  return (
    <div className="relative flex flex-col bg-white text-neutral-800 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      {/* Botão de Idioma Flutuante / Header */}
      <div className="absolute top-6 right-6 z-50">
        <LanguageToggle language={lang} onToggle={setLang} />
      </div>

      <main className="flex flex-col gap-16">
        {/* ================= HERO SECTION ================= */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl bg-neutral-950 px-6 py-12 text-white md:px-12 lg:flex-row lg:gap-10 lg:px-20">
          <video
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-50 mix-blend-luminosity"
            src={v4}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 z-0 bg-neutral-950/40" />

          <div className="relative z-10 grid w-full grid-cols-2 items-center gap-4 lg:w-1/2">
            <video
              className="col-span-2 h-48 w-full rounded-2xl object-cover object-center shadow-lg sm:h-64 md:h-72 lg:h-80"
              src={v1}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              className="h-28 w-full rounded-2xl object-cover object-center shadow-lg sm:h-36 md:h-40 lg:h-44"
              src={v2}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              className="h-28 w-full rounded-2xl object-cover object-center shadow-lg sm:h-36 md:h-40 lg:h-44"
              src={v3}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="relative z-10 flex w-full flex-col justify-center gap-8 lg:w-[45%]">
            <div className="flex flex-col gap-3">
              <span className="text-primary text-3xl font-semibold tracking-wider leading-tight uppercase sm:text-5xl">
                AGENCY <br /> <span>DREAMS & CO.</span>
              </span>
              <h1 className="text-base font-light leading-tight sm:text-lg md:text-xl lg:text-2xl">
                {t.heroTitle} <br />
                <span className="text-primary font-bold dark:text-secondary">
                  {t.heroHighlight}
                </span>
              </h1>
            </div>

            <hr className="border-primary w-full opacity-60" />

            <div className="flex max-w-md flex-col gap-3">
              <input
                type="text"
                placeholder={t.inputPlaceholder}
                className="w-full rounded-2xl border border-neutral-700 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={() => (window.location.href = "#contato")}>
                {t.btnQuote}
              </Button>
              <Button
                variant="secundary"
                onClick={() => (window.location.href = "#servicos")}
              >
                {t.btnServices}
              </Button>
            </div>
          </div>
        </section>

        {/* ================= NOSSO POSICIONAMENTO ================= */}
        <section className="mx-6 flex flex-col gap-8 rounded-2xl border border-neutral-200 bg-neutral-100/80 px-6 py-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900/40 md:px-12 lg:mx-20 lg:px-10">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white md:text-3xl">
              {t.posTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800/80 dark:bg-neutral-950 dark:shadow-none">
                <span className="text-primary text-2xl font-extrabold dark:text-secondary">
                  01
                </span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {t.pos1Title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {t.pos1Desc}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800/80 dark:bg-neutral-950 dark:shadow-none">
                <span className="text-primary text-2xl font-extrabold dark:text-secondary">
                  02
                </span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {t.pos2Title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {t.pos2Desc}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================= NOSSO OBJETIVO / QUEM SOMOS ================= */}
        <section className="mx-6 flex flex-col gap-8 rounded-2xl border border-neutral-200 bg-neutral-100/90 px-6 py-8 shadow-lg dark:border-neutral-800 dark:bg-neutral-900/60 md:px-12 lg:mx-20 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase dark:text-secondary">
                {t.aboutTag}
              </span>
              <p className="text-xl font-medium leading-relaxed text-neutral-800 dark:text-neutral-200 md:text-2xl">
                {t.aboutText}
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ================= PROJETOS / SERVIÇOS ================= */}
        <section id="servicos" className="mx-6 flex flex-col gap-8 py-8 md:px-12 lg:mx-10 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                {t.projectsTitle}
              </h2>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase dark:text-secondary">
                {t.projectsSub}
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0.1}>
              <ProjectCard
                imageSrc={p1}
                category={t.proj1Cat}
                description={t.proj1Desc}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ProjectCard
                imageSrc={p2}
                category={t.proj2Cat}
                description={t.proj2Desc}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ProjectCard
                imageSrc={p3}
                category={t.proj3Cat}
                description={t.proj3Desc}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <ProjectCard
                imageSrc={p4}
                category={t.proj4Cat}
                description={t.proj4Desc}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ================= DIAGNÓSTICO ================= */}
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
              src={v5}
            />

            <div className="absolute inset-0 flex flex-col justify-center bg-linear-to-r from-neutral-950/90 via-neutral-950/60 to-transparent p-6 text-white md:p-12">
              <div className="flex max-w-lg flex-col gap-6 text-left">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                    {t.diagTitle}
                  </h2>
                  <p className="text-xl text-neutral-300 md:text-base">
                    {t.diagDesc}
                  </p>
                </div>

                <div>
                  <Button onClick={() => (window.location.href = "#contato")}>
                    {t.btnDiag}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* ================= TESTEMUNHO VIVO ================= */}
        <section className="mx-6 flex flex-col gap-8 py-8 md:px-12 lg:mx-10 lg:px-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              {t.testTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <TestimonialCard
                avatarSrc={avatar1}
                quote={t.test1Quote}
                author="Korey Torres"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TestimonialCard
                avatarSrc={avatar1}
                quote={t.test2Quote}
                author="Terry Dennis"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <TestimonialCard
                avatarSrc={avatar1}
                quote={t.test3Quote}
                author="Katy Gilmore"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ================= FORMULÁRIO DE CONTATO ================= */}
        <ScrollReveal>
          <section id="contato" className="mx-6 flex flex-col items-center gap-8 py-8 md:px-12 lg:mx-10 lg:flex-row lg:px-10">
            <div className="flex h-full flex-col justify-center gap-3 p-6 dark:shadow-none lg:w-1/2">
              <h3 className="text-2xl font-bold leading-tight text-neutral-900 dark:text-white md:text-4xl">
                {t.contactTitle}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
                {t.contactDescText}{" "}
                <span className="text-primary text-lg font-bold dark:text-secondary">
                  suporte@agencydreams.com.br
                </span>{" "}
                {t.contactDescOr}
              </p>
            </div>

            <form action="#" className="flex w-full flex-col items-center justify-center gap-4 lg:w-1/2">
              <div className="relative flex w-full flex-col gap-4">
                <input
                  type="text"
                  className="block w-full rounded-2xl border border-neutral-300 bg-transparent px-5 py-3 text-base font-normal text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-700 dark:text-white"
                  placeholder={t.inputName}
                  required
                />
                <input
                  type="email"
                  className="block w-full rounded-2xl border border-neutral-300 bg-transparent px-5 py-3 text-base font-normal text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-700 dark:text-white"
                  placeholder={t.inputEmail}
                  required
                />
                <input
                  type="tel"
                  className="block w-full rounded-2xl border border-neutral-300 bg-transparent px-5 py-3 text-base font-normal text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-700 dark:text-white"
                  placeholder={t.inputPhone}
                  required
                />
              </div>
              <div className="flex w-full items-center justify-start gap-4">
                <Button>{t.btnContact}</Button>
              </div>
            </form>
          </section>
        </ScrollReveal>
      </main>

      {/* ================= RODAPÉ ================= */}
      <footer className="flex flex-col items-center justify-between gap-8 border-t border-neutral-200 bg-neutral-100 px-6 py-6 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400 md:flex-row md:px-20 md:text-sm">
        <p>CNPJ: 30.180.847/0001-66 | Agency Dreams & Co.</p>
        <p>© 2026 Agency Dreams & Co. | {t.footerRights}</p>
      </footer>

      {/* ================= BOTÃO FLUTUANTE DO WHATSAPP ================= */}
      <WhatsAppButton phoneNumber="5500000000000" />
    </div>
  );
};
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FileCheck2,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  Megaphone,
  Palette,
  Scale,
  ScrollText,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: Number(index) * 0.08,
      duration: 0.72,
      ease: "easeOut",
    },
  }),
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

type Service = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  previewIcon: LucideIcon;
  accent: string;
  iconTone: string;
  glow: string;
  description: string;
  inclusions: string[];
  agreement: string;
};

const services: Service[] = [
  {
    title: "Digital Marketing",
    subtitle: "Demand, visibility, and measurable growth",
    icon: Megaphone,
    previewIcon: BarChart3,
    accent: "from-rose-50 via-white to-amber-50",
    iconTone: "text-rose-500 bg-rose-50 border-rose-100",
    glow: "shadow-[0_24px_70px_-38px_rgba(244,114,182,0.55)]",
    description:
      "We design campaigns that feel premium and perform cleanly: SEO, paid media, content systems, conversion journeys, lifecycle emails, and reporting dashboards shaped around your business goals.",
    inclusions: [
      "Campaign planning, launch calendars, and funnel strategy",
      "SEO, paid acquisition, creative direction, and analytics",
      "Monthly optimization reviews with clear next actions",
    ],
    agreement:
      "You approve budgets, claims, brand guidelines, and platform access before launch. Performance depends on market conditions, ad platforms, data quality, and timely approvals.",
  },
  {
    title: "Software Development",
    subtitle: "Elegant products, dashboards, and automations",
    icon: Code2,
    previewIcon: Workflow,
    accent: "from-sky-50 via-white to-teal-50",
    iconTone: "text-sky-600 bg-sky-50 border-sky-100",
    glow: "shadow-[0_24px_70px_-38px_rgba(56,189,248,0.5)]",
    description:
      "We build responsive websites, SaaS interfaces, custom dashboards, API integrations, workflow automation, MVPs, and internal tools with a polished user experience and maintainable code.",
    inclusions: [
      "Discovery, architecture, UI implementation, and QA",
      "Milestone-based delivery with staging reviews",
      "Documentation and handoff for approved deliverables",
    ],
    agreement:
      "You provide requirements, credentials, assets, and feedback on schedule. Source code and custom deliverables transfer after final payment unless a separate license says otherwise.",
  },
  {
    title: "Brand Strategy",
    subtitle: "Positioning with a quiet luxury edge",
    icon: Palette,
    previewIcon: Target,
    accent: "from-violet-50 via-white to-emerald-50",
    iconTone: "text-violet-600 bg-violet-50 border-violet-100",
    glow: "shadow-[0_24px_70px_-38px_rgba(139,92,246,0.45)]",
    description:
      "We shape positioning, audience narratives, launch messaging, brand voice, visual direction, naming support, and strategic guidelines that help your company feel clear, premium, and memorable.",
    inclusions: [
      "Positioning workshops and audience insight maps",
      "Messaging architecture, voice, and offer storytelling",
      "Brand system direction for launches and campaigns",
    ],
    agreement:
      "You are responsible for final trademark, regulatory, and legal clearance. Approved strategy assets may be used for your business while draft concepts remain protected unless purchased.",
  },
];


const partnerLogos = [
  { src: "/microsoft.png", alt: "Microsoft" },
  { src: "/amazon.png", alt: "Amazon" },
  { src: "/meta.png", alt: "Meta" },
  { src: "/adobe.png", alt: "Adobe" },
  { src: "/shopify.png", alt: "Shopify" },
  { src: "/linkedin.png", alt: "LinkedIn" },
];

const termsHighlights = [
  "Transparent scopes",
  "Milestone reviews",
  "Premium execution",
  "Soft launch support",
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const PreviewIcon = service.previewIcon;

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className={`group relative overflow-hidden rounded-lg border border-white/80 bg-gradient-to-br ${service.accent} p-6 ${service.glow}`}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-70"
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      />

      <div className="relative flex items-start justify-between gap-5">
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg border ${service.iconTone}`}>
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <motion.div
          animate={{ rotate: [0, 6, -5, 0], y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
          className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/90 bg-white/55 text-slate-400 backdrop-blur-xl"
        >
          <PreviewIcon size={24} strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="relative mt-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
          {service.subtitle}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-900">
          {service.title}
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-600">{service.description}</p>
      </div>

      <div className="relative mt-7 space-y-3">
        {service.inclusions.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
            <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-7 rounded-lg border border-white/80 bg-white/55 p-4 text-sm leading-6 text-slate-500 backdrop-blur-xl">
        <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          <ScrollText size={14} />
          Service term
        </span>
        {service.agreement}
      </div>
    </motion.article>
  );
}

export default function TermsOfService() {
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.28], [0, -70]);
  const ribbonLift = useTransform(scrollYProgress, [0, 0.35], [0, 90]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbfaf7] text-slate-800 selection:bg-[#dfe8df] selection:text-slate-900">
      <HomePageHeader />

      <main>
        <section className="relative min-h-[92vh] overflow-hidden px-6 pb-20 pt-32 md:pt-40">
          <motion.div
            style={{ y: heroLift }}
            className="absolute inset-0 bg-[linear-gradient(120deg,rgba(248,250,252,0.95),rgba(255,247,237,0.88),rgba(236,253,245,0.76),rgba(239,246,255,0.78))]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.88)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px]" />

          <motion.div
            style={{ y: ribbonLift }}
            className="absolute left-0 right-0 top-36 h-28 -rotate-2 border-y border-white/60 bg-white/35 backdrop-blur-2xl"
          />

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-lg border border-white/80 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl"
              >
                <Sparkles size={15} className="text-amber-500" />
                Terms of Service
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mt-8 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 md:text-7xl"
              >
                Comprehensive Services for
                <span className="text-indigo-600">  Digital Dominance</span>
              
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-8 max-w-2xl mx-auto text-base leading-8 text-slate-600 md:text-lg"
              >
                These terms explain how Hireance delivers digital marketing, software
                development, and brand strategy services with transparent scope, refined
                collaboration, and thoughtful ownership rules.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="mt-9 flex flex-wrap justify-center gap-3">
                {termsHighlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/80 bg-white/55 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur-xl"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {highlight}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={4} className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#60728a] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_-24px_rgba(51,65,85,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#54667d]"
                >
                  Explore service terms
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:support@hierance.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/80 bg-white/55 px-6 py-3 text-sm font-semibold text-slate-600 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/80"
                >
                  <Mail size={17} />
                  support@hierance.com
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative border-y border-white/70 bg-white/45 px-6 py-8 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Last updated
              </p>
              <p className="mt-2 text-sm font-medium text-slate-600">June 4, 2026</p>
            </div>
            <motion.div
              className="flex gap-6 overflow-hidden"
              animate={{ x: [0, -18, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {partnerLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-12 w-28 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white/70 px-4"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={86}
                    height={28}
                    className="max-h-6 w-auto object-contain opacity-60 grayscale"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="services" className="relative px-6 pt-16 pb-10 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={stagger}
              className="mx-auto mb-20 max-w-3xl text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400"
              >
                Services covered
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 md:text-5xl"
              >
                Three service worlds, one refined agreement.
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg leading-8 text-slate-600">
                Every project is shaped around a clear scope, a calm delivery rhythm, and
                practical terms that keep creative work, technology, and growth aligned.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid gap-6 lg:grid-cols-3"
            >
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 pt-10 pb-16 md:pt-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto grid max-w-7xl overflow-hidden rounded-lg border border-white/80 bg-white/55 shadow-[0_28px_90px_-58px_rgba(15,23,42,0.5)] backdrop-blur-2xl lg:grid-cols-[1fr_0.72fr]"
          >
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-100 bg-[#fbfaf7] px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-400 shadow-sm">
                <ScrollText size={16} />
                Final note
              </div>
              <h2 className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 md:text-4xl">
                Service work should feel exciting, but the agreement should feel calm.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Hireance may update these terms as services evolve. Continued use of the
                website or approval of new work after updates means you accept the revised
                terms. For questions about a project, quote, invoice, license, or service
                scope, contact our team before approving the work.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Digital marketing", "Software development", "Brand strategy"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-100 bg-white px-4 py-2 text-sm font-medium text-slate-600"
                  >
                    <Sparkles size={15} className="text-amber-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden border-t border-white/70 bg-gradient-to-br from-slate-100 via-[#f7f1e7] to-emerald-50 p-7 lg:border-l lg:border-t-0">
              <motion.div
                animate={{ rotate: [0, 2, -2, 0], y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full rounded-lg border border-white/80 bg-white/55 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/hireance-PNG-logo.png"
                    alt="Hireance"
                    width={118}
                    height={38}
                    className="h-auto w-28 object-contain"
                  />
                  <div className="h-8 w-px bg-slate-200" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Legal desk
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    { label: "Primary contact", value: "support@hierance.com" },
                    { label: "Office", value: "Hyderabad, India" },
                    { label: "Terms status", value: "Active from June 4, 2026" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-white/80 bg-white/60 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-700">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

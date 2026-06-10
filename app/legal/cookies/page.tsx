"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  Variants,
} from "framer-motion";
import {
  Cookie,
  ShieldCheck,
  BarChart2,
  Settings2,
  Megaphone,
  Globe,
  EyeOff,
  SlidersHorizontal,
  ToggleLeft,
  RefreshCw,
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  ArrowDown,
  Fingerprint,
  Lock,
  CheckCircle2,
  FileText,
} from "lucide-react";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";

/* ─── ANIMATION VARIANTS ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

/* ─── FLOATING ORB ─── */
function FloatingOrb({
  size,
  color,
  top,
  left,
  delay = 0,
  duration = 20,
}: {
  size: number;
  color: string;
  top: string;
  left: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: `blur(${size * 0.6}px)`,
      }}
      animate={{
        y: [0, -30, 10, -20, 0],
        x: [0, 15, -10, 20, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* ─── SCROLL PROGRESS ─── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-400 origin-left z-[9999]"
      style={{ scaleX }}
    />
  );
}

/* ─── ANIMATED NUMBER ─── */
function AnimatedNumber({ num }: { num: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.span
      ref={ref}
      className="inline-block"
      initial={{ opacity: 0, scale: 0, rotateY: 90 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, rotateY: 0 }
          : { opacity: 0, scale: 0, rotateY: 90 }
      }
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {num}
    </motion.span>
  );
}

/* ─── ANIMATED SECTION ─── */
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

/* ─── SECTION HEADER ─── */
function SectionHeader({
  id,
  num,
  title,
  icon: Icon,
}: {
  id?: string;
  num: string;
  title: string;
  icon: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      className="flex items-center gap-5 mb-8 mt-16 pb-5 relative scroll-mt-28"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-400 via-indigo-300 to-transparent"
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />

      <motion.div
        className="flex-shrink-0 w-14 h-14 bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm"
        variants={scaleIn}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { type: "spring", stiffness: 400 },
        }}
      >
        <AnimatedNumber num={num} />
      </motion.div>
      <div className="flex-1">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-3"
          variants={slideRight}
        >
          {title}
          {Icon && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Icon className="w-6 h-6 text-indigo-400" />
            </motion.span>
          )}
        </motion.h2>
      </div>
    </motion.div>
  );
}

/* ─── SUBSECTION ─── */
function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="mt-10 mb-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.h3
        className="text-xl font-semibold text-slate-700 mb-5 flex items-center gap-2"
        variants={fadeUp}
      >
        <ChevronRight className="w-5 h-5 text-indigo-400" />
        {title}
      </motion.h3>
      <div className="text-slate-500 space-y-4 leading-relaxed pl-1">
        {children}
      </div>
    </motion.div>
  );
}

/* ─── BULLET ITEM ─── */
function BulletItem({
  title,
  desc,
  index = 0,
}: {
  title: string;
  desc: string;
  index?: number;
}) {
  return (
    <motion.li
      className="flex gap-4 group"
      variants={fadeUp}
      custom={index}
      whileHover={{ x: 6, transition: { type: "spring", stiffness: 400 } }}
    >
      <motion.div
        className="w-2.5 h-2.5 rounded-full bg-indigo-600/20 border border-indigo-600/30 mt-2.5 shrink-0 group-hover:bg-indigo-600/50 transition-colors"
        whileHover={{ scale: 1.6 }}
        transition={{ type: "spring", stiffness: 500 }}
      />
      <div>
        <strong className="text-slate-700 block mb-1">{title}</strong>
        <span className="text-slate-500">{desc}</span>
      </div>
    </motion.li>
  );
}

/* ─── SIMPLE LIST ITEM ─── */
function ListItem({ children, index = 0 }: { children: React.ReactNode; index?: number }) {
  return (
    <motion.li
      className="flex items-start gap-3 group"
      variants={slideRight}
      custom={index}
      whileHover={{ x: 8, transition: { type: "spring", stiffness: 400 } }}
    >
      <motion.div
        className="w-2.5 h-2.5 rounded-full bg-indigo-600/20 border border-indigo-600/30 mt-2 shrink-0 group-hover:bg-indigo-600/50 transition-colors"
        whileHover={{ scale: 1.6 }}
        transition={{ type: "spring", stiffness: 500 }}
      />
      <span>{children}</span>
    </motion.li>
  );
}

/* ─── POLICY TABLE ─── */
function PolicyTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="overflow-x-auto my-10 rounded-2xl border border-slate-200/80 shadow-sm bg-white/60 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-indigo-50/60 border-b border-indigo-100/60">
            {headers.map((h, i) => (
              <th
                key={i}
                className="py-4 px-6 font-semibold text-indigo-700/80 text-sm tracking-wide uppercase whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <motion.tr
              key={i}
              className="hover:bg-indigo-50/30 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{
                delay: 0.1 + i * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {row.map((cell, j) => (
                <td key={j} className="py-4 px-6 text-slate-500 text-sm">
                  {cell}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

/* ─── GLASS CARD ─── */
function GlassCard({
  children,
  className = "",
  hoverGlow = false,
}: {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-white/40 bg-white/50 backdrop-blur-md shadow-sm overflow-hidden ${className}`}
      variants={fadeUp}
      whileHover={
        hoverGlow
          ? {
              y: -4,
              boxShadow: "0 20px 60px -15px rgba(99,102,241,0.15)",
              borderColor: "rgba(99,102,241,0.3)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }
          : { y: -2, transition: { type: "spring", stiffness: 300 } }
      }
    >
      {children}
    </motion.div>
  );
}

/* ─── COOKIE CATEGORY BADGE ─── */
function CategoryBadge({ label, status, color }: { label: string; status: string; color: string }) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-1 px-5 py-3 rounded-xl border ${color} bg-white/60 backdrop-blur-sm`}
      variants={scaleIn}
      whileHover={{ y: -3, transition: { type: "spring", stiffness: 400 } }}
    >
      <span className="font-semibold text-slate-700 text-sm">{label}</span>
      <span className="text-xs text-slate-400">{status}</span>
    </motion.div>
  );
}

/* ─── MAIN PAGE ─── */
const contentSections = [
  { id: "sec-01", num: "01", title: "What Are Cookies?" },
  { id: "sec-02", num: "02", title: "How We Use Cookies" },
  { id: "sec-03", num: "03", title: "Types of Cookies We Use" },
  { id: "sec-04", num: "04", title: "Detailed Cookie Reference" },
  { id: "sec-05", num: "05", title: "Third-Party Cookies" },
  { id: "sec-06", num: "06", title: "Do Not Track Signals" },
  { id: "sec-07", num: "07", title: "Managing Your Preferences" },
  { id: "sec-08", num: "08", title: "Cookie Consent & Withdrawal" },
  { id: "sec-09", num: "09", title: "Policy Updates" },
  { id: "sec-10", num: "10", title: "Contact Us" },
];

export default function CookiesPolicy() {
  const [activeSection, setActiveSection] = useState("sec-01");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    contentSections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      contentSections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-800">
      <ScrollProgress />
      <HomePageHeader />

      {/* ─── Header Section ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-white pt-32 pb-12 border-b border-slate-100">
        <div className="absolute inset-0">
          <FloatingOrb
            size={300}
            color="rgba(99,102,241,0.05)"
            top="-5%"
            left="-5%"
            duration={25}
          />
          <FloatingOrb
            size={250}
            color="rgba(129,140,248,0.04)"
            top="10%"
            left="75%"
            delay={3}
            duration={22}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left max-w-4xl"
          >
            {/* Legal Tag */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-6 shadow-sm"
            >
              <ShieldCheck size={12} />
              Legal
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-5"
              variants={fadeUp}
            >
              Cookie <span className="text-indigo-600">Policy</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-slate-500 max-w-3xl leading-relaxed mb-8 font-light"
              variants={fadeUp}
            >
              This Cookie Policy explains how Hierance uses cookies and similar tracking technologies across all our platforms — what they are, why we use them, and how you can control them.
            </motion.p>

            {/* Badges row */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={fadeUp}
            >
              {[
                { icon: Clock, text: "Effective: January 1, 2025" },
                { icon: RefreshCw, text: "Updated: January 1, 2025" },
                { icon: Lock, text: "All Hierance Platforms" },
              ].map((badge, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200/60 rounded-full shadow-sm text-xs font-medium text-slate-500 transition-colors hover:border-indigo-300"
                >
                  <badge.icon className="w-3.5 h-3.5 text-indigo-400" />
                  {badge.text}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Sticky Sidebar contents table */}
          <aside className="hidden lg:block sticky top-28 bg-slate-50/60 border border-slate-200/50 p-6 rounded-2xl w-full max-w-[280px] shadow-sm">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
              <FileText size={16} className="text-slate-400" />
              Contents
            </span>
            <nav className="space-y-1">
              {contentSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(sec.id);
                  }}
                  className={`flex items-start gap-3 py-2.5 px-3 rounded-lg text-xs font-medium transition-all ${
                    activeSection === sec.id
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/70"
                  }`}
                >
                  <span className={`font-mono text-[10px] ${activeSection === sec.id ? "text-indigo-200" : "text-indigo-400"}`}>
                    {sec.num}
                  </span>
                  <span>{sec.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Actual Content (Right side) */}
          <div className="space-y-16 lg:pl-6">
            {/* ── Section 01 ── */}
            <SectionHeader id="sec-01" num="01" title="What Are Cookies?" icon={Cookie} />
          <AnimatedSection>
            <motion.p className="text-slate-500 text-lg leading-relaxed" variants={fadeUp}>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to website operators.
            </motion.p>
            <motion.p className="text-slate-500 text-lg leading-relaxed mt-5" variants={fadeUp} custom={1}>
              In addition to cookies, we may use other similar tracking technologies, including:
            </motion.p>
            <motion.ul className="space-y-5 mt-6" variants={staggerContainer}>
              <BulletItem index={0} title="Web Beacons (Pixel Tags):" desc="Tiny transparent images embedded in web pages or emails that help us track whether a page has been viewed or an email has been opened." />
              <BulletItem index={1} title="Local Storage (HTML5):" desc="A storage mechanism in your browser that allows websites to store data locally on your device, similar to cookies but with greater storage capacity." />
              <BulletItem index={2} title="Session Storage:" desc="Temporary storage that is cleared when your browser session ends." />
              <BulletItem index={3} title="Fingerprinting:" desc="A technique that collects information about your device configuration to create a unique identifier — used only for security and fraud prevention purposes." />
              <BulletItem index={4} title="SDKs:" desc="Code embedded in our mobile applications that functions similarly to cookies by collecting usage and analytics data." />
            </motion.ul>
            <motion.div
              className="relative bg-indigo-50/50 border border-indigo-100/60 rounded-2xl p-7 mt-8 overflow-hidden"
              variants={fadeUp}
              custom={2}
              whileHover={{ borderColor: "rgba(99,102,241,0.3)", transition: { duration: 0.3 } }}
            >
              <motion.div className="absolute top-0 right-0 w-40 h-40 bg-indigo-200/20 rounded-full -mr-10 -mt-10" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }} />
              <p className="relative text-indigo-700/80 font-medium leading-relaxed">
                References to &ldquo;cookies&rdquo; in this Policy include all similar tracking technologies listed above unless the context requires otherwise.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* ── 02 How We Use Cookies ── */}
          <SectionHeader id="sec-02" num="02" title="How We Use Cookies" icon={Settings2} />
          <AnimatedSection>
            <motion.p className="text-slate-500 text-lg leading-relaxed mb-6" variants={fadeUp}>
              We use cookies across all Hierance platforms for the following core purposes:
            </motion.p>
          </AnimatedSection>
          <AnimatedSection className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Lock, title: "Authentication & Security", desc: "Keeping you logged in, protecting your account, and detecting fraudulent or malicious activity." },
              { icon: Settings2, title: "Platform Functionality", desc: "Remembering your cart contents, form inputs, language preferences, and accessibility settings." },
              { icon: BarChart2, title: "Performance Monitoring", desc: "Understanding how users navigate our platforms so we can identify and fix technical issues." },
              { icon: BarChart2, title: "Analytics & Insights", desc: "Measuring traffic patterns, feature usage, and content engagement to improve our Services." },
              { icon: Fingerprint, title: "Personalisation", desc: "Tailoring content, event recommendations, product suggestions, and creator matches to your interests." },
              { icon: Megaphone, title: "Advertising", desc: "Delivering relevant promotional messages across our platforms and selected third-party networks (only with your consent)." },
              { icon: SlidersHorizontal, title: "A/B Testing", desc: "Testing different versions of features or content to improve user experience." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group flex items-start gap-4 bg-white/70 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl shadow-sm cursor-default"
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.25)", boxShadow: "0 12px 40px -10px rgba(99,102,241,0.1)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="bg-indigo-50 p-2.5 rounded-xl mt-0.5 group-hover:bg-indigo-100 transition-colors">
                  <item.icon className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <strong className="text-slate-700 block mb-1">{item.title}</strong>
                  <span className="text-slate-400 text-sm leading-relaxed">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* ── 03 Types of Cookies ── */}
          <SectionHeader id="sec-03" num="03" title="Types of Cookies We Use" icon={SlidersHorizontal} />
          <AnimatedSection className="space-y-6">
            {[
              {
                icon: ShieldCheck,
                label: "Essential Cookies",
                badge: "Always Active",
                badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
                accentColor: "from-indigo-500 to-indigo-600",
                desc: "These cookies are strictly necessary for our platforms to function. They cannot be disabled. Without them, features like login, payment processing, and shopping carts would not work.",
                examples: "Session tokens, CSRF protection tokens, authentication cookies, load balancer cookies, cookie consent state storage.",
                legal: "Necessary for performance of contract / Legitimate interests",
              },
              {
                icon: BarChart2,
                label: "Analytics Cookies",
                badge: "Opt-Out Available",
                badgeColor: "bg-blue-50 text-blue-600 border-blue-200/60",
                accentColor: "from-indigo-400 to-indigo-500",
                desc: "These cookies help us understand how visitors interact with our platforms by collecting and reporting information anonymously. They help us improve user experience, identify popular features, and measure the effectiveness of our content.",
                examples: "Google Analytics, Mixpanel, Hotjar session recordings, page view tracking, funnel analytics, crash reporting.",
                legal: "Legitimate interests (you may opt out)",
              },
              {
                icon: Settings2,
                label: "Preference Cookies",
                badge: "Opt-Out Available",
                badgeColor: "bg-blue-50 text-blue-600 border-blue-200/60",
                accentColor: "from-indigo-400 to-purple-400",
                desc: "These cookies remember your choices and settings to provide a more personalised experience. They help our platforms remember your selected language, theme preference (light/dark), region, and display settings across sessions.",
                examples: "Theme preference (sf-theme), language selection, display density, notification preferences, recently viewed items.",
                legal: "Consent / Legitimate interests",
              },
              {
                icon: Megaphone,
                label: "Marketing Cookies",
                badge: "Consent Required",
                badgeColor: "bg-amber-50 text-amber-600 border-amber-200/60",
                accentColor: "from-purple-400 to-indigo-400",
                desc: "These cookies are used to deliver advertisements and marketing communications that are relevant to you. They track your browsing habits across our platforms and may be used in conjunction with advertising networks. These cookies are only placed with your explicit consent.",
                examples: "Google Ads remarketing, Meta Pixel, campaign attribution tracking, conversion tracking pixels, cross-site behavioural targeting.",
                legal: "Consent only — you must actively opt in",
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden bg-white/70 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.2)", boxShadow: "0 16px 50px -12px rgba(99,102,241,0.1)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                {/* gradient top bar */}
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cat.accentColor}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                />
                <div className="p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-indigo-50 p-3 rounded-xl">
                      <cat.icon className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-slate-800">{cat.label}</h3>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cat.badgeColor}`}>{cat.badge}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-4">{cat.desc}</p>
                  <div className="bg-slate-50/70 rounded-xl p-4 space-y-2">
                    <p className="text-sm text-slate-500"><span className="font-semibold text-slate-600">Examples:</span> {cat.examples}</p>
                    <p className="text-sm text-slate-500"><span className="font-semibold text-slate-600">Legal basis:</span> {cat.legal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* ── 04 Detailed Cookie Reference ── */}
          <SectionHeader id="sec-04" num="04" title="Detailed Cookie Reference" icon={Globe} />
          <AnimatedSection>
            <motion.p className="text-slate-500 text-lg leading-relaxed mb-2" variants={fadeUp}>
              The following table lists the specific cookies set by Hierance platforms. Third-party cookies may change independently of this list — refer to the respective provider&apos;s documentation for the most current information.
            </motion.p>
          </AnimatedSection>
          <PolicyTable
            headers={["Cookie Name", "Provider", "Category", "Purpose", "Duration"]}
            rows={[
              ["sf_session", "Hierance", "Essential", "Maintains your login session across pages", "Session"],
              ["sf_csrf", "Hierance", "Essential", "Cross-site request forgery protection token", "Session"],
              ["sf_auth", "Hierance", "Essential", "Secure authentication token for logged-in users", "30 days"],
              ["sf_cart", "Hierance", "Essential", "Stores shopping cart contents on Filmskart", "7 days"],
              ["sf_consent", "Hierance", "Essential", "Records your cookie consent preferences", "1 year"],
              ["PHPSESSID", "Hierance", "Essential", "PHP server session identifier", "Session"],
              ["sf_pbl_token", "Payblee", "Essential", "Secure payment session token for Payblee transactions", "Session"],
              ["ef_ticket_lock", "Events Fare", "Essential", "Temporarily holds ticket reservation during checkout", "15 min"],
              ["_ga", "Google Analytics", "Analytics", "Distinguishes unique users; tracks sessions and pageviews", "2 years"],
              ["_ga_*", "Google Analytics", "Analytics", "Used to persist session state in GA4", "2 years"],
              ["_gid", "Google Analytics", "Analytics", "Distinguishes users; expires after 24 hours", "24 hours"],
              ["_gat", "Google Analytics", "Analytics", "Throttles request rate to Google Analytics servers", "1 minute"],
              ["mp_*", "Mixpanel", "Analytics", "Product analytics — tracks feature usage and user flows", "1 year"],
              ["_hjSession*", "Hotjar", "Analytics", "Identifies a user session for heatmaps and session recordings", "Session"],
              ["_hjSessionUser*", "Hotjar", "Analytics", "Identifies returning Hotjar users across visits", "1 year"],
              ["sf-theme", "Hierance", "Preferences", "Stores your light/dark theme preference across sessions", "1 year"],
              ["sf_lang", "Hierance", "Preferences", "Remembers your selected language preference", "1 year"],
              ["sf_region", "Hierance", "Preferences", "Stores your location/region for relevant event listings", "6 months"],
              ["sf_notif", "Hierance", "Preferences", "Notification display preferences and dismissed alerts", "6 months"],
              ["_fbp", "Meta (Facebook)", "Marketing", "Identifies browsers for Facebook/Instagram ad targeting", "90 days"],
              ["_fbc", "Meta (Facebook)", "Marketing", "Stores last Facebook ad click for conversion attribution", "90 days"],
              ["_gcl_au", "Google Ads", "Marketing", "Conversion measurement and remarketing for Google Ads", "90 days"],
              ["IDE", "Google DoubleClick", "Marketing", "Retargeting — tracks users across websites for relevant ads", "1 year"],
            ]}
          />
          <AnimatedSection>
            <motion.p className="text-sm text-slate-400 italic" variants={fadeUp}>
              * Cookie names marked with asterisks (*) represent a prefix — actual cookie names include a unique identifier suffix generated per user or session.
            </motion.p>
          </AnimatedSection>

          {/* ── 05 Third-Party Cookies ── */}
          <SectionHeader id="sec-05" num="05" title="Third-Party Cookies" icon={Globe} />
          <AnimatedSection>
            <motion.p className="text-slate-500 text-lg leading-relaxed mb-6" variants={fadeUp}>
              Some cookies on our platforms are set by third-party services that appear on our pages. We do not control these cookies. The third parties setting them are responsible for how they use the data collected. Key third-party cookie providers and links to their policies include:
            </motion.p>
          </AnimatedSection>
          <PolicyTable
            headers={["Provider", "Purpose", "Opt-Out / Policy"]}
            rows={[
              ["Google Analytics", "Website analytics and traffic measurement", "tools.google.com/dlpage/gaoptout"],
              ["Google Ads / DoubleClick", "Advertising and remarketing", "adssettings.google.com"],
              ["Meta (Facebook/Instagram)", "Social advertising and conversion tracking", "facebook.com/policies/cookies"],
              ["Hotjar", "Heatmaps and session recording for UX research", "hotjar.com/legal/compliance/opt-out"],
              ["Mixpanel", "Product analytics and user behaviour tracking", "mixpanel.com/optout"],
              ["PhonePe / Razorpay / Cashfree / EaseBuzz", "Payment processing (essential)", "Refer to respective payment provider policies"],
            ]}
          />
          <AnimatedSection>
            <motion.p className="text-slate-500 text-lg leading-relaxed" variants={fadeUp}>
              Third-party cookie providers may update their cookies and data practices independently. We recommend reviewing their privacy and cookie policies periodically for the most up-to-date information.
            </motion.p>
          </AnimatedSection>

          {/* ── 06 Do Not Track ── */}
          <SectionHeader id="sec-06" num="06" title="Do Not Track Signals" icon={EyeOff} />
          <AnimatedSection className="text-slate-500 text-lg space-y-5 leading-relaxed">
            <motion.p variants={fadeUp}>
              Some browsers include a &ldquo;Do Not Track&rdquo; (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no universally accepted standard for how websites should respond to DNT signals, and our platforms do not currently alter their behaviour in response to DNT browser requests.
            </motion.p>
            <motion.p variants={fadeUp} custom={1}>
              However, you can use the cookie management methods described in Section 7 to limit tracking. We also honour the Global Privacy Control (GPC) signal where technically feasible, which will be treated as a request to opt out of marketing cookies.
            </motion.p>
            <motion.p variants={fadeUp} custom={2}>
              We will continue to monitor developments in browser DNT standards and will update this policy if industry-wide standards emerge.
            </motion.p>
          </AnimatedSection>

          {/* ── 07 Managing Preferences ── */}
          <SectionHeader id="sec-07" num="07" title="Managing Your Preferences" icon={SlidersHorizontal} />
          <AnimatedSection>
            <motion.p className="text-slate-500 text-lg leading-relaxed mb-6" variants={fadeUp}>
              You have several options for controlling cookies. Please note that disabling certain cookies may impact the functionality and experience of our platforms.
            </motion.p>
          </AnimatedSection>

          <SubSection title="7.1 Cookie Consent Manager">
            <motion.p className="leading-relaxed" variants={fadeUp}>
              When you first visit any Hierance platform, you will be presented with a cookie consent banner allowing you to accept all cookies, reject non-essential cookies, or customise your preferences by category. You can revisit and change your preferences at any time by clicking the &ldquo;Cookie Preferences&rdquo; link in the footer of any page.
            </motion.p>
          </SubSection>

          <SubSection title="7.2 Browser Settings">
            <motion.p className="leading-relaxed mb-6" variants={fadeUp}>
              Most browsers allow you to control cookies through their settings. Here is how to manage cookies in major browsers:
            </motion.p>
            <PolicyTable
              headers={["Browser", "How to Manage Cookies"]}
              rows={[
                ["Google Chrome", "Settings → Privacy and security → Cookies and other site data"],
                ["Mozilla Firefox", "Settings → Privacy & Security → Cookies and Site Data"],
                ["Apple Safari", "Preferences → Privacy → Manage Website Data"],
                ["Microsoft Edge", "Settings → Cookies and site permissions → Cookies and data stored"],
                ["Opera", "Settings → Privacy & security → Site Settings → Cookies"],
                ["Samsung Browser", "Settings → Privacy → Sites and downloads → Cookie management"],
              ]}
            />
          </SubSection>

          <SubSection title="7.3 Opt-Out Links">
            <motion.p className="leading-relaxed mb-5" variants={fadeUp}>
              For specific analytics and advertising cookies, you can opt out directly through the following tools:
            </motion.p>
            <motion.ul className="space-y-4" variants={staggerContainer}>
              {[
                { label: "Google Analytics Opt-Out:", link: "tools.google.com/dlpage/gaoptout", linkText: "Google Analytics Opt-out Browser Add-on" },
                { label: "Google Ad Personalisation:", link: "adssettings.google.com", linkText: "adssettings.google.com" },
                { label: "Meta Ad Preferences:", link: "facebook.com/ads/preferences", linkText: "facebook.com/ads/preferences" },
                { label: "Hotjar Opt-Out:", link: "hotjar.com/legal/compliance/opt-out", linkText: "hotjar.com/legal/compliance/opt-out" },
                { label: "Network Advertising Initiative:", link: "optout.networkadvertising.org", linkText: "NAI Opt-Out Tool" },
              ].map((item, i) => (
                <ListItem key={i} index={i}>
                  <strong className="text-slate-700">{item.label}</strong>{" "}
                  <a href={`https://${item.link}`} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600 hover:underline transition-colors font-medium">{item.linkText}</a>
                </ListItem>
              ))}
            </motion.ul>
          </SubSection>

          <SubSection title="7.4 Mobile Devices">
            <motion.p className="leading-relaxed mb-5" variants={fadeUp}>
              On mobile devices, you can limit ad tracking through your device settings:
            </motion.p>
            <motion.ul className="space-y-4 mb-6" variants={staggerContainer}>
              <ListItem index={0}><strong className="text-slate-700">iOS (iPhone/iPad):</strong> Settings → Privacy &amp; Security → Tracking → disable &ldquo;Allow Apps to Request to Track&rdquo;</ListItem>
              <ListItem index={1}><strong className="text-slate-700">Android:</strong> Settings → Privacy → Ads → opt out of Ads Personalisation</ListItem>
            </motion.ul>
            <motion.div
              className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-6 text-amber-800/80 shadow-sm leading-relaxed"
              variants={fadeUp}
              custom={3}
            >
              Blocking or deleting essential cookies will significantly impact platform functionality. You may not be able to log in, complete payments, or access certain features if essential cookies are disabled.
            </motion.div>
          </SubSection>

          {/* ── 08 Cookie Consent & Withdrawal ── */}
          <SectionHeader id="sec-08" num="08" title="Cookie Consent & Withdrawal" icon={ToggleLeft} />

          <SubSection title="8.1 Giving Consent">
            <motion.p className="leading-relaxed" variants={fadeUp}>
              When you first visit a Hierance platform, we will present you with a cookie consent notice. Your consent choices are recorded in the sf_consent cookie and respected across your session and future visits on the same device and browser.
            </motion.p>
            <motion.p className="leading-relaxed mt-4" variants={fadeUp} custom={1}>
              Where Indian law or applicable regulations require explicit opt-in consent (particularly for marketing cookies and sensitive data), we will not set such cookies until you have actively provided that consent.
            </motion.p>
          </SubSection>

          <SubSection title="8.2 Withdrawing Consent">
            <motion.p className="leading-relaxed mb-5" variants={fadeUp}>
              You may withdraw or change your cookie consent at any time by:
            </motion.p>
            <motion.ul className="space-y-4 mb-6" variants={staggerContainer}>
              <ListItem index={0}>Clicking <strong className="text-slate-700">&ldquo;Cookie Preferences&rdquo;</strong> in the footer of any Hierance page</ListItem>
              <ListItem index={1}>Clearing your browser cookies (which resets your consent preferences)</ListItem>
              <ListItem index={2}>Contacting us at <a href="mailto:privacy@hierance.com" className="text-indigo-500 hover:text-indigo-600 hover:underline font-medium transition-colors">privacy@hierance.com</a> to request deletion of your consent record</ListItem>
            </motion.ul>
            <motion.p className="leading-relaxed" variants={fadeUp} custom={3}>
              Withdrawal of consent does not affect the lawfulness of processing carried out prior to withdrawal. Withdrawing consent for essential cookies is not possible as they are required for core service functionality.
            </motion.p>
          </SubSection>

          <SubSection title="8.3 Children's Consent">
            <motion.p className="leading-relaxed" variants={fadeUp}>
              In accordance with the Digital Personal Data Protection Act, 2023, we obtain verifiable parental consent before placing any non-essential cookies on devices used by children under 18. Our platforms are not directed at users under 18 and we do not knowingly set tracking cookies for such users.
            </motion.p>
          </SubSection>

          <AnimatedSection>
            <motion.div
              className="relative overflow-hidden bg-gradient-to-r from-indigo-50/70 to-purple-50/50 border border-indigo-100/50 rounded-2xl p-7 text-center mt-6"
              variants={fadeUp}
              whileHover={{ scale: 1.01, transition: { type: "spring", stiffness: 300 } }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-100/0 via-indigo-100/30 to-indigo-100/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="relative text-indigo-600/80 font-semibold text-base leading-relaxed">
                Your theme preference (light/dark mode) is stored as a preference cookie named <code className="bg-indigo-100/60 text-indigo-700 px-2 py-0.5 rounded text-sm font-mono">sf-theme</code>. This is a functional preference cookie that enhances your experience and is set with implicit consent when you toggle the theme.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* ── 09 Policy Updates ── */}
          <SectionHeader id="sec-09" num="09" title="Policy Updates" icon={RefreshCw} />
          <AnimatedSection className="text-slate-500 text-lg space-y-5 leading-relaxed">
            <motion.p variants={fadeUp}>
              We may update this Cookie Policy from time to time to reflect changes in our technology, legal requirements, or business practices. When we make significant changes, we will:
            </motion.p>
            <motion.ul className="space-y-3" variants={staggerContainer}>
              {[
                'Update the "Last Updated" date at the top of this page',
                "Display a notice on our platforms for at least 14 days after the update",
                "Re-present the cookie consent banner where the changes affect how consent is collected",
                "Send email notification to registered users for material changes",
              ].map((item, i) => (
                <ListItem key={i} index={i}>{item}</ListItem>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} custom={2}>
              We encourage you to periodically review this Cookie Policy to stay informed about how we use cookies. Your continued use of our Services following the posting of changes constitutes your acknowledgement of those changes.
            </motion.p>
            <motion.p variants={fadeUp} custom={3}>
              Previous versions of this Cookie Policy are available upon request by contacting{" "}
              <a href="mailto:privacy@hierance.com" className="text-indigo-500 hover:text-indigo-600 hover:underline font-medium transition-colors">privacy@hierance.com</a>.
            </motion.p>
          </AnimatedSection>

          {/* ── 10 Contact Us ── */}
          <SectionHeader id="sec-10" num="10" title="Contact Us" icon={Mail} />
          <AnimatedSection className="text-slate-500 text-lg space-y-6 leading-relaxed">
            <motion.p variants={fadeUp}>
              If you have any questions, concerns, or requests regarding this Cookie Policy or our use of tracking technologies, please contact our Privacy team:
            </motion.p>

            {/* Premium Contact Card */}
            <motion.div
              className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white rounded-[2rem] p-10 md:p-14 shadow-2xl overflow-hidden mt-10 mb-6"
              variants={fadeUp}
              custom={1}
              whileHover={{ scale: 1.005, transition: { type: "spring", stiffness: 200, damping: 20 } }}
            >
              {/* Animated orbs */}
              <motion.div
                className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(129,140,248,0.1), transparent 70%)" }}
                animate={{ scale: [1, 1.3, 1], x: [0, -15, 0], y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              {/* Grid */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)`, backgroundSize: "40px 40px" }} />

              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-10 text-indigo-300 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Privacy & Data Team — Hierance
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-10 relative z-10">
                <div className="space-y-8">
                  <motion.div className="flex gap-5 group" whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}>
                    <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors">
                      <MapPin className="w-6 h-6 text-indigo-300 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-xl mb-2">Registered Office</p>
                      <p className="text-slate-400 leading-relaxed">
                        Hierance Services Private Limited<br />
                        7-1-458 Ameerpet, Hyderabad<br />
                        Telangana, India — 500016
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="flex gap-5 group" whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}>
                    <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors">
                      <Clock className="w-6 h-6 text-indigo-300 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-xl mb-2">Response Time</p>
                      <p className="text-slate-400 leading-relaxed">Within 30 days of receipt</p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <motion.div className="flex gap-5 group" whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}>
                    <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors">
                      <Mail className="w-6 h-6 text-indigo-300 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-xl mb-2">Email</p>
                      <p className="text-slate-400 mb-2">
                        <span className="text-slate-500 block text-xs mb-1 uppercase tracking-[0.15em] font-semibold">Privacy queries</span>
                        <a href="mailto:privacy@hierance.com" className="hover:text-white transition-colors text-indigo-300 text-lg">privacy@hierance.com</a>
                      </p>
                      <p className="text-slate-400">
                        <span className="text-slate-500 block text-xs mb-1 uppercase tracking-[0.15em] font-semibold">General queries</span>
                        <a href="mailto:info@hierance.com" className="hover:text-white transition-colors text-indigo-300 text-lg">info@hierance.com</a>
                      </p>
                    </div>
                  </motion.div>
                  <motion.div className="flex gap-5 group" whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}>
                    <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors">
                      <Phone className="w-6 h-6 text-indigo-300 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-xl mb-2">Phone</p>
                      <p className="text-slate-400 text-lg">040 47088764</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.span
                  className="bg-indigo-500/15 text-indigo-300 px-6 py-3 rounded-full text-sm font-medium border border-indigo-500/20 flex items-center gap-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(99,102,241,0.25)", transition: { type: "spring", stiffness: 400 } }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  DPDP Act, 2023 Compliant
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.p
              className="p-7 bg-slate-50/60 backdrop-blur-sm border border-slate-100 rounded-2xl text-slate-400 italic leading-relaxed shadow-sm"
              variants={fadeUp}
              custom={3}
            >
              If you are dissatisfied with our response to a cookie-related complaint, you may contact the Data Protection Board of India (once established under the DPDP Act, 2023) or seek other appropriate regulatory remedies.
            </motion.p>
          </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

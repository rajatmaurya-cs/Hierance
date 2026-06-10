"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  Variants,
} from "framer-motion";
import {
  Shield,
  Database,
  Lock,
  Eye,
  Users,
  FileText,
  Globe,
  Scale,
  Bell,
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Fingerprint,
  ArrowDown,
} from "lucide-react";
import HomePageHeader from "@/shared/components/layout/HomePageHeader";
import Footer from "@/shared/components/layout/Footer";

/* ──────────────────── ANIMATION VARIANTS ──────────────────── */

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

/* ──────────────────── ANIMATED COMPONENTS ──────────────────── */

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

function PolicyTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
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
                className="py-4 px-6 font-semibold text-indigo-700/80 text-sm tracking-wide uppercase"
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
                <td key={j} className="py-4 px-6 text-slate-500">
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

const contentSections = [
  { id: "sec-01", num: "01", title: "Introduction & Scope" },
  { id: "sec-02", num: "02", title: "Information We Collect" },
  { id: "sec-03", num: "03", title: "How We Use Your Information" },
  { id: "sec-04", num: "04", title: "Sharing Your Information" },
  { id: "sec-05", num: "05", title: "Data Storage & Security" },
  { id: "sec-06", num: "06", title: "Cookies & Tracking Technologies" },
  { id: "sec-07", num: "07", title: "Your Rights & Choices" },
  { id: "sec-08", num: "08", title: "Children's Privacy" },
  { id: "sec-09", num: "09", title: "Third-Party Links & Services" },
  { id: "sec-10", num: "10", title: "Changes to This Policy" },
  { id: "sec-11", num: "11", title: "Contact & Grievance Officer" },
];

export default function PrivacyPolicy() {
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
              <Shield size={12} />
              Legal
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-5"
              variants={fadeUp}
            >
              Privacy <span className="text-indigo-600">Policy</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-slate-500 max-w-3xl leading-relaxed mb-8 font-light"
              variants={fadeUp}
            >
              At Hireance, your privacy is a fundamental priority. This policy explains what personal data we collect, why we collect it, how we protect it, and the choices you have.
            </motion.p>

            {/* Badges row */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={fadeUp}
            >
              {[
                { icon: Clock, text: "Effective: January 1, 2026" },
                { icon: Clock, text: "Last Updated: June 2026" },
                { icon: Fingerprint, text: "Jurisdiction: India" },
                { icon: Lock, text: "Applies to all Hireance platforms" },
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
            <SectionHeader id="sec-01" num="01" title="Introduction & Scope" icon={Globe} />
          <AnimatedSection>
            <motion.p
              className="text-slate-500 text-lg leading-relaxed"
              variants={fadeUp}
            >
              Hierance Services Private Limited (&ldquo;Hierance&rdquo;,
              &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a
              company incorporated under the laws of India with its registered
              office at 7-1-458 Ameerpet, Hyderabad, Telangana 500016, operates
              as a next-generation digital services company and is the parent
              entity of a portfolio of purpose-driven brands including Events
              Fare, Payblee, Filmskart, and Viral Wave.
            </motion.p>
            <motion.p
              className="text-slate-500 text-lg leading-relaxed mt-5"
              variants={fadeUp}
              custom={1}
            >
              This Privacy Policy (&ldquo;Policy&rdquo;) governs the
              collection, use, disclosure, and protection of personal
              information we receive from users across all our websites, mobile
              applications, platforms, and services (collectively,
              &ldquo;Services&rdquo;). By accessing or using our Services, you
              acknowledge that you have read, understood, and agree to be bound
              by this Policy.
            </motion.p>

            <motion.div
              className="relative bg-indigo-50/50 border border-indigo-100/60 rounded-2xl p-7 mt-8 overflow-hidden"
              variants={fadeUp}
              custom={2}
              whileHover={{
                borderColor: "rgba(99,102,241,0.3)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-indigo-200/20 rounded-full -mr-10 -mt-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <p className="relative text-indigo-700/80 font-medium leading-relaxed">
                This Policy is compliant with the Digital Personal Data
                Protection Act, 2023 (DPDP Act) and applicable provisions of
                the Information Technology Act, 2000 and its rules. If you are
                located in the European Economic Area, additional rights under
                the GDPR may apply.
              </p>
            </motion.div>

            <motion.p
              className="text-slate-500 text-lg leading-relaxed mt-5"
              variants={fadeUp}
              custom={3}
            >
              This Policy applies to all Hierance platforms and brands.
              Individual brands may have supplementary privacy notices specific
              to their services, which should be read alongside this Policy.
            </motion.p>
          </AnimatedSection>

          {/* ── Section 02 ── */}
          <SectionHeader
            id="sec-02"
            num="02"
            title="Information We Collect"
            icon={Database}
          />
          <AnimatedSection>
            <motion.p
              className="text-slate-500 text-lg mb-8 leading-relaxed"
              variants={fadeUp}
            >
              We collect personal data only when necessary and with appropriate
              legal basis. The categories of information we may collect include:
            </motion.p>
          </AnimatedSection>

          <SubSection title="2.1 Information You Provide Directly">
            <motion.ul className="space-y-5" variants={staggerContainer}>
              <BulletItem
                index={0}
                title="Account Registration:"
                desc="Name, email address, phone number, password, and profile details when you create an account on any of our platforms."
              />
              <BulletItem
                index={1}
                title="Transactions:"
                desc="Payment information, billing address, transaction history, and financial account details when you make purchases or payments through Payblee or Events Fare."
              />
              <BulletItem
                index={2}
                title="Communications:"
                desc="Messages, enquiries, feedback, and correspondence you send to our support or sales teams."
              />
              <BulletItem
                index={3}
                title="User-Generated Content:"
                desc="Reviews, comments, and content you submit on our platforms including Filmskart and Events Fare."
              />
              <BulletItem
                index={4}
                title="Influencer & Creator Data:"
                desc="Portfolio information, social media handles, audience metrics, and campaign preferences provided through Viral Wave."
              />
              <BulletItem
                index={5}
                title="Marketing Preferences:"
                desc="Preferences you set for communications, newsletters, and promotional offers."
              />
            </motion.ul>
          </SubSection>

          <SubSection title="2.2 Information Collected Automatically">
            <motion.ul className="space-y-5" variants={staggerContainer}>
              <BulletItem
                index={0}
                title="Device Information:"
                desc="IP address, browser type, operating system, device identifiers, and mobile network information."
              />
              <BulletItem
                index={1}
                title="Usage Data:"
                desc="Pages visited, features used, time spent, click patterns, search queries, and interaction data within our Services."
              />
              <BulletItem
                index={2}
                title="Location Data:"
                desc="General geographic location derived from IP address; precise location only if you grant permission through our mobile applications."
              />
              <BulletItem
                index={3}
                title="Cookies & Tracking Technologies:"
                desc="Data collected via cookies, web beacons, pixels, and similar technologies. See our Cookie Policy for full details."
              />
              <BulletItem
                index={4}
                title="Log Data:"
                desc="Server logs including access timestamps, error logs, and referral URLs."
              />
            </motion.ul>
          </SubSection>

          <SubSection title="2.3 Information from Third Parties">
            <motion.ul className="space-y-5 mb-8" variants={staggerContainer}>
              <BulletItem
                index={0}
                title="Social Media Platforms:"
                desc="Profile data when you connect or log in using Google, Facebook, or other social accounts."
              />
              <BulletItem
                index={1}
                title="Payment Processors:"
                desc="Transaction confirmation and fraud prevention data from partners like PhonePe, Razorpay, Cashfree, and EaseBuzz."
              />
              <BulletItem
                index={2}
                title="Analytics Providers:"
                desc="Aggregated behavioural data from analytics services to improve our platforms."
              />
              <BulletItem
                index={3}
                title="Business Partners:"
                desc="Contact and professional information from partner organisations in connection with B2B services."
              />
            </motion.ul>

            <motion.div
              className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-6 text-amber-800/80 shadow-sm leading-relaxed"
              variants={fadeUp}
              custom={5}
            >
              We do not collect sensitive personal data such as biometric data,
              health information, genetic data, religious beliefs, or caste
              unless explicitly required by a specific service and with your
              express consent.
            </motion.div>
          </SubSection>

          {/* ── Section 03 ── */}
          <SectionHeader
            id="sec-03"
            num="03"
            title="How We Use Your Information"
            icon={FileText}
          />
          <AnimatedSection>
            <motion.p
              className="text-slate-500 text-lg mb-6 leading-relaxed"
              variants={fadeUp}
            >
              We process your personal data on one or more of the following
              legal bases: your consent, performance of a contract, legitimate
              interests, or compliance with a legal obligation.
            </motion.p>
          </AnimatedSection>

          <PolicyTable
            headers={["Purpose", "Data Used", "Legal Basis"]}
            rows={[
              [
                "Provide and operate our Services",
                "Account, payment, transaction data",
                "Contract performance",
              ],
              [
                "Process payments and settlements",
                "Financial data, transaction records",
                "Contract performance",
              ],
              [
                "Send transactional notifications",
                "Email, phone, preference data",
                "Contract performance",
              ],
              [
                "Improve and personalise Services",
                "Usage data, behavioural analytics",
                "Legitimate interests",
              ],
              [
                "Send marketing communications",
                "Email, name, preferences",
                "Consent",
              ],
              [
                "Detect and prevent fraud",
                "Device, IP, transaction data",
                "Legitimate interests / Legal obligation",
              ],
              [
                "Comply with legal obligations",
                "Any data as required by law",
                "Legal obligation",
              ],
              [
                "Resolve disputes and enforce terms",
                "Relevant account and transaction data",
                "Legitimate interests / Legal obligation",
              ],
              [
                "Conduct analytics and research",
                "Anonymised / aggregated usage data",
                "Legitimate interests",
              ],
              [
                "Match brands with influencers (Viral Wave)",
                "Creator profile and campaign data",
                "Contract performance / Consent",
              ],
            ]}
          />

          <AnimatedSection>
            <motion.p
              className="text-slate-500 text-lg leading-relaxed"
              variants={fadeUp}
            >
              We do not sell your personal data to third parties for their own
              marketing purposes. We use data only for the purposes described in
              this Policy unless we obtain your additional consent.
            </motion.p>
          </AnimatedSection>

          {/* ── Section 04 ── */}
          <SectionHeader
            id="sec-04"
            num="04"
            title="Sharing Your Information"
            icon={Users}
          />
          <AnimatedSection>
            <motion.p
              className="text-slate-500 text-lg mb-8 leading-relaxed"
              variants={fadeUp}
            >
              We may share your personal information with the following
              categories of recipients, and only to the extent necessary:
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="p-7" hoverGlow>
              <h4 className="font-bold text-slate-700 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-400 font-mono">4.1</span> Within
                the Hierance Group
              </h4>
              <p className="text-slate-500 leading-relaxed">
                We may share data among our group entities and brands (Events
                Fare, Payblee, Filmskart, Viral Wave) for integrated service
                delivery, unified customer support, and fraud prevention. All
                group entities are bound by this Policy.
              </p>
            </GlassCard>

            <GlassCard className="p-7" hoverGlow>
              <h4 className="font-bold text-slate-700 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-400 font-mono">4.3</span> Legal &
                Regulatory
              </h4>
              <p className="text-slate-500 leading-relaxed">
                We may disclose your information when required to do so by
                applicable law, court order, government authority, or to protect
                the rights, property, or safety of Hierance, our users, or
                the public.
              </p>
            </GlassCard>

            <GlassCard className="p-7 md:col-span-2" hoverGlow>
              <h4 className="font-bold text-slate-700 mb-5 text-lg flex items-center gap-2">
                <span className="text-indigo-400 font-mono">4.2</span> Service
                Providers and Partners
              </h4>
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={staggerContainer}
              >
                {[
                  {
                    name: "Payment Processors",
                    desc: "PhonePe, Razorpay, Cashfree, EaseBuzz",
                  },
                  {
                    name: "Banking Partners",
                    desc: "Axis Bank, IndusInd Bank",
                  },
                  {
                    name: "Cloud Providers",
                    desc: "Data hosting & infrastructure",
                  },
                  {
                    name: "Analytics Providers",
                    desc: "Platform monitoring",
                  },
                  { name: "Email Services", desc: "Communications" },
                  { name: "Support Tools", desc: "User query management" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-slate-50/80 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition-all duration-300"
                    variants={scaleIn}
                    custom={i}
                    whileHover={{
                      y: -3,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    <strong className="text-slate-700 block mb-1 text-sm">
                      {item.name}
                    </strong>
                    <span className="text-slate-400 text-sm">{item.desc}</span>
                  </motion.div>
                ))}
              </motion.div>
              <p className="mt-5 text-sm text-slate-400 italic bg-slate-50/60 p-3 rounded-lg border border-slate-100 inline-block">
                All service providers are contractually required to process data
                only under our instructions, maintain appropriate security
                standards, and not use your data for their own purposes.
              </p>
            </GlassCard>

            <GlassCard className="p-7 md:col-span-2" hoverGlow>
              <h4 className="font-bold text-slate-700 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-400 font-mono">4.4</span> Business
                Transfers
              </h4>
              <p className="text-slate-500 leading-relaxed">
                In the event of a merger, acquisition, restructuring, or sale of
                all or part of our business, your personal data may be
                transferred to the acquiring entity, subject to equivalent
                privacy protections.
              </p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              className="relative overflow-hidden bg-gradient-to-r from-indigo-50/70 to-purple-50/50 border border-indigo-100/50 rounded-2xl p-7 text-center"
              variants={fadeUp}
              whileHover={{
                scale: 1.01,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-100/0 via-indigo-100/30 to-indigo-100/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <p className="relative text-indigo-600/80 font-semibold text-lg">
                We never sell your personal data to advertisers or data brokers.
                Any third-party data sharing is governed by data processing
                agreements and restricted to the stated purposes.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* ── Section 05 ── */}
          <SectionHeader
            id="sec-05"
            num="05"
            title="Data Storage & Security"
            icon={Lock}
          />

          <SubSection title="5.1 Data Localisation">
            <motion.p className="leading-relaxed" variants={fadeUp}>
              In compliance with the DPDP Act, 2023, personal data of Indian
              residents is stored and processed primarily within India. Where
              cross-border transfers occur, we ensure appropriate safeguards are
              in place as required by applicable law.
            </motion.p>
          </SubSection>

          <SubSection title="5.2 Security Measures">
            <motion.p className="mb-8 leading-relaxed" variants={fadeUp}>
              We implement industry-standard technical and organisational
              security measures to protect your data from unauthorised access,
              disclosure, alteration, or destruction:
            </motion.p>
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {[
                "End-to-end encryption for financial transactions and sensitive data in transit (TLS 1.3)",
                "Encryption at rest for stored personal data using AES-256",
                "Role-based access controls limiting internal data access to authorised personnel",
                "Regular security audits, penetration testing, and vulnerability assessments",
                "Multi-factor authentication for administrative systems",
                "Incident response procedures for data breach detection and reporting",
              ].map((measure, i) => (
                <motion.div
                  key={i}
                  className="group flex items-start gap-4 bg-white/70 backdrop-blur-sm border border-slate-100 p-5 rounded-2xl shadow-sm cursor-default"
                  variants={scaleIn}
                  custom={i}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(99,102,241,0.25)",
                    boxShadow: "0 12px 40px -10px rgba(99,102,241,0.1)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Shield className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5 group-hover:text-indigo-500 transition-colors" />
                  </motion.div>
                  <span className="text-slate-500 leading-relaxed">
                    {measure}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </SubSection>

          <SubSection title="5.3 Retention Periods">
            <PolicyTable
              headers={["Data Category", "Retention Period", "Basis"]}
              rows={[
                [
                  "Account data",
                  "Duration of account + 2 years post-closure",
                  "Contractual / Regulatory",
                ],
                [
                  "Transaction records",
                  "7 years from transaction date",
                  "Income Tax Act / RBI norms",
                ],
                [
                  "Support communications",
                  "3 years from last interaction",
                  "Legitimate interests",
                ],
                [
                  "Marketing preferences",
                  "Until withdrawal of consent + 90 days",
                  "Consent",
                ],
                [
                  "Analytics data",
                  "18 months (anonymised thereafter)",
                  "Legitimate interests",
                ],
                ["Fraud prevention logs", "5 years", "Legal obligation"],
                [
                  "KYC documents (Payblee)",
                  "Per RBI / PMLA requirements",
                  "Legal obligation",
                ],
              ]}
            />
            <motion.p
              className="text-slate-500 leading-relaxed"
              variants={fadeUp}
            >
              Upon expiry of retention periods, data is securely deleted or
              anonymised. You may request early deletion subject to our legal
              obligations.
            </motion.p>
          </SubSection>

          {/* ── Section 06 ── */}
          <SectionHeader
            id="sec-06"
            num="06"
            title="Cookies & Tracking Technologies"
            icon={Eye}
          />
          <AnimatedSection>
            <motion.p
              className="text-slate-500 text-lg leading-relaxed mb-8"
              variants={fadeUp}
            >
              We use cookies and similar tracking technologies to operate our
              platforms, understand usage patterns, and deliver personalised
              experiences. Our full Cookie Policy provides complete details on
              the types of cookies used, their purposes, and how to manage your
              preferences.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid sm:grid-cols-2 gap-5 my-10">
            {[
              {
                name: "Essential Cookies",
                desc: "Required for platform functionality — cannot be disabled.",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                name: "Analytics Cookies",
                desc: "Help us understand how users interact with our Services.",
                color: "from-indigo-400 to-indigo-500",
              },
              {
                name: "Preference Cookies",
                desc: "Remember your settings and personalise your experience.",
                color: "from-indigo-400 to-purple-400",
              },
              {
                name: "Marketing Cookies",
                desc: "Used for relevant advertising — require your consent.",
                color: "from-purple-400 to-indigo-400",
              },
            ].map((cookie, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-100 p-6 shadow-sm group cursor-default"
                variants={scaleIn}
                custom={i}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 60px -15px rgba(99,102,241,0.12)",
                  borderColor: "rgba(99,102,241,0.25)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cookie.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: "left" }}
                />
                <strong className="text-slate-700 block mb-2 text-lg">
                  {cookie.name}
                </strong>
                <span className="text-slate-400">{cookie.desc}</span>
              </motion.div>
            ))}
          </AnimatedSection>

          <AnimatedSection>
            <motion.p
              className="text-slate-500 text-lg leading-relaxed"
              variants={fadeUp}
            >
              You can manage cookie preferences through your browser settings or
              our cookie consent manager. Please note that disabling certain
              cookies may affect the functionality of our Services.
            </motion.p>
          </AnimatedSection>

          {/* ── Section 07 ── */}
          <SectionHeader id="sec-07" num="07" title="Your Rights & Choices" icon={Scale} />
          <AnimatedSection>
            <motion.p
              className="text-slate-500 text-lg mb-6 leading-relaxed"
              variants={fadeUp}
            >
              Subject to applicable law, you have the following rights in
              relation to your personal data. You may exercise these rights by
              contacting our Grievance Officer.
            </motion.p>
          </AnimatedSection>

          <PolicyTable
            headers={["Right", "Description", "Response Time"]}
            rows={[
              [
                "Access",
                "Obtain a copy of the personal data we hold about you",
                "30 days",
              ],
              [
                "Correction",
                "Rectify inaccurate or incomplete personal data",
                "15 days",
              ],
              [
                "Erasure",
                "Request deletion of personal data (subject to legal obligations)",
                "30 days",
              ],
              [
                "Data Portability",
                "Receive your data in a structured, machine-readable format",
                "30 days",
              ],
              [
                "Withdraw Consent",
                "Withdraw consent for processing based on consent (future only)",
                "Immediate",
              ],
              [
                "Opt-out of Marketing",
                "Unsubscribe from marketing communications at any time",
                "10 business days",
              ],
              [
                "Grievance Redressal",
                "Lodge a complaint with our Grievance Officer",
                "30 days",
              ],
              [
                "Nomination",
                "Nominate a person to exercise rights in case of death/incapacity",
                "As applicable",
              ],
            ]}
          />

          <AnimatedSection>
            <motion.div
              className="bg-slate-50/60 backdrop-blur-sm rounded-2xl p-7 mb-8 mt-6 border border-slate-100 shadow-sm"
              variants={fadeUp}
            >
              <p className="text-slate-500 leading-relaxed">
                To exercise any of these rights, submit a request to{" "}
                <a
                  href="mailto:privacy@hierance.com"
                  className="text-indigo-500 hover:text-indigo-600 hover:underline font-medium transition-colors"
                >
                  privacy@hierance.com
                </a>{" "}
                or use the contact form on our Contact page. We may need to
                verify your identity before processing certain requests.
              </p>
            </motion.div>
          </AnimatedSection>

          <SubSection title="7.1 Marketing Opt-Out">
            <motion.p className="leading-relaxed" variants={fadeUp}>
              You may unsubscribe from marketing emails at any time by clicking
              the &ldquo;Unsubscribe&rdquo; link in any marketing email or by
              emailing{" "}
              <a
                href="mailto:privacy@hierance.com"
                className="text-indigo-500 hover:text-indigo-600 hover:underline font-medium transition-colors"
              >
                privacy@hierance.com
              </a>
              . Note that you will continue to receive transactional and
              service-related communications.
            </motion.p>
          </SubSection>

          {/* ── Section 08 ── */}
          <SectionHeader
            id="sec-08"
            num="08"
            title="Children's Privacy"
            icon={Users}
          />
          <AnimatedSection className="text-slate-500 text-lg space-y-5 leading-relaxed">
            <motion.p variants={fadeUp}>
              Our Services are not directed at children under the age of 18
              years. We do not knowingly collect, process, or store personal data
              from children under 18 without verifiable parental or guardian
              consent.
            </motion.p>
            <motion.p variants={fadeUp} custom={1}>
              In accordance with the DPDP Act, 2023, if we become aware that we
              have inadvertently collected data from a child under 18, we will
              delete such data promptly and notify the parent or guardian where
              possible.
            </motion.p>
            <motion.p variants={fadeUp} custom={2}>
              If you are a parent or guardian and believe your child has provided
              personal data to us without your consent, please contact our
              Grievance Officer immediately at{" "}
              <a
                href="mailto:privacy@hierance.com"
                className="text-indigo-500 hover:text-indigo-600 hover:underline font-medium transition-colors"
              >
                privacy@hierance.com
              </a>
              .
            </motion.p>
            <div className="bg-red-50/50 border border-red-100/60 rounded-2xl p-6 text-red-700/70 mt-6 flex gap-4 items-start">
              <Shield className="w-6 h-6 shrink-0 text-red-400 mt-1" />
              <p className="font-medium leading-relaxed">
                Payblee&apos;s financial services are available only to
                individuals who are 18 years or older and who have the legal
                capacity to enter into binding agreements under Indian law.
              </p>
            </div>
          </AnimatedSection>

          {/* ── Section 09 ── */}
          <SectionHeader
            id="sec-09"
            num="09"
            title="Third-Party Links & Services"
            icon={Globe}
          />
          <AnimatedSection className="text-slate-500 text-lg space-y-5 leading-relaxed">
            <motion.p variants={fadeUp}>
              Our platforms may contain links to third-party websites,
              applications, or services not owned or controlled by Hierance.
              This Policy does not apply to those third-party services, and we
              are not responsible for their privacy practices.
            </motion.p>
            <motion.p variants={fadeUp} custom={1}>
              We encourage you to review the privacy policies of any third-party
              services you access through our platforms, including but not
              limited to:
            </motion.p>
            <motion.ul
              className="space-y-3 mt-4 mb-6"
              variants={staggerContainer}
            >
              {[
                "Payment gateway providers (PhonePe, Razorpay, Cashfree, EaseBuzz)",
                "Social media platforms used for login or content sharing",
                "Event venues and organisers listed on Events Fare",
                "Film studios and merchandise manufacturers on Filmskart",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 group"
                  variants={slideRight}
                  custom={i}
                  whileHover={{
                    x: 8,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full bg-indigo-600/20 border border-indigo-600/30 mt-2 shrink-0 group-hover:bg-indigo-600/50 transition-colors"
                    whileHover={{ scale: 1.6 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} custom={3}>
              Third-party integrations are selected for their compliance with
              applicable data protection standards, but Hierance accepts no
              liability for their independent data handling practices.
            </motion.p>
          </AnimatedSection>

          {/* ── Section 10 ── */}
          <SectionHeader
            id="sec-10"
            num="10"
            title="Changes to This Policy"
            icon={Bell}
          />
          <AnimatedSection className="text-slate-500 text-lg space-y-5 leading-relaxed">
            <motion.p variants={fadeUp}>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make material changes, we will:
            </motion.p>
            <motion.ul
              className="space-y-3"
              variants={staggerContainer}
            >
              {[
                'Update the "Last Updated" date at the top of this page',
                "Send an email notification to registered users where the changes are significant",
                "Display a prominent notice on our platforms for at least 30 days",
                "Where required by law, seek your renewed consent",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 group"
                  variants={slideRight}
                  custom={i}
                  whileHover={{
                    x: 8,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full  border border-indigo-600/30 mt-2 shrink-0 group-hover:bg-indigo-600/50 transition-colors"
                    whileHover={{ scale: 1.6 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} custom={2}>
              Your continued use of our Services after the effective date of any
              changes constitutes your acceptance of the revised Policy. If you
              do not agree with any changes, you should discontinue use of our
              Services and contact us to close your account.
            </motion.p>
            <motion.p variants={fadeUp} custom={3}>
              We maintain an archive of previous versions of this Policy. You
              may request a copy of any previous version by contacting our
              Grievance Officer.
            </motion.p>
          </AnimatedSection>

          {/* ── Section 11 ── */}
          <SectionHeader
            id="sec-11"
            num="11"
            title="Contact & Grievance Officer"
            icon={Phone}
          />
          <AnimatedSection className="text-slate-500 text-lg space-y-6 leading-relaxed">
            <motion.p variants={fadeUp}>
              In accordance with the Information Technology Act, 2000, and the
              Digital Personal Data Protection Act, 2023, Hierance has
              appointed a Grievance Officer to address privacy-related concerns.
              If you have any questions, complaints, or requests regarding this
              Policy or our data practices, please contact:
            </motion.p>

            {/* Premium Contact Card */}
            <motion.div
              className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white rounded-[2rem] p-10 md:p-14 shadow-2xl overflow-hidden mt-10 mb-6"
              variants={fadeUp}
              custom={1}
              whileHover={{
                scale: 1.005,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
            >
              <motion.div
                className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(129,140,248,0.1), transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-10 text-indigo-300 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Grievance Officer — Hierance
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-10 relative z-10">
                <div className="space-y-8">
                  <motion.div
                    className="flex gap-5 group"
                    whileHover={{
                      x: 5,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors">
                      <MapPin className="w-6 h-6 text-indigo-300 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-xl mb-2">
                        Registered Office
                      </p>
                      <p className="text-slate-400 leading-relaxed">
                        Hierance Services Private Limited
                        <br />
                        7-1-458 Ameerpet, Hyderabad
                        <br />
                        Telangana, India — 500016
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex gap-5 group"
                    whileHover={{
                      x: 5,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors">
                      <Clock className="w-6 h-6 text-indigo-300 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-xl mb-2">
                        Operating Hours
                      </p>
                      <p className="text-slate-400 leading-relaxed">
                        Monday – Saturday
                        <br />
                        9:00 AM – 7:00 PM IST
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <motion.div
                    className="flex gap-5 group"
                    whileHover={{
                      x: 5,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors">
                      <Mail className="w-6 h-6 text-indigo-300 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-xl mb-2">
                        Email
                      </p>
                      <div className="space-y-3">
                        <p className="text-slate-400">
                          <span className="text-slate-500 block text-xs mb-1 uppercase tracking-[0.15em] font-semibold">
                            Privacy queries
                          </span>
                          <a
                            href="mailto:privacy@hierance.com"
                            className="hover:text-white transition-colors text-indigo-300 text-lg"
                          >
                            privacy@hierance.com
                          </a>
                        </p>
                        <p className="text-slate-400">
                          <span className="text-slate-500 block text-xs mb-1 uppercase tracking-[0.15em] font-semibold">
                            General queries
                          </span>
                          <a
                            href="mailto:info@hierance.com"
                            className="hover:text-white transition-colors text-indigo-300 text-lg"
                          >
                            info@hierance.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex gap-5 group"
                    whileHover={{
                      x: 5,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl h-fit border border-white/5 group-hover:bg-white/15 transition-colors">
                      <Phone className="w-6 h-6 text-indigo-300 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-xl mb-2">
                        Phone
                      </p>
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
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(99,102,241,0.25)",
                    transition: { type: "spring", stiffness: 400 },
                  }}
                >
                  <Clock className="w-4 h-4" />
                  Expected Response Time: Within 30 days
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.p
              className="p-7 bg-slate-50/60 backdrop-blur-sm border border-slate-100 rounded-2xl text-slate-400 italic leading-relaxed shadow-sm"
              variants={fadeUp}
              custom={3}
            >
              If you are not satisfied with our response, you have the right to
              lodge a complaint with the Data Protection Board of India once
              established under the DPDP Act, 2023, or with any other applicable
              supervisory authority.
            </motion.p>
          </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

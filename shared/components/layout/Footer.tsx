"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  MapPin, 
  Phone, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

type FooterProps = {
  username?: string;
};

const Footer = ({ username }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-4">
            <Link href="/" className="inline-block transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/hireance-PNG-logo.png"
                alt="Hireance Logo"
                width={130}
                height={37}
                style={{ height: "auto" }}
                className="brightness-110"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Empowering your career journey with premium tools and connections to top-tier companies.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/smallfare", color: "hover:text-blue-600" },
                { icon: Twitter, href: "https://x.com/smallfare", color: "hover:text-sky-500" },
                { icon: Mail, href: "mailto:info@smallfare.com", color: "hover:text-red-500" },
                { icon: Globe, href: "https://www.smallfare.com", color: "hover:text-indigo-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 ${social.color} hover:border-transparent hover:shadow-md transition-all duration-300`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-slate-800 font-semibold text-xs uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Find Jobs", href: "/jobs" },
                { label: "Top Companies", href: "/companies" },
                { label: "Career Services", href: "/services" },
                { label: "Pricing Plans", href: "/prices" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-slate-500 hover:text-indigo-600 text-sm flex items-center group transition-colors"
                  >
                    <ArrowRight size={12} className="mr-1.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="text-slate-800 font-semibold text-xs uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Refund Policy", href: "/legal/refund-policy" },
                { label: "Privacy Policy", href: "/legal/privacy" },
                { label: "Terms of Service", href: "/legal/terms" },
                { label: "Cookie Policy", href: "/legal/cookies" },
                { label: "Help Center", href: "/legal/help" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-slate-500 hover:text-indigo-600 text-sm flex items-center group transition-colors"
                  >
                    <ArrowRight size={12} className="mr-1.5 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-slate-800 font-semibold text-xs uppercase tracking-wider mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-sm text-slate-500 leading-relaxed">
                  <span className="block font-medium text-slate-800">Hyderabad Office</span>
                  7-1-458 Ameerpet<br />
                  Hyderabad, IN 500016, India
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="text-sm text-slate-500">
                  <span className="block font-medium text-slate-800">Phone</span>
                  040 47088764
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="text-sm text-slate-500">
                  <span className="block font-medium text-slate-800">Email</span>
                  <a href="mailto:info@smallfare.com" className="hover:text-indigo-600 transition-colors">info@smallfare.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-center">
          <p className="text-slate-400 text-xs text-center">
            © {currentYear} Hireance®. All rights reserved. 
            <span className="mx-2">|</span>
            A product of <a href="https://www.smallfare.com" target="_blank" className="text-slate-500 hover:text-indigo-600 font-medium inline-flex items-center gap-1">Small Fare Services Pvt. Ltd<ExternalLink size={10} /></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

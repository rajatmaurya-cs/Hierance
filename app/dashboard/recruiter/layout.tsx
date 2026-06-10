"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  UserCircle, 
  Briefcase, 
  BarChart3, 
  Gift, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Zap
} from "lucide-react";

/* ================= Types ================= */

type LayoutProps = {
  children: ReactNode;
};

/* ================= Sidebar Config ================= */

const navItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/dashboard/recruiter",
    icon: LayoutDashboard,
  },
  {
    key: "profile",
    label: "Profile",
    href: "/dashboard/recruiter/profile",
    icon: UserCircle,
  },
  {
    key: "jobs",
    label: "Jobs",
    href: "/dashboard/recruiter/jobs",
    icon: Briefcase,
  },
  {
    key: "analytics",
    label: "Analytics",
    href: "/dashboard/recruiter/analytics",
    icon: BarChart3,
  },
  {
    key: "rewards",
    label: "Rewards",
    href: "/dashboard/recruiter/rewards",
    icon: Gift,
  },
  {
    key: "subscriptions",
    label: "Subscriptions",
    href: "/dashboard/recruiter/subscriptions",
    icon: CreditCard,
  },
  {
    key: "settings",
    label: "Settings",
    href: "/dashboard/recruiter/settings",
    icon: Settings,
  },
];

/* ================= Component ================= */

const RecruiterPageLayout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full bg-[#F8FAFC] min-h-screen flex font-jakarta">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-72 bg-white/70 backdrop-blur-2xl border-r border-slate-200/50 fixed left-0 top-0 h-screen flex flex-col z-50">
        
        {/* HEADER / BRANDING */}
        <div className="px-8 py-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
              <Zap size={22} className="text-white fill-white" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Hierance
              </h2>
              <p className="text-[10px] font-semibold text-indigo-500 uppercase tracking-[0.2em] -mt-0.5">
                Recruiter Hub
              </p>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 overflow-y-auto no-scrollbar py-2">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== "/dashboard/recruiter" && pathname.startsWith(item.href));

              return (
                <Link key={item.key} href={item.href} className="block group">
                  <div className={`
                    relative flex items-center gap-3.5 px-4 py-3.5 rounded-[1.25rem] transition-all duration-300
                    ${isActive 
                      ? "bg-indigo-50/80 text-indigo-600 shadow-sm" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}
                  `}>
                    {/* Active Indicator Glow */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeNav"
                        className="absolute left-0 w-1.5 h-6 bg-indigo-600 rounded-r-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                    <span className={`text-[0.9rem] font-semibold tracking-tight ${isActive ? 'font-bold opacity-100' : 'opacity-80'}`}>
                      {item.label}
                    </span>

                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto"
                      >
                        <ChevronRight size={14} className="text-indigo-400" />
                      </motion.div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* FOOTER / USER SECTION */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/30">
          <div className="space-y-1 mb-6">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all duration-200 group">
              <HelpCircle size={18} className="text-slate-400 group-hover:text-indigo-500" />
              Support Center
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold text-rose-500 hover:bg-rose-50 transition-all duration-200 group">
              <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
              Sign Out
            </button>
          </div>

          {/* Mini User Card */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden border border-slate-50">
               <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                 JD
               </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold text-slate-900 truncate">John Doe</p>
              <p className="text-[10px] font-medium text-slate-400 truncate uppercase tracking-wider">Premium Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 ml-72">
        <div className="min-h-screen">
          {children}
        </div>
      </main>
    </section>
  );
};

export default RecruiterPageLayout;

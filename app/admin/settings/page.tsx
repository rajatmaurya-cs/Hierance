"use client";
import React, { useState } from "react";
import {
  ShieldCheck,
  Globe,
  Zap,
  Lock,
  Bell,
  Server,
  Save,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Key,
  Database,
  Mail,
  Smartphone,
  Info,
  ExternalLink,
  ChevronRight,
  Clock,
  Trash2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/shared/components/ui/button";

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("Platform");

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  const NavItem = ({ label, icon: Icon }: { label: string; icon: any }) => (
    <button
      onClick={() => setActiveTab(label)}
      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
        activeTab === label
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className={activeTab === label ? "text-white" : "group-hover:text-indigo-600 transition-colors"} />
        <span className="text-sm font-black tracking-tight">{label}</span>
      </div>
      {activeTab === label && <ChevronRight size={14} className="opacity-50" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* HEADER SECTION */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
            System Control Center
          </h1>
          <p className="text-slate-500 font-bold text-sm mt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Active Platform Configuration & Logic Engine
          </p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={isSaving}
          className={`rounded-xl px-8 py-6 font-bold text-xs shadow-xl transition-all flex items-center gap-2 ${
            isSaving ? "bg-emerald-500 text-white shadow-emerald-100" : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100"
          }`}
        >
          {isSaving ? (
            <><CheckCircle2 size={14} className="animate-bounce" /> Changes Synchronized</>
          ) : (
            <><Save size={14} /> Synchronize All Changes</>
          )}
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* SIDE NAVIGATION */}
        <aside className="lg:w-72 w-full space-y-2 bg-white p-3 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
          <NavItem label="Platform" icon={Globe} />
          <NavItem label="Moderation" icon={ShieldCheck} />
          <NavItem label="Billing" icon={Zap} />
          <NavItem label="Notifications" icon={Bell} />
          <NavItem label="Security" icon={Lock} />
          <NavItem label="Integration" icon={Server} />
        </aside>

        {/* DYNAMIC CONTENT AREA */}
        <main className="flex-1 w-full min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === "Platform" && (
              <motion.div
                key="platform"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                  <h2 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                    Platform Identity & SEO
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Legal Brand Name</label>
                      <input type="text" defaultValue="Hierance Global" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Primary Support Email</label>
                      <input type="email" defaultValue="support@hierance.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-indigo-100 outline-none transition-all" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Global Meta Description</label>
                      <textarea defaultValue="Connect with top-tier tech talent globally. Hierance is the premium ecosystem for high-stakes hiring and talent acquisition." rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none" />
                    </div>
                  </div>
                </section>
                
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 border border-slate-100">
                      <ExternalLink size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 leading-none">Custom Site Favicon</p>
                      <p className="text-[10px] font-bold text-slate-400 mt-1">Update your platform icon seen in browser tabs.</p>
                    </div>
                  </div>
                  <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Replace SVG</button>
                </div>
              </motion.div>
            )}

            {activeTab === "Moderation" && (
              <motion.div
                key="moderation"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                  <h2 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-rose-500 rounded-full" />
                    Policy & Moderation Engine
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { label: "Automatic Job Verification", desc: "Instantly publish job listings without admin review.", status: false },
                      { label: "Strict KYC Check", desc: "Restrict posting to companies with verified GST/PAN documents.", status: true },
                      { label: "Recruiter Phone Verification", desc: "Enforce OTP verification for all new recruiter accounts.", status: true }
                    ].map((policy, i) => (
                      <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-slate-50/20 group hover:bg-slate-50 transition-all">
                        <div className="max-w-[70%]">
                          <h3 className="text-sm font-black text-slate-800">{policy.label}</h3>
                          <p className="text-[11px] font-bold text-slate-400 mt-0.5">{policy.desc}</p>
                        </div>
                        <button className={`w-14 h-8 rounded-full relative transition-all duration-300 ${policy.status ? "bg-indigo-600" : "bg-slate-200"}`}>
                          <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-sm transition-all duration-300 ${policy.status ? "right-1" : "left-1"}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === "Billing" && (
              <motion.div
                key="billing"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                  <h2 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
                    Billing & Settlement Logic
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-3xl bg-amber-50 border border-amber-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Zap className="text-amber-500" size={16} />
                          <h3 className="text-[10px] font-black text-amber-900 uppercase tracking-widest">Premium Job Fee</h3>
                        </div>
                        <button className="text-[10px] font-black text-amber-600 uppercase tracking-widest hover:underline">Edit</button>
                      </div>
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-black text-slate-900">₹4,999</span>
                        <span className="text-[10px] font-bold text-slate-400 mb-1.5 lowercase italic">/ listing</span>
                      </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <DollarSign className="text-indigo-600" size={16} />
                          <h3 className="text-[10px] font-black text-indigo-900 uppercase tracking-widest">Primary Currency</h3>
                        </div>
                        <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Change</button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-black text-slate-900">INR (₹)</span>
                        <div className="px-2 py-1 bg-white border border-indigo-100 rounded-lg flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-emerald-500" />
                          <span className="text-[9px] font-black text-indigo-600 uppercase tracking-tight">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === "Notifications" && (
              <motion.div
                key="notifications"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                  <h2 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                    Alert & Notification Rules
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Admin Global Announcement</label>
                      <div className="relative">
                        <input type="text" placeholder="Displays a global top banner to all users..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 pr-32 outline-none" />
                        <button className="absolute right-3 top-2 bottom-2 bg-indigo-600 text-white rounded-xl px-4 text-[10px] font-black uppercase tracking-widest">Push Banner</button>
                      </div>
                    </div>
                    <div className="p-5 rounded-2xl border border-slate-100 bg-blue-50/30 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Mail className="text-blue-500" size={18} />
                        <div>
                          <p className="text-sm font-black text-slate-900 leading-none">Daily Report Summary</p>
                          <p className="text-[10px] font-bold text-slate-400 mt-1">Send a compiled hiring report to admin emails daily.</p>
                        </div>
                      </div>
                      <button className="w-12 h-6 bg-indigo-600 rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" /></button>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === "Security" && (
              <motion.div
                key="security"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                  <h2 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
                    Access & Protection Protocols
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50 relative overflow-hidden group hover:border-indigo-200 transition-all">
                      <Smartphone className="text-indigo-600 mb-4" size={20} />
                      <h3 className="text-sm font-black text-slate-900 mb-1">Two-Factor Auth</h3>
                      <p className="text-[10px] font-bold text-slate-400 mb-6 leading-relaxed">Require specialized OTP for all administrator-level logins.</p>
                      <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all">Enable Globally</button>
                    </div>
                    <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50 overflow-hidden group hover:border-amber-200 transition-all">
                      <Clock className="text-amber-500 mb-4" size={20} />
                      <h3 className="text-sm font-black text-slate-900 mb-1">Session Timeout</h3>
                      <p className="text-[10px] font-bold text-slate-400 mb-6 leading-relaxed">Automatically log out inactive administrator sessions.</p>
                      <button className="w-full py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">Config: 30 Mins</button>
                    </div>
                  </div>
                </section>

                <div className="p-8 rounded-3xl bg-rose-50 border border-rose-100">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="text-rose-600" size={20} />
                    <h2 className="text-lg font-black text-rose-900 tracking-tight">Danger Management</h2>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="rounded-xl border-rose-200 text-rose-600 font-bold text-[10px] uppercase tracking-widest px-6 py-5 bg-white hover:bg-rose-100 transition-all">Trigger Maintenance Mode</Button>
                    <Button variant="outline" className="rounded-xl border-rose-200 text-rose-600 font-bold text-[10px] uppercase tracking-widest px-6 py-5 bg-white hover:bg-rose-100 transition-all">Wipe Analytic Cache</Button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "Integration" && (
              <motion.div
                key="integration"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -z-0" />
                  <h2 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3 relative z-10">
                    <div className="w-1.5 h-6 bg-cyan-500 rounded-full" />
                    External Ecosystem Bridge
                  </h2>
                  <div className="space-y-6 relative z-10">
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <Key className="text-indigo-600" size={18} />
                          <h3 className="text-sm font-black text-slate-900">Platform API Gateway</h3>
                        </div>
                        <span className="text-[10px] font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-1 rounded-lg">Production Live</span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 pl-1">Primary Access Secret</p>
                          <div className="flex gap-2">
                            <input type="password" readOnly value="sk_production_live_82910" className="flex-1 bg-white border border-slate-200 rounded-xl p-3 text-xs font-mono font-bold text-slate-600" />
                            <button className="px-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Rotate</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl border border-slate-100 flex items-center justify-between group hover:bg-slate-50 transition-all">
                        <div className="flex items-center gap-3">
                          <Database className="text-slate-400 group-hover:text-indigo-600 transition-colors" size={18} />
                          <span className="text-xs font-black text-slate-700">Analytics Webhooks</span>
                        </div>
                        <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Connect</button>
                      </div>
                      <div className="p-5 rounded-2xl border border-slate-100 flex items-center justify-between group hover:bg-slate-50 transition-all">
                        <div className="flex items-center gap-3">
                          <Info className="text-slate-400 group-hover:text-indigo-600 transition-colors" size={18} />
                          <span className="text-xs font-black text-slate-700">Developer Documentation</span>
                        </div>
                        <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">View Docs</button>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Settings,
  Mail,
  ShieldCheck,
  Users,
  LayoutGrid,
  Save,
  Globe,
  Bell,
  UploadCloud,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type SettingTab = "GENERAL" | "EMAIL" | "CATEGORIES" | "SECURITY" | "ROLES";

export default function SettingsControl() {
  const [activeTab, setActiveTab] = useState<SettingTab>("GENERAL");
  const [isSaving, setIsSaving] = useState(false);

  const tabs = [
    {
      key: "GENERAL",
      label: "General",
      icon: Globe,
      desc: "Platform branding & basic info",
    },
    {
      key: "EMAIL",
      label: "Email",
      icon: Mail,
      desc: "SMTP & notification triggers",
    },
    {
      key: "CATEGORIES",
      label: "Categories",
      icon: LayoutGrid,
      desc: "Job niches & skill sets",
    },
    {
      key: "SECURITY",
      label: "Security",
      icon: ShieldCheck,
      desc: "2FA & authentication logs",
    },
    {
      key: "ROLES",
      label: "Roles",
      icon: Users,
      desc: "Permissions & team access",
    },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500); // Simulating API call
  };

  const renderContent = () => {
    switch (activeTab) {
      case "GENERAL":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Platform Name
                </label>
                <input
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. JobHunt Pro"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Support Email
                </label>
                <input
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="support@portal.com"
                />
              </div>
            </div>
            <div className="p-8 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600 font-medium">
                Upload Platform Logo
              </p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
            </div>
          </motion.div>
        );

      case "EMAIL":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3 border border-blue-100">
              <Bell className="w-5 h-5 text-blue-600 mt-0.5" />
              <p className="text-sm text-blue-800 leading-relaxed">
                System will send automated emails for job applications, password
                resets, and admin alerts.
              </p>
            </div>
            <div className="space-y-4">
              <input
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="SMTP Host (e.g. smtp.gmail.com)"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Port"
                />
                <input
                  className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Encryption (SSL/TLS)"
                />
              </div>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Send Test Email →
              </button>
            </div>
          </motion.div>
        );

      case "SECURITY":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {[
              {
                title: "Two-Factor Authentication",
                desc: "Add an extra layer of security to admin accounts.",
                enabled: true,
              },
              {
                title: "Strict Password Policy",
                desc: "Require symbols, numbers and min. 12 characters.",
                enabled: false,
              },
              {
                title: "IP Whitelisting",
                desc: "Restrict dashboard access to specific IP addresses.",
                enabled: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all"
              >
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <div
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${item.enabled ? "bg-blue-600" : "bg-gray-300"}`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform ${item.enabled ? "translate-x-5" : "translate-x-0"}`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        );

      default:
        return (
          <div className="py-20 text-center">
            <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4 animate-spin-slow" />
            <p className="text-gray-500 text-sm">
              This module is under development.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage your job portal's core configuration and security.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* SIDEBAR */}
        <div className="w-full md:w-72 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as SettingTab)}
                className={`w-full flex items-start gap-4 p-4 rounded-2xl transition-all text-left ${
                  activeTab === tab.key
                    ? "bg-white shadow-md border border-gray-100 ring-1 ring-black/5"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${activeTab === tab.key ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <p
                    className={`text-sm font-bold ${activeTab === tab.key ? "text-gray-900" : "text-gray-600"}`}
                  >
                    {tab.label}
                  </p>
                  <p className="text-[11px] mt-0.5 opacity-70 leading-tight">
                    {tab.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* CONTENT CARD */}
        <div className="flex-1">
          <div className="bg-white border border-gray-100 rounded-[2rem] shadow-xl shadow-gray-200/50 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {tabs.find((t) => t.key === activeTab)?.label}
                  </h2>
                  <div className="h-1 w-8 bg-blue-600 rounded-full mt-1" />
                </div>
              </div>

              <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>

              {/* ACTION BAR */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
                <button className="px-6 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors">
                  Discard
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-8 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition-all active:scale-95 disabled:opacity-70"
                >
                  {isSaving ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Saving...
                    </span>
                  ) : (
                    <>
                      <Save size={16} />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* HELP BOX */}
          <div className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-between">
            <p className="text-xs text-gray-500 italic">
              Last deployment: March 23, 2026 • Version 2.0.4
            </p>
            <button className="text-xs font-bold text-gray-400 hover:text-blue-600">
              Need help?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Edit3, 
  X, 
  Check, 
  Save, 
  Eye, 
  Target, 
  ShieldCheck, 
  Zap, 
  Plus,
  Trash2,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PlanData,
  INITIAL_CANDIDATE_PLANS,
  INITIAL_RECRUITER_PLANS,
  getStoredPlans,
  saveStoredPlan
} from "../constants";

export default function PlanDetailsPage({ params }: { params: Promise<{ planId: string }> }) {
  const router = useRouter();
  const { planId } = use(params);
  const [isMounted, setIsMounted] = useState(false);

  // --- Find Plan ---
  const [originalPlan, setOriginalPlan] = useState<PlanData | null>(() => {
    const allPlans = [...INITIAL_CANDIDATE_PLANS, ...INITIAL_RECRUITER_PLANS];
    return allPlans.find(p => p.id === planId) || null;
  });

  // --- States ---
  const [isEditing, setIsEditing] = useState(false);
  const [editedPlan, setEditedPlan] = useState<PlanData | null>(null);
  const [newFeature, setNewFeature] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const { candidatePlans, recruiterPlans } = getStoredPlans();
    const allPlans = [...candidatePlans, ...recruiterPlans];
    setOriginalPlan(allPlans.find(p => p.id === planId) || null);
  }, [planId]);

  if (!originalPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">404</h1>
          <p className="text-slate-500 mb-6">Plan not found in the matrix hierarchy.</p>
          <button 
            onClick={() => router.push("/admin/subscriptions/plans")}
            className="px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-[10px]"
          >
            Back to Matrix
          </button>
        </div>
      </div>
    );
  }

  // --- Actions ---
  const handleStartEdit = () => {
    setEditedPlan({ ...originalPlan, features: [...originalPlan.features] });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedPlan(null);
  };

  const handleSave = () => {
    if (!editedPlan) return;
    
    saveStoredPlan(editedPlan);
    setOriginalPlan(editedPlan);
    
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handlePriceChange = (value: number) => {
    if (editedPlan) {
      setEditedPlan({ ...editedPlan, price: `₹${value}` });
    }
  };

  const handleResetToDefault = () => {
    const allInitialPlans = [...INITIAL_CANDIDATE_PLANS, ...INITIAL_RECRUITER_PLANS];
    const defaultPlan = allInitialPlans.find(p => p.id === planId);
    if (defaultPlan) {
      saveStoredPlan(defaultPlan);
      setOriginalPlan(defaultPlan);
      setEditedPlan(null);
      setIsEditing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleAddFeature = () => {
    if (editedPlan && newFeature.trim()) {
      setEditedPlan({
        ...editedPlan,
        features: [...editedPlan.features, newFeature.trim()]
      });
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (idx: number) => {
    if (editedPlan) {
      const updated = [...editedPlan.features];
      updated.splice(idx, 1);
      setEditedPlan({ ...editedPlan, features: updated });
    }
  };

  const plan = isEditing ? editedPlan! : originalPlan;

  if (!isMounted) return null;

  return (
    
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Top Bar */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <button
          onClick={() => router.push("/admin/subscriptions/plans")}
          className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-indigo-600 hover:bg-white rounded-xl transition-all duration-200 group text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Matrix Dashboard
        </button>

        <div className="flex items-center gap-3">
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100 flex items-center gap-2"
              >
                <Check size={14} /> Matrix Updated Successfully
              </motion.div>
            )}
          </AnimatePresence>
          
          {!isEditing && (
            <button
              onClick={handleResetToDefault}
              className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors border border-slate-200"
            >
              Reset to Default
            </button>
          )}
        </div>
      </div>

      <main className="max-w-md mx-auto px-6 mt-6">
        <div className="flex flex-col items-center justify-center">
          
          {/* PRIMARY CARD DETAILS */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-white rounded-[32px] p-8 lg:p-10 shadow-sm border relative overflow-hidden transition-all duration-300 ${isEditing ? "border-indigo-400 ring-4 ring-indigo-500/10 shadow-indigo-100" : "border-slate-200"}`}
            >
              {/* Dynamic Accent Background Glow */}
              <div 
                className="absolute -top-32 -right-32 w-64 h-64 opacity-5 blur-[80px] rounded-full pointer-events-none transition-colors"
                style={{ backgroundColor: plan.color }}
              />

              <div className="relative z-10">
                {/* HEAD: TITLE & ACTIONS */}
                <div className="flex justify-between items-start mb-6">
                  <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                    {plan.name}
                  </h1>
                  
                  <div className="flex gap-2">
                    {!isEditing ? (
                      <button
                        onClick={handleStartEdit}
                        className="flex items-center justify-center w-10 h-10 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-all border border-slate-200 shadow-sm"
                        title="Edit Plan"
                      >
                        <Edit3 size={18} />
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={handleCancelEdit}
                          className="flex items-center justify-center w-10 h-10 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-100 hover:text-rose-600 transition-all border border-rose-200"
                          title="Discard"
                        >
                          <X size={18} />
                        </button>
                        <button
                          onClick={handleSave}
                          className="flex items-center justify-center w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 hover:text-emerald-700 transition-all border border-emerald-200"
                          title="Commit Changes"
                        >
                          <Save size={18} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* PRICING */}
               
                
                <div className="flex items-baseline mb-4 items-center">
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-slate-400">₹</span>
                      <input 
                        type="number"
                        value={parseInt(plan.price.replace(/[^0-9]/g, '')) || 0}
                        onChange={(e) => handlePriceChange(Number(e.target.value))}
                        className="bg-slate-50 border-2 border-indigo-200 rounded-xl px-4 py-2 text-4xl font-bold text-slate-900 focus:outline-none focus:border-indigo-500 w-[200px]"
                        autoFocus
                      />
                    </div>
                  ) : (
                    <div className="flex items-start">
                      {plan.price.startsWith('₹') ? (
                        <>
                          <span className="text-2xl font-semibold text-slate-500 mt-1.5 mr-1">₹</span>
                          <span className="text-5xl font-bold tracking-tight text-slate-900">{plan.price.replace('₹', '')}</span>
                        </>
                      ) : (
                        <span className="text-5xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                      )}
                    </div>
                  )}
                  <div className="flex flex-col ml-3 text-sm text-slate-500 leading-tight">
                    <span>INR /</span>
                    <span>month (inclusive of GST)</span>
                  </div>
                </div>

                {/* DISCOUNTS */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {isEditing ? (
                    <div className="flex flex-col gap-3 w-full bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider w-28">Discount (%)</label>
                        <div className="relative flex-1">
                          <Zap size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-500 fill-indigo-500/20" />
                          <input 
                            type="number"
                            value={plan.discountPercent}
                            onChange={(e) => {
                              if (editedPlan) {
                                setEditedPlan({ ...editedPlan, discountPercent: Number(e.target.value) });
                              }
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                            min="0"
                            max="100"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider w-28">Flat Discount</label>
                        <div className="relative flex-1">
                          <Sparkles size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500 fill-amber-500/20" />
                          <input 
                            type="text"
                            value={plan.discountFlat}
                            onChange={(e) => {
                              if (editedPlan) {
                                setEditedPlan({ ...editedPlan, discountFlat: e.target.value });
                              }
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                            placeholder="e.g. ₹500"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {plan.discountPercent > 0 && (
                        <div className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100 flex items-center gap-1.5">
                          <Zap size={14} className="fill-indigo-600" />
                          <span className="text-xs font-bold uppercase tracking-widest">{plan.discountPercent}% OFF</span>
                        </div>
                      )}
                      {plan.discountFlat !== "₹0" && plan.discountFlat !== "" && (
                        <div className="px-3 py-1 bg-amber-50 text-amber-600 rounded-lg border border-amber-100 flex items-center gap-1.5">
                          <Sparkles size={14} className="fill-amber-600" />
                          <span className="text-xs font-bold uppercase tracking-widest">{plan.discountFlat} FLAT OFF</span>
                        </div>
                      )}
                      {(plan.discountPercent === 0 || !plan.discountPercent) && (plan.discountFlat === "₹0" || !plan.discountFlat) && (
                         <div className="h-7"></div> // Spacer to keep layout steady when no discounts 
                      )}
                    </>
                  )}
                </div>

                {/* SUBTITLE */}
                <p className="text-lg text-slate-800 mb-8">{plan.type}</p>

                {/* CTA */}
                <button className="w-full py-3.5 bg-slate-50 text-slate-900 border border-slate-200 font-semibold rounded-2xl mb-10 hover:bg-slate-100 transition-colors">
                  Upgrade to {plan.name}
                </button>

                {/* FEATURES */}
                <div className="space-y-6">
                  <h3 className="font-bold text-lg text-slate-900">
                    Everything included:
                  </h3>

                  <div className="flex flex-col gap-5">
                    {plan.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        layout 
                        className="flex gap-4 items-start group"
                      >
                        <div className="mt-0.5 shrink-0">
                          <Check size={20} className="text-slate-400" />
                        </div>
                        <span className="text-slate-700 font-medium leading-snug flex-1 pt-0.5">
                          {feature}
                        </span>
                        
                        {isEditing && (
                          <button 
                            onClick={() => handleRemoveFeature(idx)}
                            className="p-1.5 rounded-lg bg-rose-50 text-rose-500 opacity-0 group-hover:opacity-100 hover:bg-rose-500 hover:text-white transition-all shadow-sm border border-rose-100"
                            title="Remove Feature"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </motion.div>
                    ))}

                    {isEditing && (
                      <div className="flex gap-3 mt-2 pt-5 border-t border-dashed border-slate-200">
                        <input 
                          type="text"
                          placeholder="Add a new feature..."
                          value={newFeature}
                          onChange={(e) => setNewFeature(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleAddFeature();
                          }}
                          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all"
                        />
                        <button 
                          onClick={handleAddFeature}
                          className="px-5 py-2.5 bg-slate-900 rounded-xl text-white font-semibold text-sm hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                          <Plus size={16} /> Add
                        </button>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
    
  );
}

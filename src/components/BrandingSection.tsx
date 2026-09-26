import React, { useState } from 'react';
import { 
  Bot, 
  Wallet, 
  PiggyBank, 
  PieChart, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  GraduationCap, 
  Users, 
  User,
  ArrowUpRight
} from 'lucide-react';
import { UserPersona } from '../types';
import heroVisual from '../assets/images/fintech_advisor_hero_1790434986401.jpg';

interface BrandingSectionProps {
  onSelectPersonaPreset?: (email: string, password: string) => void;
}

export const BrandingSection: React.FC<BrandingSectionProps> = ({ onSelectPersonaPreset }) => {
  const [activePersona, setActivePersona] = useState<UserPersona>('salaried');

  const personaDetails = {
    salaried: {
      label: 'Salaried Professional',
      icon: Briefcase,
      email: 'sarah.pro@advisor.ai',
      pass: 'Password123!',
      tip: '50/30/20 budget optimized with automatic 401(k) and emergency fund routing.',
      monthlyNet: '$6,850',
      savingsRate: '28%',
      aiInsight: 'Surplus of $420 detected this pay cycle. Auto-allocating to High-Yield Savings.'
    },
    student: {
      label: 'College Student',
      icon: GraduationCap,
      email: 'liam.student@advisor.ai',
      pass: 'CampusFin2026',
      tip: 'Smart micro-budgeting for textbooks, campus meal plans, and student loans.',
      monthlyNet: '$1,450',
      savingsRate: '15%',
      aiInsight: 'Textbook budget capped. Swapping off-campus dining saves $85 this month.'
    },
    freelancer: {
      label: 'Freelancer',
      icon: User,
      email: 'marcus.freelance@advisor.ai',
      pass: 'Freelance2026!',
      tip: 'Variable income smoothing and quarterly estimated tax set-aside cushions.',
      monthlyNet: '$8,200',
      savingsRate: '32%',
      aiInsight: 'Invoice #109 cleared. Reserving 25% for tax vault; $1,200 available for growth.'
    },
    family: {
      label: 'Family / Household',
      icon: Users,
      email: 'elena.family@advisor.ai',
      pass: 'FamilySafe2026',
      tip: 'Dual-earner aggregation, household bills sync, and children education fund.',
      monthlyNet: '$11,400',
      savingsRate: '24%',
      aiInsight: 'Utility costs down 8% vs last winter. College 529 plan is 94% on track.'
    }
  };

  const currentPersona = personaDetails[activePersona];

  return (
    <div className="relative flex flex-col justify-between w-full h-full p-8 lg:p-12 overflow-hidden bg-[#0F172A] text-slate-100">
      {/* Background Subtle Tech Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl" />
        <svg className="w-full h-full stroke-slate-800/40 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 40M40 0L40 40" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Header / Brand identity */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/20">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              Personal Finance Advisor Bot
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60">
                AI Powered
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Fintech Intelligence Platform</p>
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-xl">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
            “Take control of your money. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
              Plan smarter. Save better.
            </span>”
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
            An intelligent financial copilot that records monthly income, tracks daily expenses, 
            generates tailored budgets, and delivers real-time Gemini AI recommendations for financial security.
          </p>
        </div>
      </div>

      {/* Centerpiece: Hero Visual & Interactive Live Financial Simulation */}
      <div className="relative z-10 my-6">
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900/80 shadow-2xl backdrop-blur-sm">
          {/* Hero Visual Asset */}
          <div className="relative h-44 sm:h-52 w-full overflow-hidden">
            <img 
              src={heroVisual} 
              alt="Personal Finance Advisor Bot AI Visualization" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
            
            {/* Floating Live Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700 text-xs font-medium text-emerald-400 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AI Engine Active · 24/7 Monitoring
            </div>

            {/* Quick Financial Snapshot Overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/80">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Monthly Net:</span>
                <span className="font-bold text-white font-mono">{currentPersona.monthlyNet}</span>
              </div>
              <div className="h-3 w-px bg-slate-700" />
              <div className="flex items-center gap-2">
                <PiggyBank className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Savings Rate:</span>
                <span className="font-bold text-emerald-400 font-mono">{currentPersona.savingsRate}</span>
              </div>
            </div>
          </div>

          {/* Interactive Persona Tabs for Audience Preview */}
          <div className="p-4 bg-slate-900/95 border-t border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Tailored for every lifestyle:
              </span>
              {onSelectPersonaPreset && (
                <button
                  type="button"
                  onClick={() => onSelectPersonaPreset(currentPersona.email, currentPersona.pass)}
                  className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  Quick-fill demo <ArrowUpRight className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Persona Switcher Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-950/70 rounded-xl border border-slate-800/80">
              {(Object.keys(personaDetails) as UserPersona[]).map((pKey) => {
                const item = personaDetails[pKey];
                const IconComponent = item.icon;
                const isActive = activePersona === pKey;
                return (
                  <button
                    key={pKey}
                    type="button"
                    onClick={() => setActivePersona(pKey)}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400/40' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span className="truncate">{pKey.charAt(0).toUpperCase() + pKey.slice(1)}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic AI Insight Card based on persona */}
            <div className="mt-3 flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs">
              <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="space-y-0.5 flex-1">
                <div className="text-[11px] font-semibold text-slate-300">
                  Gemini Advisor · {currentPersona.label} Focus
                </div>
                <p className="text-slate-400 leading-snug">
                  {currentPersona.aiInsight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="relative z-10 pt-2 border-t border-slate-800/80">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/30 transition-colors">
            <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 shrink-0">
              <PieChart className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">AI-Powered Budget Planning</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Automated 50/30/20 category splits tailored to your cashflow.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/30 transition-colors">
            <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 shrink-0">
              <Wallet className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Smart Expense Tracking</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Real-time daily logging with instant anomaly detection.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/30 transition-colors">
            <div className="p-1.5 rounded-md bg-indigo-500/10 text-indigo-400 shrink-0">
              <PiggyBank className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Personalized Saving Goals</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Autonomous goal tracking for emergency funds and purchases.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/30 transition-colors">
            <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-400 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white">Monthly Financial Reports</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Exportable analytics with actionable next-month targets.</p>
            </div>
          </div>
        </div>

        {/* Security Trust Footer */}
        <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>256-Bit SSL Encryption · Flask + SQLite Architecture</span>
          </div>
          <span className="hidden sm:inline">Compliant & Private</span>
        </div>
      </div>
    </div>
  );
};

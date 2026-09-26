import React, { useState } from 'react';
import { 
  Bot, 
  Wallet, 
  PiggyBank, 
  PieChart, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  LogOut, 
  Sparkles, 
  Plus, 
  FileText, 
  ShieldCheck, 
  Calendar, 
  User, 
  DollarSign, 
  CheckCircle2, 
  ChevronRight, 
  Sliders, 
  Send,
  Download
} from 'lucide-react';
import { AppRoute, UserProfile } from '../types';

interface DashboardViewProps {
  user: UserProfile;
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  onLogout: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  currentRoute,
  onNavigate,
  onLogout
}) => {
  const [aiQuestion, setAiQuestion] = useState('');
  const [advisorResponses, setAdvisorResponses] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: `Hello ${user.name}! I've analyzed your financial cashflow for this month. You're saving at 42% rate, which is 12% above average. I spotted an opportunity to save $85/month by optimizing recurrent subscriptions. Would you like to review them?`,
      time: 'Just now'
    }
  ]);
  const [isAskingAi, setIsAskingAi] = useState(false);

  const handleAskAdvisor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;

    const userQ = aiQuestion.trim();
    setAiQuestion('');
    setAdvisorResponses((prev) => [
      ...prev,
      { sender: 'user', text: userQ, time: 'Just now' }
    ]);

    setIsAskingAi(true);
    setTimeout(() => {
      let reply = "Based on your current budget limits, you have $410 remaining in your discretionary category. Keeping this buffer intact will ensure your Emergency Savings milestone is achieved 2 weeks early.";
      if (userQ.toLowerCase().includes('grocer') || userQ.toLowerCase().includes('food')) {
        reply = "Your grocery expense totals $480 across 6 trips. Meal prepping twice weekly historically drops grocery costs by 18% for your profile.";
      } else if (userQ.toLowerCase().includes('saving') || userQ.toLowerCase().includes('invest')) {
        reply = "With your current surplus of $1,850/mo, routing $750 into a diversified index portfolio while maintaining your 6-month emergency reserve is mathematically optimal.";
      }
      setAdvisorResponses((prev) => [
        ...prev,
        { sender: 'ai', text: reply, time: 'Just now' }
      ]);
      setIsAskingAi(false);
    }, 800);
  };

  const navLinks: Array<{ route: AppRoute; label: string }> = [
    { route: '/dashboard', label: 'Overview' },
    { route: '/income', label: 'Income' },
    { route: '/expenses', label: 'Expenses' },
    { route: '/budget', label: 'Budget' },
    { route: '/savings', label: 'Savings' },
    { route: '/reports', label: 'Reports' },
    { route: '/ai-advisor', label: 'AI Advisor' },
    { route: '/profile', label: 'Profile' }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans">
      
      {/* Top Bar Contract (1 row, 3 zones) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Zone 1: Wordmark */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0F172A] text-white shadow-xs">
              <Bot className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap">
              Personal Finance Advisor Bot
            </span>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => onNavigate(item.route)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'bg-slate-100 text-blue-700 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: User actions & Logout */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 pl-2 text-xs text-slate-600">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                {user.name.charAt(0)}
              </div>
              <span className="font-medium text-slate-800 truncate max-w-[120px]">{user.name}</span>
            </div>

            <button
              type="button"
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
              title="Return to Login Screen"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Sub-header on Mobile for Route Navigation */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-2 overflow-x-auto">
        <div className="flex items-center gap-1 w-max">
          {navLinks.map((item) => (
            <button
              key={item.route}
              type="button"
              onClick={() => onNavigate(item.route)}
              className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
                currentRoute === item.route
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Banner with Welcome & Route Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>Personal Finance Advisor</span>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-slate-700 capitalize">{currentRoute.replace('/', '')}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Welcome back, {user.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Here is your financial status for September 2026. All accounts reconciled and safe.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigate('/expenses')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Log Expense</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/reports')}
              className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* 4 Primary Financial Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Monthly Income */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Monthly Income</span>
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              $6,850.00
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium mt-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+8.4% vs last month</span>
            </div>
          </div>

          {/* Monthly Expenses */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Total Expenses</span>
              <div className="p-2 rounded-lg bg-rose-50 text-rose-600">
                <Wallet className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              $2,940.50
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
              <span>42.9% of monthly income</span>
            </div>
          </div>

          {/* Budget Health */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Budget Health</span>
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <PieChart className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              $1,350.00
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium mt-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Remaining spending capacity</span>
            </div>
          </div>

          {/* Net Savings & Goals */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Net Savings</span>
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                <PiggyBank className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              $3,909.50
            </div>
            <div className="flex items-center gap-1.5 text-xs text-indigo-600 font-medium mt-2">
              <span>57.1% savings rate this cycle</span>
            </div>
          </div>
        </div>

        {/* Middle Section: Gemini AI Advisor & Expense Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Gemini AI Advisor Chat / Copilot (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 text-white shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Gemini AI Financial Advisor</h3>
                    <p className="text-xs text-slate-500">Autonomous money analysis & intelligent suggestions</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Online
                </span>
              </div>

              {/* Chat Log */}
              <div className="mt-4 space-y-3 max-h-64 overflow-y-auto pr-1">
                {advisorResponses.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${item.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                        item.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-tr-xs'
                          : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-xs'
                      }`}
                    >
                      {item.text}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">{item.time}</span>
                  </div>
                ))}
                {isAskingAi && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 italic">
                    <Sparkles className="w-3.5 h-3.5 animate-spin text-blue-500" />
                    <span>Advisor calculating optimal recommendation...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Prompts & Input Form */}
            <div className="mt-4 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 text-xs">
                <button
                  type="button"
                  onClick={() => setAiQuestion('How can I save $200 more this month?')}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 whitespace-nowrap transition-colors cursor-pointer"
                >
                  💡 Save $200 more
                </button>
                <button
                  type="button"
                  onClick={() => setAiQuestion('Review my grocery spending vs budget')}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 whitespace-nowrap transition-colors cursor-pointer"
                >
                  🛒 Grocery spending
                </button>
                <button
                  type="button"
                  onClick={() => setAiQuestion('What is my forecast for year-end emergency fund?')}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 whitespace-nowrap transition-colors cursor-pointer"
                >
                  🎯 Emergency fund forecast
                </button>
              </div>

              <form onSubmit={handleAskAdvisor} className="flex items-center gap-2">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="Ask your Personal Finance Advisor anything..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-xs text-slate-900 placeholder-slate-400 bg-slate-50"
                />
                <button
                  type="submit"
                  disabled={!aiQuestion.trim() || isAskingAi}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Ask</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Budget & Expense Breakdown (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Expense Breakdown</h3>
              <span className="text-xs text-slate-500">September 2026</span>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Housing & Rent', amount: '$1,200', pct: 41, color: 'bg-blue-600' },
                { name: 'Groceries & Food', amount: '$480', pct: 16, color: 'bg-emerald-500' },
                { name: 'Utilities & Internet', amount: '$240', pct: 8, color: 'bg-amber-500' },
                { name: 'Transport & Fuel', amount: '$310', pct: 10, color: 'bg-indigo-500' },
                { name: 'Dining & Entertainment', amount: '$380', pct: 13, color: 'bg-rose-500' },
                { name: 'Subscriptions & Software', amount: '$95', pct: 4, color: 'bg-purple-500' },
                { name: 'Healthcare & Wellness', amount: '$235', pct: 8, color: 'bg-teal-500' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="font-mono text-slate-900 font-semibold">{item.amount} ({item.pct}%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.pct * 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Overall Monthly Budget Used:</span>
              <span className="font-bold text-slate-900 font-mono">68.5%</span>
            </div>
          </div>

        </div>

        {/* Savings Goals & Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Savings Goals (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Savings Goals</h3>
              <button 
                type="button" 
                onClick={() => onNavigate('/savings')}
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                Manage Goals
              </button>
            </div>

            <div className="space-y-3.5">
              {[
                { title: 'Emergency Fund', current: '$18,500', target: '$25,000', pct: 74, status: 'On Track' },
                { title: 'Home Down Payment', current: '$42,000', target: '$80,000', pct: 52, status: 'Consistent' },
                { title: 'New Workstation / Tech', current: '$2,700', target: '$3,000', pct: 90, status: 'Almost There' }
              ].map((goal, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-800">{goal.title}</span>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                      {goal.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-1.5">
                    <span>{goal.current}</span>
                    <span>Target: {goal.target}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full"
                      style={{ width: `${goal.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions Ledger (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Recent Transactions</h3>
              <button 
                type="button" 
                onClick={() => onNavigate('/expenses')}
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase font-semibold">
                    <th className="pb-2">Description</th>
                    <th className="pb-2">Category</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {[
                    { desc: 'Whole Foods Market', cat: 'Groceries', date: 'Sep 25, 2026', amt: '-$94.30', status: 'cleared' },
                    { desc: 'Monthly Salary Deposit', cat: 'Income', date: 'Sep 24, 2026', amt: '+$3,425.00', status: 'income' },
                    { desc: 'Fiber Internet Service', cat: 'Utilities', date: 'Sep 22, 2026', amt: '-$69.99', status: 'cleared' },
                    { desc: 'Cloud Storage Subscription', cat: 'Software', date: 'Sep 20, 2026', amt: '-$9.99', status: 'cleared' },
                    { desc: 'Corner Bistro Dinner', cat: 'Dining', date: 'Sep 19, 2026', amt: '-$42.50', status: 'cleared' }
                  ].map((tx, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 font-medium text-slate-900">{tx.desc}</td>
                      <td className="py-2.5 text-slate-500">{tx.cat}</td>
                      <td className="py-2.5 text-slate-400 font-mono text-[11px]">{tx.date}</td>
                      <td className={`py-2.5 text-right font-mono font-semibold ${
                        tx.status === 'income' ? 'text-emerald-600' : 'text-slate-900'
                      }`}>
                        {tx.amt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-4 px-6 text-center text-xs text-slate-400">
        <p>Personal Finance Advisor Bot · Built with Flask + SQLite Architecture & Gemini AI Intelligence</p>
      </footer>
    </div>
  );
};

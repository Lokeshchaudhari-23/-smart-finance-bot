/**
 * Personal Finance Advisor Bot
 * Modern, Responsive, Professional Split-Screen Authentication & Finance Intelligence System
 */

import React, { useState } from 'react';
import { BrandingSection } from './components/BrandingSection';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { ForgotPasswordModal } from './components/ForgotPasswordModal';
import { DashboardView } from './components/DashboardView';
import { AppRoute, UserProfile, AuthResponse } from './types';
import { Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('/login');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  
  // Preset credentials filled from persona tabs
  const [presetEmail, setPresetEmail] = useState('');
  const [presetPassword, setPresetPassword] = useState('');

  // Forgot password modal state
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [forgotModalEmail, setForgotModalEmail] = useState('');

  // Handle successful login
  const handleAuthSuccess = (authData: AuthResponse) => {
    if (authData.user) {
      setCurrentUser(authData.user);
      setCurrentRoute('/dashboard');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentRoute('/login');
  };

  // Preset filler
  const handleSelectPreset = (email: string, pass: string) => {
    setPresetEmail(email);
    setPresetPassword(pass);
  };

  // Open modal
  const handleOpenForgotPassword = (email?: string) => {
    setForgotModalEmail(email || presetEmail || '');
    setIsForgotModalOpen(true);
  };

  // If user is authenticated and on a dashboard-family route, render DashboardView
  const isDashboardRoute = [
    '/dashboard',
    '/income',
    '/expenses',
    '/budget',
    '/savings',
    '/reports',
    '/ai-advisor',
    '/profile'
  ].includes(currentRoute);

  if (currentUser && isDashboardRoute) {
    return (
      <DashboardView
        user={currentUser}
        currentRoute={currentRoute}
        onNavigate={(route) => setCurrentRoute(route)}
        onLogout={handleLogout}
      />
    );
  }

  // Split-Screen Authentication Shell
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] flex flex-col justify-center text-[#1E293B] antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Top Mobile Banner Bar (Only visible on small screens to maintain strong brand recognition) */}
      <div className="lg:hidden bg-[#0F172A] text-white p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-white block">
              Personal Finance Advisor Bot
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">
              “Plan smarter. Save better.”
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => setCurrentRoute(currentRoute === '/login' ? '/register' : '/login')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 transition-colors"
          >
            {currentRoute === '/login' ? 'Create Account' : 'Sign In'}
          </button>
        </div>
      </div>

      {/* Main Split-Screen Container */}
      <div className="flex-1 flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* Left Section — Branding & Visual Identity (52% on desktop) */}
        <div className="lg:w-[52%] xl:w-[55%] flex flex-col justify-between shrink-0">
          <BrandingSection onSelectPersonaPreset={handleSelectPreset} />
        </div>

        {/* Right Section — Auth Forms (48% on desktop) */}
        <div className="lg:w-[48%] xl:w-[45%] flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-[#F8FAFC] overflow-y-auto">
          <div className="w-full max-w-md my-auto py-6">
            
            {/* Quick Switch Header between Login & Register on Desktop */}
            <div className="hidden lg:flex items-center justify-end mb-6 text-xs text-slate-500">
              {currentRoute === '/login' ? (
                <div className="flex items-center gap-1.5">
                  <span>New to Advisor Bot?</span>
                  <button
                    type="button"
                    onClick={() => setCurrentRoute('/register')}
                    className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    Create Account
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span>Already have an account?</span>
                  <button
                    type="button"
                    onClick={() => setCurrentRoute('/login')}
                    className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              )}
            </div>

            {/* Form Component Switcher */}
            {currentRoute === '/register' ? (
              <RegisterForm
                onSuccess={handleAuthSuccess}
                onNavigateToLogin={() => setCurrentRoute('/login')}
              />
            ) : (
              <LoginForm
                onSuccess={handleAuthSuccess}
                onNavigateToRegister={() => setCurrentRoute('/register')}
                onOpenForgotPassword={handleOpenForgotPassword}
                initialEmail={presetEmail}
                initialPassword={presetPassword}
              />
            )}
          </div>
        </div>

      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
        defaultEmail={forgotModalEmail}
      />
    </div>
  );
}

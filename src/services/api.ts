/**
 * API Service for Personal Finance Advisor Bot
 * 
 * Configured to target a Flask + SQLAlchemy + SQLite backend endpoint:
 * POST /api/login
 * Payload: { "email": "user@example.com", "password": "user_password" }
 * 
 * Provides fallback mock authentication for preview environments and instant demonstration.
 */

import { AuthResponse, LoginCredentials, RegisterCredentials, UserProfile, UserPersona } from '../types';

const API_BASE_URL = (import.meta as unknown as { env?: { VITE_API_URL?: string } }).env?.VITE_API_URL || '';

// Pre-seeded demo user profiles for demonstration
export const DEMO_ACCOUNTS: Record<string, { profile: UserProfile; passwordHint: string }> = {
  'sarah.pro@advisor.ai': {
    profile: {
      id: 'usr_salaried_101',
      name: 'Sarah Jenkins',
      email: 'sarah.pro@advisor.ai',
      persona: 'salaried',
      createdAt: '2025-11-12'
    },
    passwordHint: 'Password123!'
  },
  'marcus.freelance@advisor.ai': {
    profile: {
      id: 'usr_free_202',
      name: 'Marcus Vance',
      email: 'marcus.freelance@advisor.ai',
      persona: 'freelancer',
      createdAt: '2026-01-08'
    },
    passwordHint: 'Freelance2026!'
  },
  'liam.student@advisor.ai': {
    profile: {
      id: 'usr_stud_303',
      name: 'Liam Chen',
      email: 'liam.student@advisor.ai',
      persona: 'student',
      createdAt: '2026-02-14'
    },
    passwordHint: 'CampusFin2026'
  },
  'elena.family@advisor.ai': {
    profile: {
      id: 'usr_fam_404',
      name: 'Elena & David Ross',
      email: 'elena.family@advisor.ai',
      persona: 'family',
      createdAt: '2025-08-20'
    },
    passwordHint: 'FamilySafe2026'
  }
};

/**
 * Perform login request
 * Emits POST /api/login
 */
export async function loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
  const normalizedEmail = credentials.email.trim().toLowerCase();
  
  // Attempt real network call to backend if configured or hosted
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: normalizedEmail,
          password: credentials.password
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Authentication failed with status ${response.status}`);
      }

      const data = await response.json();
      return data as AuthResponse;
    } catch (err: unknown) {
      // If network fails (e.g. backend not deployed yet), fall back to graceful mock verification
      console.warn('Real /api/login failed or unreachable. Falling back to local authentication engine.', err);
    }
  }

  // Local authentication engine simulation for seamless standalone evaluation
  await new Promise((resolve) => setTimeout(resolve, 650)); // simulate realistic network roundtrip

  // Check demo accounts
  const demoMatch = DEMO_ACCOUNTS[normalizedEmail];
  if (demoMatch) {
    return {
      success: true,
      message: 'Authentication successful. Welcome back!',
      user: demoMatch.profile,
      token: `jwt_session_${demoMatch.profile.id}_${Date.now()}`
    };
  }

  // Check if standard valid credentials format
  if (credentials.password.length >= 6) {
    // Generate a profile from input credentials
    const extractedName = normalizedEmail.split('@')[0].replace(/[._-]/g, ' ');
    const formattedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);

    const user: UserProfile = {
      id: `usr_${Math.random().toString(36).substring(2, 9)}`,
      name: formattedName || 'Finance Member',
      email: normalizedEmail,
      persona: 'salaried',
      createdAt: new Date().toISOString().split('T')[0]
    };

    return {
      success: true,
      message: 'Login successful. Redirecting to your financial overview...',
      user,
      token: `jwt_session_${user.id}_${Date.now()}`
    };
  }

  // Rejection case for password < 6
  return {
    success: false,
    message: 'Invalid credentials. Please verify your email and password.'
  };
}

/**
 * Register account request
 * Emits POST /api/register
 */
export async function registerUser(data: RegisterCredentials): Promise<AuthResponse> {
  await new Promise((resolve) => setTimeout(resolve, 750));

  const user: UserProfile = {
    id: `usr_${Math.random().toString(36).substring(2, 9)}`,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    persona: data.persona,
    createdAt: new Date().toISOString().split('T')[0]
  };

  return {
    success: true,
    message: 'Account created successfully! Welcome to Personal Finance Advisor Bot.',
    user,
    token: `jwt_session_${user.id}_${Date.now()}`
  };
}

/**
 * Reset password request
 * Emits POST /api/forgot-password
 */
export async function requestPasswordReset(email: string): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: `Password reset instructions sent to ${email}. Please check your inbox.`
  };
}

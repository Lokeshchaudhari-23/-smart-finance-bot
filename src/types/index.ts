/**
 * Application Types for Personal Finance Advisor Bot
 */

export type AppRoute =
  | '/login'
  | '/register'
  | '/dashboard'
  | '/income'
  | '/expenses'
  | '/budget'
  | '/savings'
  | '/reports'
  | '/ai-advisor'
  | '/profile';

export type UserPersona = 'salaried' | 'student' | 'freelancer' | 'family';

export interface PersonaInfo {
  id: UserPersona;
  title: string;
  subtitle: string;
  sampleIncome: number;
  sampleSavingsRate: string;
  focusArea: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  persona: UserPersona;
  acceptTerms: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  persona: UserPersona;
  avatar?: string;
  token?: string;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: UserProfile;
  token?: string;
}

export interface ExpenseItem {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: string;
  status: 'cleared' | 'pending';
}

export interface FinancialMetricOverview {
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlySavings: number;
  savingsRate: number;
  budgetAllocated: number;
  budgetUsed: number;
  savingsGoalTarget: number;
  savingsGoalCurrent: number;
  recentExpenses: ExpenseItem[];
  aiRecommendations: string[];
}

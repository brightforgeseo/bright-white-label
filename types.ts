import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  stats: { label: string; value: string }[];
  color: 'brand' | 'fuchsia' | 'cyan' | 'emerald' | 'orange' | 'violet';
  process: ServiceProcessStep[];
  tools: string[];
  deliverables: string[];
  faqs: ServiceFAQ[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface KeywordStrategyResult {
  topic: string;
  strategy: KeywordCluster[];
}

export interface KeywordCluster {
  clusterName: string;
  searchIntent: string;
  keywords: string[];
  contentIdea: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

// Blog Types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string; // Markdown body
}

export type NavigationHandler = (path: string) => void;
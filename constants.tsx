
import React from 'react';
import { Feature, Testimonial } from './types';

export const FEATURES: Feature[] = [
  {
    title: 'Personalized Learning Paths',
    description: 'Our AI analyzes your learning style and adapts lessons to fit your unique pace and goals.',
    icon: 'Brain'
  },
  {
    title: '24/7 Expert Assistance',
    description: 'Stuck on a problem at midnight? Lumina is always awake and ready to help you succeed.',
    icon: 'Clock'
  },
  {
    title: 'Multi-Subject Mastery',
    description: 'From advanced calculus to creative writing, we cover over 50+ subjects with deep expertise.',
    icon: 'BookOpen'
  },
  {
    title: 'Interactive Real-time Feedback',
    description: 'Get instant explanations and hints as you solve problems, rather than just the final answer.',
    icon: 'Zap'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Computer Science Student',
    content: 'Lumina helped me understand data structures in a way my lectures never could. It is like having a private tutor always by my side.',
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    name: 'James Wilson',
    role: 'High School Junior',
    content: 'The SAT prep module is incredible. My math score jumped by 120 points after just three weeks of consistent practice.',
    avatar: 'https://picsum.photos/id/91/100/100'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Language Learner',
    content: 'I use it for Spanish practice. The conversation mode feels so natural, and it never judges me for making mistakes.',
    avatar: 'https://picsum.photos/id/177/100/100'
  }
];

export const Icons = {
  Brain: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  BookOpen: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
};

import {
  Mail,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/icons';
import type { ComponentType, SVGProps } from 'react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  techStack: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconComponent;
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Nova Analytics',
    description:
      'Real-time analytics dashboard with interactive charts, AI-powered insights, and team collaboration features built for modern data teams.',
    image: '',
    techStack: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'CloudVault',
    description:
      'End-to-end encrypted cloud storage platform with seamless file syncing, version control, and zero-knowledge architecture.',
    image: '',
    techStack: ['Next.js', 'Go', 'AWS S3', 'Redis', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Pulse Chat',
    description:
      'Real-time messaging platform with video calls, screen sharing, and AI-assisted smart replies. Built for distributed teams.',
    image: '',
    techStack: ['React', 'WebRTC', 'Socket.io', 'MongoDB', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'FinTrack Pro',
    description:
      'Personal finance management app with budgeting tools, investment tracking, and predictive analytics powered by ML models.',
    image: '',
    techStack: ['Vue.js', 'Python', 'FastAPI', 'TensorFlow', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'DevForge',
    description:
      'Collaborative code editor with live pair programming, AI code completion, and integrated deployment pipelines.',
    image: '',
    techStack: ['React', 'Rust', 'WebAssembly', 'Monaco', 'K8s'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'HealthSync',
    description:
      'Health & wellness platform integrating wearable data, telemedicine, and personalized workout plans with AI coaching.',
    image: '',
    techStack: ['React Native', 'Node.js', 'GraphQL', 'Firebase', 'ML Kit'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, color: '#00d4ff' },
  { name: 'TypeScript', level: 92, color: '#3178c6' },
  { name: 'Node.js', level: 88, color: '#68a063' },
  { name: 'Python', level: 85, color: '#a855f7' },
  { name: 'PostgreSQL', level: 82, color: '#336791' },
  { name: 'Docker / K8s', level: 78, color: '#ec4899' },
  { name: 'AWS / GCP', level: 80, color: '#ff9900' },
  { name: 'GraphQL', level: 75, color: '#e535ab' },
];

export const FLOATING_TECH = [
  '⚛️', '🟦', '🐍', '🐳', '☁️', '🔥', '⚡', '🎨',
  '🚀', '💾', '🔒', '📊',
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'Senior Full-Stack Engineer',
    company: 'TechNova Inc.',
    duration: 'Jan 2024 — Present',
    description:
      'Leading the frontend architecture for a SaaS analytics platform serving 50K+ users. Spearheaded migration to Next.js 14, reducing bundle size by 40% and improving Core Web Vitals scores.',
    techStack: ['React', 'Next.js', 'TypeScript', 'AWS', 'PostgreSQL'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'CloudScale Labs',
    duration: 'Mar 2022 — Dec 2023',
    description:
      'Built and maintained microservices handling 1M+ daily API requests. Designed real-time data pipelines and implemented comprehensive CI/CD workflows.',
    techStack: ['Node.js', 'Go', 'Docker', 'Redis', 'MongoDB'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'PixelCraft Studio',
    duration: 'Jun 2020 — Feb 2022',
    description:
      'Developed responsive web applications and design systems for enterprise clients. Mentored junior developers and established coding standards.',
    techStack: ['React', 'Vue.js', 'SCSS', 'Figma', 'Storybook'],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: GithubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedinIcon },
  { name: 'Twitter', url: 'https://twitter.com', icon: TwitterIcon },
  { name: 'Email', url: 'mailto:hello@example.com', icon: Mail },
];

export { ExternalLink };

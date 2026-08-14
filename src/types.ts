export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whatIs?: string;
  whatDoes?: string;
  iconName: string;
  category: string;
  features: string[];
  duration: string;
  code: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: string;
  accentColor: string;
  svgPattern: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  avatarBg: string;
  avatarPattern: string;
  certifications: string[];
  schedule: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  department: string;
  rating: number;
  quote: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
}

export interface StatItem {
  id: string;
  label: string;
  number: number | string;
  prefix?: string;
  suffix?: string;
  subtext: string;
}

export interface ValueCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accent: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  iconName: string;
  highlight: string;
}

export type SkillLevel = "Production" | "Hands-on" | "Exploring";

export interface ProfileLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  headline: string;
  location?: string;
  bio: string;
  links: ProfileLink[];
}

export interface StackItem {
  label: string;
  level?: SkillLevel;
}

export interface StackCategory {
  name: string;
  items: StackItem[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  role: string;
  outcome: string;
  repoUrl?: string;
  liveUrl?: string;
}

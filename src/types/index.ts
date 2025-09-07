export interface User {
  id: string;
  name: string;
  email: string;
  ageGroup: 'teen' | 'young-adult';
  joinedDate: Date;
  badges: Badge[];
  streakDays: number;
}

export interface SleepEntry {
  id: string;
  userId: string;
  bedtime: Date;
  wakeTime: Date;
  quality: 1 | 2 | 3 | 4 | 5;
  notes?: string;
  date: Date;
}

export interface Task {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  dueDate?: Date;
  estimatedTime: number; // in minutes
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate: Date;
}

export interface ForumPost {
  id: string;
  userId: string;
  userName: string;
  title: string;
  content: string;
  createdAt: Date;
  replies: number;
  likes: number;
}

export interface PomodoroSession {
  id: string;
  duration: number;
  completed: boolean;
  startTime: Date;
  endTime?: Date;
}
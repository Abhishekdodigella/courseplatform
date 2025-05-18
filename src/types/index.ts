export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string; 
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
  category: string;
  duration: string;
  lessonCount: number;
  enrolled: boolean;
  lessons: Lesson[];
}
import { useState, useEffect } from 'react';
import { Course, Lesson } from '../types';
import { courses as initialCourses } from '../data/courses';

// Use localStorage to persist data
const STORAGE_KEY = 'learning-platform-data';

export const useCourseData = () => {
  const [courses, setCourses] = useState<Course[]>(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : initialCourses;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  const enrollInCourse = (courseId: string) => {
    setCourses(courses.map(course => 
      course.id === courseId ? { ...course, enrolled: true } : course
    ));
  };

  const markLessonComplete = (courseId: string, lessonId: string) => {
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        const updatedLessons = course.lessons.map(lesson => 
          lesson.id === lessonId ? { ...lesson, completed: true } : lesson
        );
        return { ...course, lessons: updatedLessons };
      }
      return course;
    }));
  };

  const resetLessonProgress = (courseId: string, lessonId: string) => {
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        const updatedLessons = course.lessons.map(lesson => 
          lesson.id === lessonId ? { ...lesson, completed: false } : lesson
        );
        return { ...course, lessons: updatedLessons };
      }
      return course;
    }));
  };

  return {
    courses,
    enrollInCourse,
    markLessonComplete,
    resetLessonProgress
  };
};
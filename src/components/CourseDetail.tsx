import React from 'react';
import { ArrowLeft, Clock, BookOpen, UserCircle } from 'lucide-react';
import { Course } from '../types';
import LessonItem from './LessonItem';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  onEnroll: (courseId: string) => void;
  onToggleLessonComplete: (courseId: string, lessonId: string) => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ 
  course, 
  onBack, 
  onEnroll, 
  onToggleLessonComplete 
}) => {
  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  const progress = course.lessons.length > 0 
    ? Math.round((completedLessons / course.lessons.length) * 100) 
    : 0;

  return (
    <div className="container mx-auto px-4 py-6">
      <button 
        onClick={onBack}
        className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-4"
      >
        <ArrowLeft size={16} className="mr-1" />
        <span>Back to Courses</span>
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 md:h-80">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <div className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm font-semibold inline-block mb-2 w-fit">
              {course.category}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">{course.title}</h1>
            <div className="flex flex-wrap items-center text-white/90 mt-2 gap-4">
              <div className="flex items-center">
                <UserCircle size={18} className="mr-1" />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-1" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <BookOpen size={18} className="mr-1" />
                <span>{course.lessonCount} lessons</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">About this course</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>

          {course.enrolled && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {completedLessons} of {course.lessons.length} lessons completed ({progress}%)
              </p>
            </div>
          )}

          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Course Content</h2>
              {!course.enrolled && (
                <button 
                  onClick={() => onEnroll(course.id)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Enroll Now
                </button>
              )}
            </div>

            <div className="border rounded-lg overflow-hidden">
              {course.lessons.map(lesson => (
                <LessonItem 
                  key={lesson.id}
                  lesson={lesson}
                  isEnrolled={course.enrolled}
                  onToggleComplete={() => onToggleLessonComplete(course.id, lesson.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
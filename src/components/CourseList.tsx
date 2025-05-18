import React from 'react';
import CourseCard from './CourseCard';
import { Course } from '../types';

interface CourseListProps {
  courses: Course[];
  onSelectCourse: (courseId: string) => void;
}

const CourseList: React.FC<CourseListProps> = ({ courses, onSelectCourse }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Expand Your Knowledge</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover top-quality courses taught by industry experts. Learn at your own pace and track your progress.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course} 
            onClick={() => onSelectCourse(course.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
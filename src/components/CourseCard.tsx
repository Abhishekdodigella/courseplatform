import React from 'react';
import { Clock, BookOpen, UserCircle } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
          {course.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <UserCircle size={16} className="mr-1" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen size={16} className="mr-1" />
            <span>{course.lessonCount} lessons</span>
          </div>
          <div>
            {course.enrolled ? (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Enrolled
              </span>
            ) : (
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                Not Enrolled
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
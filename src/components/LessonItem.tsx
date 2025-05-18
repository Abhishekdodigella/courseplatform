import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { Lesson } from '../types';

interface LessonItemProps {
  lesson: Lesson;
  isEnrolled: boolean;
  onToggleComplete: () => void;
}

const LessonItem: React.FC<LessonItemProps> = ({ lesson, isEnrolled, onToggleComplete }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div className="py-4 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200">
        <div className="flex-1">
          <h4 className="font-medium text-gray-800">{lesson.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <Clock size={14} className="mr-1" />
            <span>{lesson.duration}</span>
          </div>
        </div>
        {isEnrolled && (
          <button 
            onClick={onToggleComplete}
            className="ml-4 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label={lesson.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {lesson.completed ? (
              <CheckCircle className="text-green-500" size={24} />
            ) : (
              <Circle className="text-gray-300" size={24} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default LessonItem;
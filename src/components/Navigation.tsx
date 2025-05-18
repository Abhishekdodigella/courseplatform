import React from 'react';
import { GraduationCap as Graduation } from 'lucide-react';

const Navigation = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Graduation size={28} className="text-white" />
          <h1 className="text-xl font-bold">LearningHub</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-indigo-200 transition-colors duration-300">
              <a href="#">Courses</a>
            </li>
            <li className="hover:text-indigo-200 transition-colors duration-300">
              <a href="#">My Learning</a>
            </li>
            <li className="hover:text-indigo-200 transition-colors duration-300">
              <a href="#">Profile</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import Footer from './components/Footer';
import { useCourseData } from './services/courseService';

function App() {
  const { courses, enrollInCourse, markLessonComplete, resetLessonProgress } = useCourseData();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const selectedCourse = selectedCourseId 
    ? courses.find(course => course.id === selectedCourseId) 
    : null;

  const handleToggleLessonComplete = (courseId: string, lessonId: string) => {
    const course = courses.find(c => c.id === courseId);
    const lesson = course?.lessons.find(l => l.id === lessonId);
    
    if (lesson?.completed) {
      resetLessonProgress(courseId, lessonId);
    } else {
      markLessonComplete(courseId, lessonId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-grow">
        {selectedCourse ? (
          <CourseDetail 
            course={selectedCourse}
            onBack={() => setSelectedCourseId(null)}
            onEnroll={enrollInCourse}
            onToggleLessonComplete={handleToggleLessonComplete}
          />
        ) : (
          <CourseList 
            courses={courses} 
            onSelectCourse={setSelectedCourseId} 
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
import { Course } from '../types';

export const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to React",
    description: "Learn the fundamentals of React, including components, state, and props. Build interactive UIs with the most popular JavaScript library.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Sarah Johnson",
    category: "Web Development",
    duration: "4 hours",
    lessonCount: 5,
    enrolled: false,
    lessons: [
      {
        id: "1-1",
        title: "Getting Started with React",
        description: "Set up your development environment and create your first React app.",
        duration: "20 min",
        completed: false,
      },
      {
        id: "1-2",
        title: "Components and JSX",
        description: "Learn about components and JSX syntax.",
        duration: "30 min",
        completed: false,
      },
      {
        id: "1-3",
        title: "State and Props",
        description: "Understand how to use state and props in React components.",
        duration: "45 min",
        completed: false,
      },
      {
        id: "1-4",
        title: "Handling Events",
        description: "Learn how to handle user interactions in React.",
        duration: "30 min",
        completed: false,
      },
      {
        id: "1-5",
        title: "Building a Simple Project",
        description: "Put everything together by building a small project.",
        duration: "55 min",
        completed: false,
      }
    ]
  },
  {
    id: "2",
    title: "Advanced JavaScript Concepts",
    description: "Dive deep into JavaScript with advanced topics like closures, prototypes, and asynchronous programming.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Michael Chen",
    category: "Web Development",
    duration: "6 hours",
    lessonCount: 8,
    enrolled: false,
    lessons: [
      {
        id: "2-1",
        title: "Closures and Scope",
        description: "Understand JavaScript closures and scope chains.",
        duration: "40 min",
        completed: false,
      },
      {
        id: "2-2",
        title: "Prototypes and Inheritance",
        description: "Learn how JavaScript's prototype-based inheritance works.",
        duration: "45 min",
        completed: false,
      },
      {
        id: "2-3",
        title: "Asynchronous JavaScript",
        description: "Master promises, async/await, and other async patterns.",
        duration: "50 min",
        completed: false,
      },
      {
        id: "2-4",
        title: "Functional Programming",
        description: "Learn functional programming concepts in JavaScript.",
        duration: "45 min",
        completed: false,
      },
      {
        id: "2-5",
        title: "JavaScript Performance",
        description: "Optimize your JavaScript code for better performance.",
        duration: "35 min",
        completed: false,
      }
    ]
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    description: "Learn essential design principles to create beautiful and functional user interfaces.",
    image: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Emma Rodriguez",
    category: "Design",
    duration: "5 hours",
    lessonCount: 6,
    enrolled: false,
    lessons: [
      {
        id: "3-1",
        title: "Design Principles",
        description: "Learn about contrast, repetition, alignment, and proximity.",
        duration: "35 min",
        completed: false,
      },
      {
        id: "3-2",
        title: "Color Theory",
        description: "Understand how to use color effectively in your designs.",
        duration: "40 min",
        completed: false,
      },
      {
        id: "3-3",
        title: "Typography Basics",
        description: "Learn how to choose and pair fonts for optimal readability.",
        duration: "30 min",
        completed: false,
      },
      {
        id: "3-4",
        title: "User Research Methods",
        description: "Discover methods for understanding user needs and behaviors.",
        duration: "45 min",
        completed: false,
      },
      {
        id: "3-5",
        title: "Prototyping Tools",
        description: "Explore popular tools for creating interactive prototypes.",
        duration: "50 min",
        completed: false,
      }
    ]
  },
  {
    id: "4",
    title: "Data Science with Python",
    description: "Learn how to analyze and visualize data using Python libraries like Pandas and Matplotlib.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "David Kim",
    category: "Data Science",
    duration: "8 hours",
    lessonCount: 10,
    enrolled: false,
    lessons: [
      {
        id: "4-1",
        title: "Introduction to Data Analysis",
        description: "Learn the fundamentals of data analysis and Python.",
        duration: "30 min",
        completed: false,
      },
      {
        id: "4-2",
        title: "Working with Pandas",
        description: "Master data manipulation with Pandas library.",
        duration: "50 min",
        completed: false,
      },
      {
        id: "4-3",
        title: "Data Visualization with Matplotlib",
        description: "Create effective visualizations to communicate data insights.",
        duration: "45 min",
        completed: false,
      },
      {
        id: "4-4",
        title: "Statistical Analysis",
        description: "Learn basic statistical methods for data analysis.",
        duration: "55 min",
        completed: false,
      },
      {
        id: "4-5",
        title: "Machine Learning Basics",
        description: "Introduction to machine learning concepts and algorithms.",
        duration: "60 min",
        completed: false,
      }
    ]
  }
];
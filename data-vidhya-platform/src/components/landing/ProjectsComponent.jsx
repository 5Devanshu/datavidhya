'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  const projects = [
    {
      id: 1,
      image: '/images/Screenshot 2025-04-07 183331.png',
      description: 'Learn to automate, schedule, and monitor data pipelines with Apache Airflow. This course covers the basics, building efficient DAGs, and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily!',
      instructor: {
        name: 'Name Surname',
        position: 'Position, Company name'
      }
    },
    {
      id: 2,
      image: '/images/Screenshot 2025-04-07 183331.png',
      description: 'Learn to automate, schedule, and monitor data pipelines with Apache Airflow. This course covers the basics, building efficient DAGs, and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily!',
      instructor: {
        name: 'Name Surname',
        position: 'Position, Company name'
      }
    },
    {
      id: 3,
      image: '/images/Screenshot 2025-04-07 183331.png',
      description: 'Learn to automate, schedule, and monitor data pipelines with Apache Airflow. This course covers the basics, building efficient DAGs, and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily!',
      instructor: {
        name: 'Name Surname',
        position: 'Position, Company name'
      }
    }
  ];
  
  // Sample student reviews (to be shown when that tab is active)
  const reviews = [
    {
      id: 1,
      image: '/images/Screenshot 2025-04-07 183331.png',
      text: 'The Apache Airflow course was incredibly helpful. I learned practical skills that I could immediately apply to my work.',
      student: {
        name: 'Student Name',
        position: 'Position, Company name'
      }
    },
    {
      id: 2,
      image: '/images/Screenshot 2025-04-07 183331.png',
      text: 'Excellent content and instruction. I was able to build my first data pipeline within days of starting the course.',
      student: {
        name: 'Student Name',
        position: 'Position, Company name'
      }
    },
    {
      id: 3,
      image: '/images/Screenshot 2025-04-07 183331.png',
      text: 'The hands-on projects really helped me understand how to apply Apache Airflow in real-world scenarios.',
      student: {
        name: 'Student Name',
        position: 'Position, Company name'
      }
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-sm text-gray-500 uppercase">PROJECTS</div>
          <h1 className="text-4xl font-bold mt-2">Work on Real Time <span className="relative">
            Projects
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-600"></div>
          </span></h1>
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
            Gain proficiency with 14+ extensive projects designed to provide 
            practical, real-world data engineering experience
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full overflow-hidden border border-gray-200">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 text-sm font-medium transition-colors ${
                activeTab === 'projects'
                  ? 'bg-purple-600 text-white'
                  : 'bg-transparent text-gray-600'
              }`}
            >
              Data Vidhya Projects
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-8 py-3 text-sm font-medium transition-colors ${
                activeTab === 'reviews'
                  ? 'bg-purple-600 text-white'
                  : 'bg-transparent text-gray-600'
              }`}
            >
              Student Reviews
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(activeTab === 'projects' ? projects : reviews).map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden border border-gray-100">
              {/* Project Image */}
              <div className="relative h-60">
                <Image 
                  src={item.image}
                  alt="Project diagram" 
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Project Description */}
              <div className="p-5">
                <p className="text-gray-700 text-sm">
                  {activeTab === 'projects' ? item.description : item.text}
                </p>
                
                {/* Instructor/Student Info */}
                <div className="flex items-center mt-4 gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-medium">
                      {activeTab === 'projects' ? item.instructor.name : item.student.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {activeTab === 'projects' ? item.instructor.position : item.student.position}
                    </p>
                  </div>
                  
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-gray-800 text-white hover:bg-gray-700 rounded px-6 py-2 text-sm">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
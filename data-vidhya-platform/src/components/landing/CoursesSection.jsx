'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Quote } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const CoursesSection = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('projects');

  const courses = [
    {
      id: 1,
      title: 'Workflow Orchestration with Apache Airflow for Data Engineering',
      instructor: 'Darshit Parmar',
      reviews: 800,
      originalPrice: 29.00,
      price: 9.00,
      language: 'ENGLISH',
      
      slug: 'apache-airflow-data-engineering'
    },
    {
      id: 2,
      title: 'Workflow Orchestration with Apache Airflow for Data Engineering',
      instructor: 'Darshit Parmar',
      reviews: 800,
      originalPrice: 29.00,
      price: 9.00,
      language: 'ENGLISH',
      
      slug: 'apache-airflow-data-engineering-2'
    },
    {
      id: 3,
      title: 'Workflow Orchestration with Apache Airflow for Data Engineering',
      instructor: 'Darshit Parmar',
      reviews: 800,
      originalPrice: 29.00,
      price: 9.00,
      language: 'ENGLISH',
      
      slug: 'apache-airflow-data-engineering-3'
    }
  ];

  // Student reviews data
  const studentReviews = [
    {
      id: 1,
      name: 'Alex Johnson',
      position: 'Data Engineer at TechCorp',
      image: '/api/placeholder/64/64',
      rating: 5,
      review: 'The Apache Airflow course completely transformed my workflow automation skills. The hands-on projects were incredibly practical and relevant to real-world scenarios.',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'Senior Data Scientist',
      image: '/api/placeholder/64/64',
      rating: 5,
      review: 'Excellent course content and instructor support. I was able to immediately apply what I learned to optimize our data pipelines at work.',
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Cloud Architect',
      image: '/api/placeholder/64/64',
      rating: 4,
      review: 'The AWS integration examples were particularly helpful. Great balance of theory and practice throughout the entire course.',
    }
  ];

  // Tab click handler
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-sm text-gray-500 uppercase tracking-wide">COURSES</div>
          <h1 className="text-4xl font-bold mt-4 mb-1">Explore Our Data Engineering</h1>
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold relative">
              Courses
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-600"></div>
            </h1>
          </div>
          <p className="text-gray-700 mt-6">
            Unlock your potential with our expert-led courses.
          </p>
        </div>

      

        {/* Projects Tab Content */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-r from-blue-500 to-green-500 relative">
                    <div className="w-full h-full relative">
                      <Image 
                        src="/images/Screenshot 2025-04-07 182739.png" 
                        alt={course.imageTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-4 font-bold">
                        {course.imageTitle}
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded">
                      {course.language}
                    </div>
                    <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-lg">
                      HOT
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-white rounded-bl-lg px-2 py-1">
                    <div className="flex items-center">
                      <span className="text-gray-400 text-xs line-through mr-1">${course.originalPrice.toFixed(2)}</span>
                      <span className="text-purple-600 font-bold">${course.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <Link href={`/courses/${course.slug}`} className="hover:text-purple-600 transition-colors">
                    <h3 className="font-medium text-gray-900 mb-3">
                      {course.title}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-2 relative">
                        <Image 
                          src="/images/Screenshot 2025-04-07 183159.png" 
                          alt={course.instructor}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <Link href={`/instructors/${course.instructor.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-700 hover:text-purple-600 transition-colors">
                        {course.instructor}
                      </Link>
                    </div>
                    
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium">5</span>
                      <span className="ml-1 text-xs text-gray-500">({course.reviews}+ Reviews)</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Link href={`/courses/${course.slug}/enroll`}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm py-1">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Reviews Tab Content */}
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentReviews.map((review) => (
              <Card key={review.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-600">
                      <Image 
                        src={review.image} 
                        alt={review.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="font-medium text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.position}</p>
                    <div className="flex items-center justify-center mt-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-8 w-8 text-gray-200 absolute -top-2 -left-2 opacity-50" />
                    <p className="text-gray-700 text-sm italic relative z-10 pl-4">
                      "{review.review}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          {activeTab === 'projects' ? (
            <Link href="/courses">
              <Button variant="outline" className="bg-gray-800 text-white hover:bg-gray-700 border-0 rounded-md px-6 py-2">
                View All Courses
              </Button>
            </Link>
          ) : (
            <Link href="/testimonials">
              <Button variant="outline" className="bg-gray-800 text-white hover:bg-gray-700 border-0 rounded-md px-6 py-2">
                Read All Reviews
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
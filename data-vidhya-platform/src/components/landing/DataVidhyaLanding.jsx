import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const DataVidhyaLanding = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div><img src="/images/Screenshot 2025-04-07 185730.png" alt="" /></div>
            <span className="font-semibold text-lg">Data Vidhya</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-600">Courses</a>
            <a href="#" className="text-gray-800 hover:text-blue-600">Platform</a>
            <a href="#" className="text-gray-800 hover:text-blue-600">Resources</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-24">
        {/* Abstract shapes for background */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute right-0 top-24 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Unlock your <span className="text-purple-600">Data Engineering</span> potential today <span className="inline-block animate-bounce">🎉</span>
            </h1>
            
            <div className="my-8 space-y-4">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700">Engage in Real-time Projects</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700">Solve leet-code like problems</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-gray-700">Learn latest trends from our courses</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Explore Courses
              </Button>
              <Button variant="outline" className="bg-gray-800 text-white hover:bg-gray-700 border-none">
                Solve Questions
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/5 mt-12 lg:mt-0">
            <div className="h-72 w-72 lg:h-96 lg:w-96 bg-gradient-to-bl from-purple-500 via-blue-500 to-pink-400 rounded-full blur-lg opacity-70"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="border border-gray-200 bg-white">
    <CardContent className="p-6">
      <div className="mb-4">
        <img
          src="\images\image.png"
          alt="Data Vidhya Platform"
          className="w-full h-auto rounded-md"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">Data Vidhya <span className="text-blue-600">Courses</span></h2>
      <p className="text-gray-600 text-sm">
        Our extensive course catalogue keeps you in trend with data Engineering
      </p>
    </CardContent>
  </Card>
        <Card className="border border-gray-200 bg-white">
          <CardContent className="p-6">
            <div className="mb-4">
            <img
          src="\images\Screenshot 2025-04-07 182159.png"
          alt="Data Vidhya Platform"
          className="w-full h-auto rounded-md"
        />
            </div>
            <h2 className="text-xl font-semibold mb-2">Data Vidhya <span className="text-blue-600">Platform</span></h2>
            <p className="text-gray-600 text-sm">
              Experience our platform and improve your problem solving skills with our questions
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataVidhyaLanding;
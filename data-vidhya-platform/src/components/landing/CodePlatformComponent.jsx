'use client';
import React, { useState } from 'react';
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
const AIReviewContent = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const reviewTabs = [
    { id: "overview", name: "Overview" },
    { id: "quality", name: "Code Quality" },
    { id: "complexity", name: "Complexity" },
    { id: "resources", name: "Resources" }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      {/* Left side text */}
      <div className="w-full md:w-1/4">
        <h3 className="text-xl font-semibold mb-4">
          <span className="text-indigo-600">1/4 .</span> AI Review <span className="text-yellow-400">✨</span>
        </h3>
        <p className="text-gray-600">
          Engage in real-world coding challenges and get instant feedback to enhance your skills.
        </p>
        {/* Pagination dots */}
        <div className="flex space-x-2 mt-4">
          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      
      {/* Right side AI review display */}
      <div className="w-full md:w-3/4">
        <Card className="border border-gray-200 rounded-xl shadow-md overflow-hidden">
          {/* Browser-like dots */}
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          
          <CardContent className="p-0">
            {/* Review dashboard mockup */}
            <div className="bg-gray-900 text-white min-h-96">
              {/* Navigation tabs */}
              <div className="flex border-b border-gray-700">
                {reviewTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-6 py-3 text-sm ${
                      selectedTab === tab.id ? "text-orange-400 border-b-2 border-orange-400" : "text-gray-400"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Main content area */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-medium">Code Quality Assessment</h2>
                  <button className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded border border-gray-700">
                    View Tips
                  </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left side - Quality score circle */}
                  <div className="w-full md:w-1/3">
                    <div className="relative w-40 h-40 mx-auto">
                      {/* Circular progress indicator */}
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle 
                          cx="50" cy="50" r="45" 
                          fill="transparent" 
                          stroke="#1a1a1a" 
                          strokeWidth="8"
                        />
                        <circle 
                          cx="50" cy="50" r="45" 
                          fill="transparent" 
                          stroke="#00D8A0" 
                          strokeWidth="8"
                          strokeDasharray="283"  
                          strokeDashoffset="70"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-sm text-gray-400">Quality Score</span>
                        <span className="text-2xl font-bold">75</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Assessment summary */}
                  <div className="w-full md:w-2/3">
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <input type="checkbox" checked readOnly className="mr-2" />
                        <h3 className="font-medium">Assessment Summary</h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Your code solution has been analyzed and scored based on several factors. It technically correctly handles the requirements of the problem statement, including the filtering of the properties (total rows and the joining with the locations) completely. The major improvement suggested focuses on improving readability, maintainability, and adherence to best practices, which would elevate the overall quality of the code.
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-start mb-2">
                        <div className="text-green-400 mr-2">✓</div>
                        <h3 className="font-medium">Top Tip</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Score distribution */}
                <div className="mt-12">
                  <h3 className="text-sm font-medium mb-4">
                    <span className="inline-block mr-2">📊</span> Score Distribution
                  </h3>
                  <div className="h-32 flex items-end space-x-8">
                    {/* Green bars */}
                    <div className="flex flex-col items-center">
                      <div className="h-24 w-12 bg-green-500 rounded-sm"></div>
                      <div className="mt-2 text-xs">90</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-20 w-12 bg-green-500 rounded-sm"></div>
                      <div className="mt-2 text-xs">85</div>
                    </div>
                    
                    {/* Blue bars */}
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-12 bg-blue-500 rounded-sm"></div>
                      <div className="mt-2 text-xs">80</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 bg-blue-500 rounded-sm"></div>
                      <div className="mt-2 text-xs">75</div>
                    </div>
                    
                    {/* Orange bars */}
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-12 bg-orange-500 rounded-sm"></div>
                      <div className="mt-2 text-xs">70</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-8 w-12 bg-orange-500 rounded-sm"></div>
                      <div className="mt-2 text-xs">65</div>
                    </div>
                    
                    {/* Red bars */}
                    <div className="flex flex-col items-center">
                      <div className="h-6 w-12 bg-red-500 rounded-sm"></div>
                      <div className="mt-2 text-xs">60</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-12 bg-red-500 rounded-sm"></div>
                      <div className="mt-2 text-xs">50</div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-8 text-xs text-gray-400">
                  <div>Review generated on: 3/17/2025</div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded">
                    Close Review
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
const GamifiedLearningContent = () => {
    const [selectedTab, setSelectedTab] = useState("leaderboard");
  
    const gamificationTabs = [
      { id: "leaderboard", name: "Leaderboard" },
      { id: "challenges", name: "Challenges" },
      { id: "rewards", name: "Rewards" },
      { id: "badges", name: "Badges" }
    ];
  
    // Sample leaderboard data
    const leaderboardData = [
      { id: 1, username: "Darshil", avatar: "/api/placeholder/50/50", points: 3750 },
      { id: 2, username: "s4milan", avatar: "/api/placeholder/50/50", points: 3630 },
      { id: 3, username: "Akhil", avatar: "/api/placeholder/50/50", points: 3400 },
      { id: 4, username: "kirang", avatar: "/api/placeholder/50/50", points: 3300 },
      { id: 5, username: "Bhanu Singh", avatar: "/api/placeholder/50/50", points: 2700 },
      { id: 6, username: "Mayank Sharma", avatar: "/api/placeholder/50/50", points: 2600 },
      { id: 7, username: "ignd", avatar: "/api/placeholder/50/50", points: 2150 },
      { id: 8, username: "Shashank Jawehar", avatar: "/api/placeholder/50/50", points: 2000 }
    ];
  
    // Sample points system data
    const pointsSystem = [
      { id: 1, activity: "Post", points: 20, icon: "📝" },
      { id: 2, activity: "Comment", points: 5, icon: "💬" },
      { id: 3, activity: "Question Solved", points: 200, icon: "✅" }
    ];
  
    // Sample challenges data
    const challenges = [
      { id: 1, title: "SQL Master", description: "Solve 5 SQL problems in a row", points: 500, progress: 60 },
      { id: 2, title: "Python Pro", description: "Complete all Python beginner challenges", points: 750, progress: 30 },
      { id: 3, title: "Consistent Coder", description: "Login for 7 days in a row", points: 350, progress: 85 }
    ];
  
    return (
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Left side text */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">
            <span className="text-indigo-600">4/4 .</span> Gamified Learning <span className="text-yellow-400">🏆</span>
          </h3>
          <p className="text-gray-600">
            Level up skills through challenges, rewards & competition. Making learning addictive & effective.
          </p>
          {/* Pagination dots */}
          <div className="flex space-x-2 mt-4">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Right side gamification display */}
        <div className="w-full md:w-3/4 flex gap-6">
          {/* Leaderboard Card */}
          <Card className="border border-gray-200 rounded-xl shadow-md overflow-hidden w-3/5">
            {/* Browser-like dots */}
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            <CardContent className="p-0">
              <div className="bg-gray-900 text-white min-h-96">
                {/* Navigation tabs */}
                <div className="flex border-b border-gray-700">
                  {gamificationTabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`px-6 py-3 text-sm ${
                        selectedTab === tab.id ? "text-orange-400 border-b-2 border-orange-400" : "text-gray-400"
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
  
                {/* Main content area */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-medium">Leaderboard</h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">This Month</span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
  
                  {/* Leaderboard table */}
                  <div className="overflow-hidden rounded-lg">
                    <table className="min-w-full">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Rank</th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">User</th>
                          <th className="py-3 px-4 text-right text-xs font-medium text-gray-400">Points</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {leaderboardData.map((user, index) => (
                          <tr key={user.id} className={index < 3 ? "bg-gray-800 bg-opacity-40" : ""}>
                            <td className="py-3 px-4 text-sm text-gray-300">#{index + 1}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs mr-3">
                                  {user.username.substring(0, 2)}
                                </div>
                                <span className="text-sm font-medium">{user.username}</span>
                                {index < 3 && (
                                  <span className="ml-2 text-yellow-400">{index === 0 ? "👑" : "🥈🥉"[index - 1]}</span>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-right text-orange-400">{user.points} pts</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
  
                  {/* See full rankings button */}
                  <div className="mt-4 text-center">
                    <button className="text-xs bg-gray-800 text-gray-300 px-4 py-2 rounded border border-gray-700 hover:bg-gray-700">
                      See Full Rankings
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
  
          {/* Points System Card */}
          <Card className="border border-gray-200 rounded-xl shadow-md overflow-hidden w-2/5">
            {/* Browser-like dots */}
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            
            <CardContent className="p-0">
              <div className="bg-gray-900 text-white min-h-96">
                {/* Points system header */}
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-lg font-medium mb-2">Leaderboard Points System</h2>
                  <p className="text-xs text-gray-400">
                    Earn points based on your contributions and climb the leaderboard!
                  </p>
                </div>
  
                {/* Points system content */}
                <div className="p-6">
                  {/* Points items */}
                  {pointsSystem.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                      <div className="flex items-center">
                        <span className="text-lg mr-3">{item.icon}</span>
                        <span className="text-sm">{item.activity}</span>
                      </div>
                      <span className="text-orange-400 font-medium">{item.points} pts</span>
                    </div>
                  ))}
  
                  {/* Challenges section */}
                  <div className="mt-8">
                    <h3 className="text-md font-medium mb-4">Active Challenges</h3>
                    
                    {challenges.map((challenge) => (
                      <div key={challenge.id} className="mb-5 last:mb-0">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <h4 className="text-sm font-medium">{challenge.title}</h4>
                            <p className="text-xs text-gray-400">{challenge.description}</p>
                          </div>
                          <span className="text-xs text-orange-400">{challenge.points} pts</span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-orange-400 h-2 rounded-full" 
                            style={{ width: `${challenge.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-400">{challenge.progress}% complete</span>
                          <span className="text-xs text-gray-400">
                            {challenge.progress < 100 ? "In Progress" : "Completed"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
  
                  {/* View all challenges button */}
                  <div className="mt-6 text-center">
                    <button className="text-xs bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                      View All Challenges
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };
  
// Update the main component to include this tab content
const CodePlatformComponent = () => {
  const [activeTab, setActiveTab] = useState("solve"); // Default to solve questions tab

  // Path options for the Choose Your Path tab
  const pathOptions = [
    { id: 1, name: "Pyspark" },
    { id: 2, name: "Scala" },
    { id: 3, name: "DBT" },
    { id: 4, name: "Post gre SQL" },
    { id: 5, name: "Python" },
  ];

  // Technology logos for the Choose Your Path tab
  const technologies = [
    {
      id: 1,
      name: "PYTHON",
      logo: "/images/Screenshot 2025-04-07 183933.png",
      color: "#4B8BBE"
    },
    {
      id: 2,
      name: "SCALA",
      logo: "/scala-logo.png",
      color: "#DC322F"
    },
    {
      id: 3,
      name: "POSTGRE SQL",
      logo: "/postgresql-logo.png",
      color: "#336791"
    },
    {
      id: 4,
      name: "APACHE SPARK",
      logo: "/spark-logo.png",
      color: "#E25A1C"
    },
    {
      id: 5,
      name: "DBT",
      logo: "/dbt-logo.png",
      color: "#FF694B"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="text-sm uppercase text-gray-500 mb-2">PLATFORM</div>
        <h1 className="text-4xl font-bold mb-4 relative inline-block">
          Solve Leet Code like
          <br />
          problems
          <div className="absolute -bottom-2 right-1/4 left-1/4 h-2 bg-purple-500"></div>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Our platform empowers you to advance your career with practical skills and real-world applications. Join a
          vibrant community that supports your learning journey.
        </p>
      </div>
  
      {/* Tab Navigation - Fixed positioning */}
      <div className="relative w-full max-w-3xl mx-auto mb-16">
        <Tabs defaultValue="solve" className="w-full flex flex-col" onValueChange={setActiveTab}>
          <div className="relative mb-8">
            <TabsList className="w-full flex p-0 h-auto bg-transparent rounded-full border border-gray-200 overflow-hidden">
              <TabsTrigger 
                value="choose" 
                className={`flex-1 py-3 px-4 text-sm rounded-none ${activeTab === 'choose' ? 'text-gray-800 bg-white' : 'text-gray-600 bg-gray-100'}`}
              >
                Choose Your Path
              </TabsTrigger>
              <TabsTrigger 
                value="solve" 
                className={`flex-1 py-3 px-4 text-sm rounded-none ${activeTab === 'solve' ? 'text-gray-800 bg-white' : 'text-gray-600 bg-gray-100'}`}
              >
                Solve Questions
              </TabsTrigger>
              <TabsTrigger 
                value="review" 
                className={`flex-1 py-3 px-4 text-sm rounded-none ${activeTab === 'review' ? 'text-gray-800 bg-white' : 'text-gray-600 bg-gray-100'}`}
              >
                AI Review ✨
              </TabsTrigger>
              <TabsTrigger 
                value="gamified" 
                className={`flex-1 py-3 px-4 text-sm rounded-none ${activeTab === 'gamified' ? 'text-gray-800 bg-white' : 'text-gray-600 bg-gray-100'}`}
              >
                Gamified Learning
              </TabsTrigger>
            </TabsList>
            {/* Arrow indicator for the active tab */}
            <div className="absolute -bottom-4 left-0 right-0 flex justify-center pointer-events-none">
              <div 
                className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-indigo-600" 
                style={{ 
                  transform: `translateX(${
                    activeTab === 'choose' ? '-150%' : 
                    activeTab === 'solve' ? '-50%' : 
                    activeTab === 'review' ? '50%' : '150%'
                  })` 
                }}
              ></div>
            </div>
          </div>

          {/* Tab content */}
          <TabsContent value="choose">
            {/* Existing Choose Your Path content */}
            <Card className="mx-auto max-w-4xl border border-gray-200 rounded-xl shadow-md overflow-hidden mt-8">
              {/* Browser-like dots */}
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Path options */}
                  <div className="w-full md:w-1/3 pr-0 md:pr-8 mb-8 md:mb-0">
                    <h3 className="font-medium text-lg mb-2">Choose Your Path</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Choose your path and have a personalized roadmap. We offer:
                    </p>
                    <ul className="list-decimal pl-5 space-y-1">
                      {pathOptions.map(option => (
                        <li key={option.id} className="text-sm">{option.name}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Right side - Technology logos */}
                  <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className='w-[450px] h-[100px]'>
                  <img src="/images/Screenshot 2025-04-07 184240.png" alt="" />

                  </div>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Solve Questions Tab Content */}
<TabsContent value="solve">
  {/* Existing Solve Questions content */}
  <div className="flex flex-col md:flex-row gap-8 mt-8">
    {/* Left side text */}
    <div className="w-full md:w-1/4">
      <h3 className="text-xl font-semibold mb-4">Solve Questions</h3>
      <p className="text-gray-600">
        Engage in real-world coding challenges and get instant feedback to enhance your skills.
      </p>
    </div>
    
    {/* Right side code editor display */}
    <div className="w-full md:w-3/4">
      <Card className="border border-gray-200 rounded-xl shadow-md overflow-hidden">
        {/* Browser-like dots */}
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        <CardContent className="p-0">
          {/* Code editor mockup */}
          
                
                {/* Replace SQL query with image */}
                <div className=" flex items-center justify-center">
                  <img
                    src="/images/Screenshot 2025-04-07 185018.png"
                    alt="Code Example"
                    className="max-w-full h-auto rounded-md"
                  />
                </div>
              
        
          
        </CardContent>
      </Card>
    </div>
  </div>
</TabsContent>


          <TabsContent value="review">
            {/* New AI Review content */}
            <AIReviewContent />
          </TabsContent>

          <TabsContent value="gamified">
            
              <GamifiedLearningContent/>
            
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CodePlatformComponent;
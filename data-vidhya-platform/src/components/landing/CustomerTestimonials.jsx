import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Star, Linkedin } from "lucide-react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    hasLongerQuote: false
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    name: "Name Surname",
    position: "Position, Company name",
    hasLongerQuote: true
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    hasLongerQuote: false
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    hasLongerQuote: false
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    name: "Name Surname",
    position: "Position, Company name",
    hasLongerQuote: true
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    hasLongerQuote: false
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="h-full border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex text-amber-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" size={20} />
          ))}
        </div>
        
        <p className="text-gray-800 flex-grow mb-6 text-base">
          "{testimonial.text}"
        </p>
        
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarFallback className="bg-gray-200 text-gray-400">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
            <AvatarImage src="" />
          </Avatar>
          
          <div className="flex-grow">
            <h4 className="font-medium text-sm">{testimonial.name}</h4>
            <p className="text-gray-500 text-xs">{testimonial.position}</p>
          </div>
          
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-800"
            aria-label="LinkedIn Profile"
          >
            <div className="bg-blue-600 rounded-full p-2">
              <Linkedin size={20} className="text-white" />
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const CustomerTestimonials = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Customer Testimonials</h2>
        <p className="text-lg text-gray-600">
          This platform transformed my data engineering skills!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
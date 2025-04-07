'use client';
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion';
import { Button } from '../ui/button';
import {  MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is data engineering?",
      answer: "Data engineering is the practice of designing and building systems for collecting, storing, and analyzing data at scale. It involves creating data pipelines, implementing data warehouses, and ensuring data quality and accessibility for data scientists and analysts."
    },
    {
      question: "Who should take courses?",
      answer: "Our data engineering courses are ideal for software engineers looking to specialize in data, data analysts wanting to expand their technical skills, and professionals in related fields who need to understand data infrastructure. Both beginners and experienced practitioners can find appropriate courses."
    },
    {
      question: "What is the platform?",
      answer: "Our platform is a comprehensive online learning environment specifically designed for data engineering education. It features interactive lessons, hands-on projects with real-world datasets, mentorship opportunities, and a community of learners and professionals."
    },
    {
      question: "How do I enroll?",
      answer: "Enrolling is simple. Browse our course catalog, select your desired course, and click the 'Enroll' button. You'll be guided through account creation and payment options. Once enrolled, you'll gain immediate access to course materials and can begin learning at your own pace."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 14-day satisfaction guarantee. If you're not satisfied with your course for any reason, you can request a full refund within 14 days of enrollment, no questions asked. Some specialized programs may have different policies, which will be clearly indicated before purchase."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">FAQs</h1>
        <p className="text-lg text-gray-600">
          Find answers to your most pressing questions about our data engineering courses and platform.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full mb-16 space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border rounded-lg overflow-hidden">
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 bg-white">
              <span className="text-left font-medium">{faq.question}</span>
              
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-white">
              <p className="text-gray-700">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center bg-gray-50 p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
        <p className="text-gray-600 mb-6">We're here to help you!</p>
        <Button className="flex items-center gap-2 mx-auto">
          <MessageCircle className="h-4 w-4" />
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default FAQSection;
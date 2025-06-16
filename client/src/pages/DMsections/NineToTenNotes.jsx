import React from 'react';
import Module1 from './9-10Section1';
import Module2 from './9-10Section2';
import Module3 from './9-10Section3';
import Module4 from './9-10Section4';
import Module5 from './9-10Section5';



const NineToTenNotes = ({ topicRefs }) => {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl shadow-md mb-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">
          Advanced Digital Marketing Strategy
        </h2>
        <p className="text-lg leading-relaxed">
          Welcome to advanced digital marketing! Here we'll explore strategic thinking, 
          data-driven decision making, and sophisticated campaign planning that real 
          marketing professionals use every day.
        </p>
        <p className="mt-4 text-lg">
          You'll learn to think critically about customer journeys, analyze market trends,
          and create comprehensive marketing strategies that deliver measurable results.
        </p>
        <p className="mt-4 text-lg font-medium text-blue-700">
          🎯 Ready to think like a marketing strategist?
        </p>
      </section>

      <section className="bg-indigo-50 p-6 rounded-2xl shadow-md mb-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
          🚀 What Makes This Level Different?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Strategic Thinking</h3>
            <p className="text-gray-700">Learn to develop comprehensive marketing strategies that align with business objectives.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Data Analysis</h3>
            <p className="text-gray-700">Understand how to interpret analytics and make data-driven marketing decisions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Customer Psychology</h3>
            <p className="text-gray-700">Dive deep into understanding customer behavior and motivation patterns.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Platform Mastery</h3>
            <p className="text-gray-700">Advanced techniques for maximizing performance across all digital channels.</p>
          </div>
        </div>
      </section>

      <div className="space-y-10">
        <div className="overflow-x-auto"><Module1 topicRefs={topicRefs} /></div>
        <div className="overflow-x-auto"><Module2 topicRefs={topicRefs} /></div>
        <div className="overflow-x-auto"><Module3 topicRefs={topicRefs} /></div>
        <div className="overflow-x-auto"><Module4 topicRefs={topicRefs} /></div>
        <div className="overflow-x-auto"><Module5 topicRefs={topicRefs} /></div>
        
      </div>
    </>
  );
};

export default NineToTenNotes;
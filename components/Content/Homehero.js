import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Layout, Brain, Sparkles } from 'lucide-react';

const HomeHero = () => {
  const features = [
    { icon: Layout, title: 'MCQs', description: 'Practice with comprehensive question banks' },
    { icon: BookOpen, title: 'High Yield Notes', description: 'Concise, focused study materials' },
    { icon: Brain, title: 'Flashcards', description: 'Interactive spaced repetition learning' },
    { icon: Users, title: 'Community', description: 'Learn and grow with peers' }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="text-5xl font-bold text-white">S</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Master Your Studies with</span>
            <span className="block text-blue-600">Scoorly</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Your all-in-one learning platform for efficient and effective study preparation
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
                          <div
              key={index}
              className="relative p-8 rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{
                background: index === 0 ? 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)' :
                          index === 1 ? 'linear-gradient(135deg, #34D399 0%, #10B981 100%)' :
                          index === 2 ? 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)' :
                          'linear-gradient(135deg, #F472B6 0%, #EC4899 100%)'
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-white/90 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
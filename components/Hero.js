import React from 'react';
import { StickyNote } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-white border-b py-16 mb-12"> {/* Increased padding */}
      <div className="max-w-6xl mx-auto text-center px-6"> {/* Matched container width */}
        <div className="flex justify-center mb-6">
          <StickyNote className="h-16 w-16 text-yellow-500" /> {/* Increased icon size */}
        </div>
        <h1 className="text-5xl font-bold mb-6">Sticky Notes</h1> {/* Increased text size */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto"> {/* Increased text size */}
          Capture and organize your thoughts with our beautiful sticky notes app.
        </p>
      </div>
    </div>
  );
};

export default Hero;
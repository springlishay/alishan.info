import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <div className="relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-3 text-xl text-slate-600 sm:text-2xl">
              {subtitle}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Alishan Tanveer"
              className="rounded-lg shadow-xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
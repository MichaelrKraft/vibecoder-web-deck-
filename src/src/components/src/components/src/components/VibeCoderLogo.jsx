import React from 'react';

const VibeCoderLogo = ({ size = 'large', className = '' }) => {
  const sizeClasses = {
    small: 'w-32 h-16',
    medium: 'w-48 h-24', 
    large: 'w-64 h-32',
    xl: 'w-80 h-40'
  };

  const textSizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-5xl md:text-6xl',
    xl: 'text-6xl md:text-8xl'
  };

  const iconSizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className={`${className} flex flex-col items-center justify-center ${sizeClasses[size]}`}>
      {/* VibeCoder Text Only */}
      <div className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent`}>
        VibeCoder
      </div>
    </div>
  );
};

export default VibeCoderLogo;


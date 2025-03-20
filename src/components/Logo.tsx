import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <svg 
        viewBox="0 0 100 100"
        className="w-full h-full rounded-full"
        role="img"
        aria-label="Logo Nova Horizonte"
      >
        <rect width="100" height="100" fill="#009c3b"/>
        <path d="M50 15 L85 50 L50 85 L15 50 Z" fill="#fedf00"/>
        <circle cx="50" cy="50" r="20" fill="#002776"/>
        <path d="M50 35 A15 15 0 0 1 65 50" stroke="white" fill="none" strokeWidth="2"/>
      </svg>
    </div>
  );
};

export default Logo;
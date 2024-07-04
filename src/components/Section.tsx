import * as React from 'react';

interface SectionProps {
  className?: string;
  id?: string;
  customPaddings?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  className = '',
  id,
  customPaddings = 'px-10 lg:px-16 xl:px-20 py-10 lg:py-16 xl:py-20',
  children
}) => {
  return (
    <div 
      id={id}
      className={`relative top-[4rem] ${customPaddings} ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;

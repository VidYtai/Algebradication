import React from 'react';

interface LoadingSpinnerProps {
  heading: string;
  subheading: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 sm:p-6 my-4" aria-live="polite" aria-busy="true">
      <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-dashed rounded-full animate-spin border-sky-500"> {/* Updated to sky-500 */}
        <div className="w-full h-full rounded-full border-4 border-dashed animate-spin-reverse border-sky-300 opacity-75"></div> {/* Updated to sky-300 */}
      </div>
      <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold text-sky-300 tracking-wider text-center">{heading}</p> {/* Updated text color */}
      <p className="text-xs sm:text-sm text-slate-400 text-center">{subheading}</p>
    </div>
  );
};

export default LoadingSpinner;
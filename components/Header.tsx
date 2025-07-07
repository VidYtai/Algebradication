
import React from 'react';
import { TutorialStep } from '../types';
import InteractiveTutorialHint from './InteractiveTutorialHint';

interface HeaderProps {
  currentLevel: number;
  onToggleLearningsModal: () => void;
  showLearningsTutorial: boolean;
  onDismissLearningsTutorial: () => void;
  learningsCount: number;
  currentUser: string | null; 
  onLogout: () => void; 
  onHeaderAuthAction: () => void; 
}

const Header: React.FC<HeaderProps> = ({ 
  currentLevel, 
  onToggleLearningsModal,
  showLearningsTutorial,
  onDismissLearningsTutorial,
  learningsCount,
  currentUser,
  onLogout,
  onHeaderAuthAction
}) => {
  return (
    <header className="py-2 px-2 sm:py-4 sm:px-6 bg-slate-900/70 backdrop-blur-md shadow-lg border-b border-slate-700/50 sticky top-0 z-40 glassmorphic-surface">
      {/* Main flex container: now always a row for compactness on mobile */}
      <div className="flex flex-row items-center justify-between w-full">
        
        {/* App Name */}
        <h1 className="text-lg sm:text-3xl md:text-4xl font-extrabold tracking-tight text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">Algebradiction</span>
        </h1>

        {/* User Actions and Info Container: now always a row */}
        <div className="flex flex-row items-center space-x-1.5 sm:space-x-3 md:space-x-4">
          {currentUser && (
            <>
              <button
                id="my-learnings-button"
                onClick={onToggleLearningsModal}
                className={`w-auto px-1.5 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-1 sm:space-x-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 glassmorphic-surface hover:bg-slate-700/60 ${learningsCount > 0 ? 'border-sky-500/70 text-sky-300 hover:shadow-sky-500/30' : 'border-slate-600/80 text-slate-300 hover:shadow-slate-500/20'} shadow-md hover:shadow-lg`}
                aria-label="Open my learnings"
              >
                <span role="img" aria-hidden="true" className="text-base sm:text-lg">📖</span>
                <span className="hidden sm:inline ml-1">Learnings</span> 
              </button>
              
              <div className="text-right">
                <p className="text-xs text-slate-400 truncate max-w-[70px] sm:max-w-[180px] md:max-w-none">
                  <span className="hidden sm:inline">Welcome, </span>
                  {currentUser}!
                </p>
                <p className="text-sm sm:text-lg font-bold text-amber-400">Level: {currentLevel}</p>
              </div>

              <button
                onClick={onLogout}
                className="w-auto px-1.5 py-1 sm:px-3 sm:py-2 bg-red-600/70 backdrop-blur-sm hover:bg-red-500/70 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-md hover:shadow-lg border border-red-500/50"
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          )}
          {!currentUser && (
            <button
              onClick={onHeaderAuthAction}
              className="w-auto px-2 py-1 sm:px-3 sm:py-2 bg-violet-600/70 backdrop-blur-sm hover:bg-violet-500/70 text-white rounded-lg text-xs sm:text-base font-semibold transition-colors duration-200 shadow-md hover:shadow-lg border border-violet-500/50 whitespace-nowrap"
            >
              Login / Sign Up
            </button>
          )}
        </div>
      </div>
      {currentUser && showLearningsTutorial && (
        <InteractiveTutorialHint
          tutorialId={TutorialStep.HEADER_MY_LEARNINGS}
          isActive={true}
          targetSelector="#my-learnings-button"
          title="Your Knowledge Book!"
          text="This is your 'My Learnings' book. After winning a case, new things you've learned about math will show up here. Click it to see what you know!"
          position="bottom-right"
          onDismiss={onDismissLearningsTutorial}
          overlayClassName="bg-slate-950/80 backdrop-blur-xl"
          highlightTarget={true}
        />
      )}
    </header>
  );
};

export default Header;

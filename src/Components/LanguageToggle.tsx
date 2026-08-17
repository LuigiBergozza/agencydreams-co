import React from 'react';

interface LanguageToggleProps {
  currentLang: 'PT' | 'EN';
  onToggle: (lang: 'PT' | 'EN') => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full border border-neutral-200/80 bg-white/80 p-1 shadow-lg backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
      <button
        onClick={() => onToggle('PT')}
        className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
          currentLang === 'PT'
            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
            : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => onToggle('EN')}
        className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
          currentLang === 'EN'
            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
            : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};
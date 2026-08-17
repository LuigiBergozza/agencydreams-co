import React from 'react';

interface LanguageToggleProps {
  language: 'pt' | 'en';
  onToggle: (lang: 'pt' | 'en') => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(language === 'pt' ? 'en' : 'pt')}
      className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
    >
      <span>{language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}</span>
    </button>
  );
};
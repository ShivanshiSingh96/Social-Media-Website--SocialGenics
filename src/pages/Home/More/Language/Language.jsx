// Language.jsx
import React, { useState } from 'react';

const Language = () => {
  // State to manage selected language
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Extended list of language options
  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Hindi',
    'Japanese',
    'Russian',
    'Arabic',
    'Portuguese',
    'Italian',
    'Korean',
    'Dutch',
    'Turkish',
    'Swedish',
    'Greek',
    'Polish',
    'Danish',
    'Norwegian',
    'Finnish',
    'Thai',
    'Hebrew',
    'Indonesian',
    'Vietnamese',
    'Malay',
    'Filipino',
    'Czech',
    'Hungarian',
    'Romanian',
    'Ukrainian',
  ];

  // Handler for changing language
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white p-4">
      {/* Language Selection Container */}
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        {/* Header */}
        <header className="mb-4 text-center">
          <h1 className="text-2xl font-semibold">Language</h1>
        </header>

        {/* Language List */}
        <ul className="space-y-2 overflow-y-auto max-h-[60vh]">
          {languages.map((language) => (
            <li
              key={language}
              className={`flex items-center justify-between p-3 rounded-md cursor-pointer hover:bg-gray-700 transition-all ${
                selectedLanguage === language ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              <span className="text-base">{language}</span>
              {/* Checkmark for selected language */}
              {selectedLanguage === language && (
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </li>
          ))}
        </ul>

        {/* Selected Language Info */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Selected Language: <span className="font-medium">{selectedLanguage}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Language;

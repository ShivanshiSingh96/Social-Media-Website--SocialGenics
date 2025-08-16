// PrivacyCenter.jsx
import React from 'react';

const PrivacyCenter = () => {
  const privacySections = [
    {
      id: 1,
      title: 'Account Privacy',
      description:
        'Manage who can see your personal information and posts. Control your privacy settings here.',
    },
    {
      id: 2,
      title: 'Data Security',
      description:
        'Learn about how your data is protected and what measures are in place to ensure your security.',
    },
    {
      id: 3,
      title: 'Data Access',
      description:
        'Request access to the data we hold about you and understand how it is used.',
    },
    {
      id: 4,
      title: 'Third-Party Access',
      description:
        'Find out which third parties may have access to your data and why.',
    },
    {
      id: 5,
      title: 'Privacy Settings',
      description:
        'Adjust your privacy settings to control your experience on our platform.',
    },
  ];

  return (
    <div className="w-full h-full bg-black text-white p-4">
      {/* Privacy Center Container */}
      <div className="max-w-lg w-full mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">Privacy Center</h1>
        </header>

        {/* Privacy Sections */}
        <ul className="space-y-4 overflow-auto max-h-[calc(100vh-80px)]">
          {privacySections.map((section) => (
            <li
              key={section.id}
              className="p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition-all cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="text-sm text-gray-400">{section.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrivacyCenter;

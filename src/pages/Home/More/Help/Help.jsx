// Help.jsx
import React from 'react';

const Help = () => {
  // Help topics data
  const helpTopics = [
    {
      id: 1,
      title: 'Report a Problem',
      description: 'Tell us about the problem you’re experiencing.',
    },
    {
      id: 2,
      title: 'Privacy and Security Help',
      description: 'Learn how to keep your account safe and secure.',
    },
    {
      id: 3,
      title: 'Support Requests',
      description: 'View or respond to requests you’ve sent to us.',
    },
    {
      id: 4,
      title: 'Community Guidelines',
      description: 'Review our rules and expectations for all users.',
    },
    {
      id: 5,
      title: 'Data Policy',
      description: 'Understand how we collect and use your data.',
    },
    {
      id: 6,
      title: 'Terms of Service',
      description: 'Read the legal terms that apply to your use of our services.',
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black text-white p-4">
      {/* Help Section Container */}
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">Help</h1>
        </header>

        {/* Help Topics List */}
        <ul className="space-y-4">
          {helpTopics.map((topic) => (
            <li
              key={topic.id}
              className="p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition-all cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{topic.title}</h2>
              <p className="text-sm text-gray-400">{topic.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Help;

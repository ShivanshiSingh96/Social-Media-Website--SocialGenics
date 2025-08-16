// About.jsx
import React from 'react';

const About = () => {
  // Information about the platform
  const aboutSections = [
    {
      id: 1,
      title: 'About Us',
      description:
        'Learn more about our mission, vision, and the team that makes it all happen.',
    },
    {
      id: 2,
      title: 'Our Story',
      description:
        'Discover the journey of how our platform came to be and the impact we strive to make.',
    },
    {
      id: 3,
      title: 'Community Guidelines',
      description:
        'Read our guidelines to ensure a safe and respectful environment for all.',
    },
    {
      id: 4,
      title: 'Terms of Service',
      description:
        'Understand the terms and conditions you agree to when using our platform.',
    },
    {
      id: 5,
      title: 'Privacy Policy',
      description:
        'Find out how we collect, use, and protect your personal information.',
    },
    {
      id: 6,
      title: 'Contact Us',
      description:
        'Get in touch with our team for support or general inquiries.',
    },
  ];

  return (
    <div className="w-full h-full overflow-auto bg-black text-white p-4">
      {/* About Container */}
      <div className="max-w-lg w-full mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">About</h1>
        </header>

        {/* About Sections */}
        <ul className="space-y-4">
          {aboutSections.map((section) => (
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

export default About;

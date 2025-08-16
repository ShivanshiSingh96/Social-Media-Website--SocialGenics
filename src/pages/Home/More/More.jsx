import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../../Firebase/auth';
import { useAuth } from '../../AppContext/AppContext';

const More = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  // Menu items data
  const menuItems = [
    { name: 'Account Settings', link: '/home/account-settings' },
    { name: 'Saved Posts', link: '/home/saved-post' },
    { name: 'Archive', link: '/home/archive' },
    { name: 'Time Spent', link: '/home/time-spent' },
    { name: 'Account Privacy', link: '/home/account-privacy' },
    { name: 'Website Permissions', link: '/home/website-permission' },
    { name: 'Language', link: '/home/language' },
    { name: 'Help', link: '/home/help' },
    { name: 'Privacy Center', link: '/home/privacy-center' },
    { name: 'About', link: '/home/about' },
  ];

  // Handle logout functionality
  const handleLogout = () => {
    doSignOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <div className="w-full h-auto bg-black text-white lg:px-4 md:px-3 sm:px-3 px-2 py-6">
      {/* Header */}
      <header className="mb-4 pl-2 text-left">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </header>

      {/* Menu List */}
      <ul className="divide-y divide-gray-800 space-y-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex justify-between items-center py-3 pl-2 pr-3 hover:bg-gray-900 transition-all cursor-pointer rounded-md ${item.link ? 'text-white' : 'text-gray-400'}`}
          >
            {item.link ? (
              <Link to={item.link} className="flex-grow">{item.name}</Link>
            ) : (
              <span>{item.name}</span>
            )}
            {/* Chevron icon resembling Instagram's subtle arrow */}
            <svg
              className="w-4 h-4 ml-auto text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </li>
        ))}
      </ul>

      {/* Login Activity Section */}
      <div className="mt-8 mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-400">Login Activity</span>
      </div>

      {/* Bottom Buttons */}
      <div className="space-y-3">
        <Link to="/home/add-account">
          <button className="w-full py-2.5 bg-gray-800 rounded-md text-white font-medium hover:bg-gray-700 transition duration-300 ease-in-out text-center">
            Add Account
          </button>
        </Link>
        {userLoggedIn && (
          <button 
            onClick={handleLogout} 
            className="w-full py-2.5 bg-red-500 rounded-md text-white font-medium hover:bg-red-400 transition duration-300 ease-in-out text-center">
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default More;

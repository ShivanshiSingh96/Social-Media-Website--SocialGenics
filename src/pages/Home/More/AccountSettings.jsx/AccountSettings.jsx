// AccountSettings.jsx
import React from 'react';

const AccountSettings = () => {
  return (
    <div className="w-full h-auto lg:px-4 md:px-3 sm:px-3 px-2 py-6 bg-black text-white">
      {/* Header */}
      <header className="mb-6 pl-2">
        <h1 className="text-2xl font-semibold text-center">Account Settings</h1>
      </header>

      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Personal Information Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="w-full mt-1 p-2 bg-gray-900 text-white rounded-md border border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 bg-gray-900 text-white rounded-md border border-gray-700"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 rounded-md text-white font-medium hover:bg-indigo-400 transition duration-300 ease-in-out"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Change Password Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                placeholder="Enter your current password"
                className="w-full mt-1 p-2 bg-gray-900 text-white rounded-md border border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter your new password"
                className="w-full mt-1 p-2 bg-gray-900 text-white rounded-md border border-gray-700"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 rounded-md text-white font-medium hover:bg-indigo-400 transition duration-300 ease-in-out"
            >
              Change Password
            </button>
          </form>
        </section>

        {/* Privacy Settings Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Privacy Settings</h2>
          <div className="flex items-center justify-between py-3 px-2 bg-gray-700 rounded-md mb-2">
            <span>Make Account Private</span>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between py-3 px-2 bg-gray-700 rounded-md">
            <span>Enable Two-Factor Authentication</span>
            <input type="checkbox" className="toggle" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountSettings;

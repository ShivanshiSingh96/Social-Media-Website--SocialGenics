// AddAccount.jsx
import React from 'react';

const AddAccount = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-md">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">Add Account</h1>
        </header>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="w-full mt-1 p-2 bg-gray-900 text-white rounded-md border border-gray-700"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full mt-1 p-2 bg-gray-900 text-white rounded-md border border-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 rounded-md text-white font-medium hover:bg-indigo-500 transition duration-300 ease-in-out"
          >
            Add Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;

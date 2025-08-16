import React from 'react';

function Create() {
  return (
    <div className="w-full h-full relative flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zM12 3c4.971 0 9 4.029 9 9s-4.029 9-9 9-9-4.029-9-9 4.029-9 9-9zm-3 8l1.5 1.5 2.5-3 2.5 3H15l3 3.5h-12L9 11zm1.5 0v2m-1.5 0h-1.5"
            />
          </svg>
          <p className="text-lg text-gray-600 mb-4">Upload a photo or video</p>
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-200">
            Select from Computer
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          Your post will appear in the profile grid.
        </div>
      </div>
    </div>
  );
}

export default Create;
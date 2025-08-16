import React from 'react';

function ChatWindow({ message, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-80 h-96 shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">{message.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            ✕
          </button>
        </div>
        <div className="overflow-y-auto h-5/6 p-4">
          <div className="flex items-start mb-2">
            <img
              src={message.img}
              alt={message.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="bg-gray-200 p-2 rounded-lg max-w-xs">
              <p className="text-gray-800">{message.message}</p>
            </div>
          </div>
          {/* Additional messages can be added here */}
        </div>
        <div className="p-4 border-t">
          <input
            type="text"
            placeholder="Message..."
            className="border rounded-lg w-full p-2 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
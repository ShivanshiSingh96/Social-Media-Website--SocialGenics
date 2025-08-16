import React from 'react';
import { Link } from 'react-router-dom';

const Archive = () => {
  // Sample data for archived posts
  const archivedPosts = [
    {
      id: '1',
      imageUrl: 'https://images.pexels.com/photos/15062110/pexels-photo-15062110/free-photo-of-composition-of-colorful-posts.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      imageUrl: 'https://images.pexels.com/photos/24023136/pexels-photo-24023136/free-photo-of-flowers-and-cups-of-beverage-on-pier.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '3',
      imageUrl: 'https://images.pexels.com/photos/20329804/pexels-photo-20329804/free-photo-of-seagull-on-posts-on-sea-shore-under-fog.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: '4',
      imageUrl: 'https://images.pexels.com/photos/7054513/pexels-photo-7054513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    // Add more posts as needed
  ];

  return (
    <div className="w-full h-screen bg-black text-white p-4 lg:px-6 md:px-4 sm:px-3">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Archived Posts</h1>
      </header>

      {/* Archive Grid */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {archivedPosts.map((post) => (
          <Link  key={post.id}>
            <div className="relative group">
              <img
                src={post.imageUrl}
                alt={`Archived Post ${post.id}`}
                className="w-full h-auto object-cover rounded-md"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                View Post
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Archive;

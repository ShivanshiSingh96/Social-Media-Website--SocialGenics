// SavedPosts.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Sample data for saved posts
const savedPosts = [
  'https://images.pexels.com/photos/10295605/pexels-photo-10295605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  'https://images.pexels.com/photos/22764336/pexels-photo-22764336/free-photo-of-person-with-child-on-sidewalk-in-downtown-chicago.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/221011/pexels-photo-221011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/10341447/pexels-photo-10341447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  'https://images.pexels.com/photos/6670060/pexels-photo-6670060.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/15059056/pexels-photo-15059056/free-photo-of-a-bowl-of-rice-with-vegetables-and-sauce.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/19671781/pexels-photo-19671781/free-photo-of-a-person-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/15587985/pexels-photo-15587985/free-photo-of-a-cat-sitting-on-top-of-some-rocks.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/14774457/pexels-photo-14774457.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/936194/pexels-photo-936194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/14930716/pexels-photo-14930716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

const SavedPosts = () => {
  return (
    <div className="w-full h-auto bg-black text-white p-4 lg:px-6 md:px-4 sm:px-3">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Saved Posts</h1>
      </header>

      {/* Saved Posts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {savedPosts.map((post, index) => (
          <div key={index} className="relative group">
            <img
              src={post}
              alt={`Saved post ${index + 1}`}
              className="w-full h-40 object-cover rounded-md"
            />
            {/* Overlay effect on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-md">
              <Link
                to={`/home/post/${index + 1}`} // Change link according to your routing setup
                className="text-white font-medium text-lg"
              >
                View Post
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPosts;

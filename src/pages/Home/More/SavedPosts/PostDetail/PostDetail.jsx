// PostDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Sample data for multiple posts
// Replace this with real data fetching logic
const posts = [
  {
  id: '1',
  imageUrl: 'https://images.pexels.com/photos/10295605/pexels-photo-10295605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  title: 'itz_Ritu',
  description: 'Loving the sunset',
  },
  {
    id: '2',
    imageUrl: 'https://images.pexels.com/photos/22764336/pexels-photo-22764336/free-photo-of-person-with-child-on-sidewalk-in-downtown-chicago.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'vansh_Tomar',
    description: 'Black days',
  },
  {
    id: '3',
    imageUrl: 'https://images.pexels.com/photos/221011/pexels-photo-221011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'AdishreeRathi',
    description: 'Future engineer',
    },
    {
      id: '4',
      imageUrl: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Abhi_Sharma',
      description: 'Night + Study',
    },
    {
      id: '5',
      imageUrl: 'https://images.pexels.com/photos/10341447/pexels-photo-10341447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Kitchen_aunty',
      description: 'HEllloo....foodie',
    },
    {
      id: '6',
      imageUrl: 'https://images.pexels.com/photos/6670060/pexels-photo-6670060.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Heart',
      description: 'Breakup hurts the most',
    },
    {
      id: '7',
      imageUrl: 'https://images.pexels.com/photos/15059056/pexels-photo-15059056/free-photo-of-a-bowl-of-rice-with-vegetables-and-sauce.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Foodie_duniya',
      description: 'Biryaani your fav guysss',
    },
    {
      id: '8',
      imageUrl: 'https://images.pexels.com/photos/19671781/pexels-photo-19671781/free-photo-of-a-person-walking-down-a-path-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Ritik2',
      description: 'Adventure in the woods',
    },
    {
      id: '9',
      imageUrl: 'https://images.pexels.com/photos/15587985/pexels-photo-15587985/free-photo-of-a-cat-sitting-on-top-of-some-rocks.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Pranav',
      description: 'Photograpgy is my passion and cats are my love..',
    },
    {
      id: '10',
      imageUrl: 'https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Helo_India',
      description: 'Khadi a new recipe',
    },
    {
      id: '11',
      imageUrl: 'https://images.pexels.com/photos/10295605/pexels-photo-10295605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Elvish_Yadav',
      description: 'Again back to study ...',
    },
    {
      id: '12',
      imageUrl: 'https://images.pexels.com/photos/10295605/pexels-photo-10295605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Pranav',
      description: 'MY Passion..#photography',
    },
];

const PostDetail = () => {
  const { postId } = useParams(); // Get the postId from the URL params

  // Find the post based on postId
  const post = posts.find((p) => p.id === postId);

  return (
    <div className="w-full h-screen bg-black text-white p-4 overflow-auto">
      {/* Post Details */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        {post ? (
          <>
            <img
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.description}</p>
          </>
        ) : (
          <p className="text-center text-gray-400">Post not found</p>
        )}
      </div>
    </div>
  );
};

export default PostDetail;

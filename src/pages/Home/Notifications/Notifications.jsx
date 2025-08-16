import React from 'react';

function Notifications() {
  const notifications = [
    { name: 'aamir__753', action: 'liked your post', img: 'https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'aarav.pero', action: 'started following you', img: 'https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'swasti.jatt', action: 'mentioned you in a comment', img: 'https://images.pexels.com/photos/18320670/pexels-photo-18320670/free-photo-of-a-beautiful-girls-looking-in-camera-and-greenly-background.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'deepak_mishra', action: 'liked your story', img: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'ruchi_saini', action: 'tagged you in a comment', img: 'https://images.pexels.com/photos/458805/pexels-photo-458805.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'parth_sharma', action: 'started following you', img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'aarti_gupta', action: 'liked your comment', img: 'https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'harsh_verma', action: 'commented on your post', img: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'simran_rathore', action: 'started following you', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'rahul_singh', action: 'liked your story', img: 'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'pooja_batra', action: 'tagged you in a post', img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'neeraj_garg', action: 'liked your post', img: 'https://images.pexels.com/photos/1800454/pexels-photo-1800454.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'kritika.m', action: 'liked your comment', img: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'aditi_rao', action: 'started following you', img: 'https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'ajay_rawat', action: 'liked your story', img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  return (
    <div className="w-full h-full relative p-4 bg-black">
      <div className="border-b border-gray-300 p-2">
        <p className="text-white font-semibold">Notifications</p>
      </div>
      <div className="mt-4">
        {/* Static notifications */}
        <div className="mt-4 space-y-4">
          {notifications.map((notif, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={notif.img} alt="profile" className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-sm text-white">
                  <span className="font-semibold">{notif.name}</span> {notif.action}.
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-500 mt-6">No new notifications.</p>
      </div>
    </div>
  );
}

export default Notifications;
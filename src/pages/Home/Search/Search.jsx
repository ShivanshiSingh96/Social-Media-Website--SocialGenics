import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Shivam Pathak', username: 'spathak_22', profileImg: 'https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Swasti Singh', username: 'swasti_847', profileImg: 'https://images.pexels.com/photos/18320670/pexels-photo-18320670/free-photo-of-a-beautiful-girls-looking-in-camera-and-greenly-background.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, name: 'Rahul Sharma', username: 'rahul_sharma_03', profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, name: 'Ankita Verma', username: 'ankita_v', profileImg: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 5, name: 'Pranav Desai', username: 'pranav_d', profileImg: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 6, name: 'Aditi Rao', username: 'aditi_rao', profileImg: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 7, name: 'Varun Taneja', username: 'varun_tj', profileImg: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 8, name: 'Megha Kapoor', username: 'megha_kapoor', profileImg: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 9, name: 'Aman Sinha', username: 'aman_sinha_98', profileImg: 'https://images.pexels.com/photos/1800454/pexels-photo-1800454.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 10, name: 'Neha Gupta', username: 'neha_gupta', profileImg: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 11, name: 'Rohan Mehta', username: 'rohan_mehta_12', profileImg: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 12, name: 'Kavya Sharma', username: 'kavya_sharma', profileImg: 'https://images.pexels.com/photos/2306777/pexels-photo-2306777.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 13, name: 'Vikram Rathore', username: 'vikram_rathore', profileImg: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 14, name: 'Shreya Malhotra', username: 'shreya_m', profileImg: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 15, name: 'Akash Gupta', username: 'akash_gupta_11', profileImg: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 16, name: 'Riya Desai', username: 'riya_desai', profileImg: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 17, name: 'Aarav Patel', username: 'aarav_patel_99', profileImg: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 18, name: 'Divya Kumar', username: 'divya_kumar', profileImg: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 19, name: 'Manoj Tiwari', username: 'manoj_tiwari', profileImg: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 20, name: 'Sneha Rao', username: 'sneha_rao', profileImg: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 21, name: 'Aryan Gupta', username: 'aryan_gupta', profileImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 22, name: 'Isha Mishra', username: 'isha_mishra', profileImg: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 23, name: 'Harshit Verma', username: 'harshit_verma', profileImg: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 24, name: 'Pooja Singh', username: 'pooja_singh', profileImg: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 25, name: 'Naman Yadav', username: 'naman_yadav', profileImg: 'https://images.pexels.com/photos/2306777/pexels-photo-2306777.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 26, name: 'Shalini Saxena', username: 'shalini_saxena', profileImg: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 27, name: 'Vivek Bhardwaj', username: 'vivek_bhardwaj', profileImg: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 28, name: 'Priya Rajput', username: 'priya_rajput', profileImg: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 29, name: 'Yashika Khanna', username: 'yashika_khanna', profileImg: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 30, name: 'Deepak Joshi', username: 'deepak_joshi', profileImg: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

function Search() {
  const [data, setData] = useState(initialData);

  const handleRemove = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="w-full h-full relative p-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <div className="mt-4">
        <div className="mt-4 space-y-4">
          {data.map((user) => (
            <div key={user.id} className="flex items-center justify-between space-x-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-200">
              <div className="flex items-center space-x-4">
                <img src={user.profileImg} alt="profile" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-white font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.username}</p>
                </div>
              </div>
              <button onClick={() => handleRemove(user.id)} className="text-gray-400 hover:text-red-500 transition duration-200">
                &times;
              </button>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-6">No recent searches.</p>
      </div>
    </div>
  );
}

export default Search;
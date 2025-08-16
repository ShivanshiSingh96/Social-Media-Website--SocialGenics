import React, { useState } from 'react';
import ChatWindow from './ChatWindow'; // Adjust the import path as necessary

function Messages() {
  const [messages] = useState([
    { name: 'rahul_sharma', message: 'Hey, how are you?', unread: true, img: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'neha_kapoor', message: 'Are you coming today?', unread: false, img: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'deepak_verma', message: "Let's catch up later!", unread: true, img: 'https://images.pexels.com/photos/7020714/pexels-photo-7020714.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'anita_mishra', message: 'Meeting postponed to 4 PM.', unread: true, img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'vikas_goyal', message: 'Happy Birthday!', unread: false, img: 'https://images.pexels.com/photos/1800454/pexels-photo-1800454.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'sanjana_bose', message: 'Can you send me the files?', unread: true, img: 'https://images.pexels.com/photos/3754056/pexels-photo-3754056.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'ajay_mehta', message: 'Missed your call. Call me back.', unread: false, img: 'https://images.pexels.com/photos/1006128/pexels-photo-1006128.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'riya_singh', message: 'Let’s meet at 6 PM.', unread: true, img: 'https://images.pexels.com/photos/1846777/pexels-photo-1846777.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'ravi_singhal', message: 'Check your email.', unread: true, img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'poonam_kumar', message: 'Thanks for the help!', unread: false, img: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'arjun_jain', message: 'Can you join the meeting?', unread: true, img: 'https://images.pexels.com/photos/3911156/pexels-photo-3911156.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'megha_aggarwal', message: 'Congrats on your new job!', unread: false, img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'amitabh_yadav', message: 'What’s the update on the project?', unread: true, img: 'https://images.pexels.com/photos/1610929/pexels-photo-1610929.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'ishita_khan', message: 'Received the payment.', unread: false, img: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'karan_patel', message: 'Looking forward to our meeting.', unread: true, img: 'https://images.pexels.com/photos/2757802/pexels-photo-2757802.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'rohit_saxena', message: 'Can you send the PPT?', unread: true, img: 'https://images.pexels.com/photos/1552109/pexels-photo-1552109.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'sneha_nayak', message: 'Missed your email. Will reply soon.', unread: false, img: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'manish_gupta', message: 'Can we reschedule our meeting?', unread: true, img: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'radhika_bhatt', message: 'Please review the document.', unread: false, img: 'https://images.pexels.com/photos/1610929/pexels-photo-1610929.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'ankit_chawla', message: 'I will be late today.', unread: true, img: 'https://images.pexels.com/photos/3785092/pexels-photo-3785092.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'surbhi_tiwari', message: 'Call me when free.', unread: true, img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'vikram_joshi', message: 'Please share the invoice.', unread: false, img: 'https://images.pexels.com/photos/2255022/pexels-photo-2255022.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'swati_rajan', message: 'Are we still on for tomorrow?', unread: true, img: 'https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'abhay_prakash', message: 'Need your feedback on the draft.', unread: true, img: 'https://images.pexels.com/photos/935980/pexels-photo-935980.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'riya_singh', message: 'What’s the deadline?', unread: false, img: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'naman_garg', message: 'Please confirm the meeting time.', unread: true, img: 'https://images.pexels.com/photos/932404/pexels-photo-932404.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'sonali_sengupta', message: 'Received your email.', unread: false, img: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'rajat_shukla', message: 'Need to discuss the proposal.', unread: true, img: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'shweta_nigam', message: 'Sent you the files.', unread: true, img: 'https://images.pexels.com/photos/3770774/pexels-photo-3770774.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'gautam_suri', message: 'Thank you for the support.', unread: false, img: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleMessageClick = (msg) => {
    setSelectedMessage(msg);
  };

  const handleCloseChat = () => {
    setSelectedMessage(null);
  };

  const unreadCount = messages.filter(msg => msg.unread).length;

  return (
    <div className="w-full h-full relative p-4 bg-black-900">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xl font-bold text-white">Messages</p>
        {unreadCount > 0 && (
          <span className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </div>
      <div className="overflow-y-auto h-5/6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-center p-2 cursor-pointer hover:bg-gray-700 rounded-lg transition duration-200 ${
              msg.unread ? 'bg-gray-800' : ''
            }`}
            onClick={() => handleMessageClick(msg)}
          >
            <img
              src={msg.img}
              alt={msg.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="flex-grow">
              <p className="text-white font-semibold">{msg.name}</p>
              <p className="text-gray-400">{msg.message}</p>
            </div>
            {msg.unread && (
              <span className="bg-blue-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">1</span>
            )}
          </div>
        ))}
      </div>
      {selectedMessage && <ChatWindow message={selectedMessage} onClose={handleCloseChat} />}
    </div>
  );
}

export default Messages;
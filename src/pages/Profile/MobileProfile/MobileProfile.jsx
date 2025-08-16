import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Settings from '../../../components/Icons/Setting/Settings.jsx';
import highlightData from '../HightlightsData.jsx'; 
import PostIcon from '../../../components/Icons/Post/post.png';
import Tab from '../../../pages/Tab/Tab.jsx';
import ReelIcon from '../../../components/Icons/Reel/reels.jpg';
import TagIcon from '../../../components/Icons/Tag/tag.png';
import Posts from '../../../pages/Profile/profile/Posts/Posts.jsx';
import Reels from '../../../pages/Profile/profile/Reels/Reels.jsx';
import Tags from '../../../pages/Profile/profile/Tags/Tags.jsx';
import MobileNav from '../../../components/Header/MobileNav/MobileNav.jsx';

const MobileProfile = () => {
    const [activeTab, setActiveTab] = useState("posts");
    const [isContentVisible, setContentVisible] = useState(true);

    const handleTabClick = (tab) => {
        setContentVisible(false);
        // Delay animation 
        setTimeout(() => {
            setActiveTab(tab);
            setContentVisible(true);
        }, 300);
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white p-4">
            {/* Profile Info Section */}
            <div className="flex flex-col items-center mb-6">
                <img 
                    src="https://images.pexels.com/photos/7104962/pexels-photo-7104962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Profile" 
                    className="rounded-full w-24 h-24 object-cover mb-2" 
                />
                <div className="flex flex-col items-center text-center">
                    <Link to="/profile" className="text-lg text-gray-200 font-normal">Shiv_Singh19</Link>
                    <div className="flex items-center gap-x-4 mb-2">
                        <button className="bg-indigo-700 rounded-lg px-2 py-1 text-sm text-white font-normal hover:bg-indigo-500 ease-out duration-150">Edit Profile</button>
                        <button className="bg-indigo-700 rounded-lg px-2 py-1 text-sm text-white font-normal hover:bg-indigo-500 ease-out duration-150">View Archive</button>
                        <Settings />
                    </div>
                    {/* Post, Followers, Following */}
                    <div className='flex items-center justify-center gap-x-2 mb-2'>
                        <h6 className="text-sm text-gray-100 font-normal">10 Posts</h6>
                        <Link to="/" className='text-sm text-gray-100 font-normal'>1400 Followers</Link>
                        <Link to="/" className='text-sm text-gray-100 font-normal'>1200 Following</Link>
                    </div>
                    {/* Full Name */}
                    <p className='text-base font-bold'>Shivanshi Singh</p>
                    <p className='text-sm text-gray-100 font-normal'>
                        Jai Shree Ram<br />
                        Melophile..<br />
                        Web Developer<br />
                        CS Engineer<br />
                    </p>
                </div>
            </div>

            {/* Highlights Section */}
            <div className="w-full h-auto flex items-center gap-x-4 mb-6 overflow-x-auto">
                {highlightData.map((data) => (
                    <Link to="/" key={data.id} className='flex items-center justify-center flex-col flex-shrink-0'>
                        <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-r from-[#ead463] to-[#ead463] text-center">
                            <img 
                                src={data.img} 
                                alt={data.name}
                                className="rounded-full h-full w-full object-cover bg-black p-[2.5px]" 
                            />
                            <p className='text-white text-xs mt-1'>{data.name}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Posts, Reels, and Tagged section */}
            <div className="flex-grow w-full h-auto">
                <div className="flex items-center justify-between mb-4 border-t border-[#313131]">
                    <Tab 
                        label="POSTS" 
                        icon={PostIcon}
                        isActive={activeTab === "posts"}
                        onClick={() => handleTabClick("posts")}    
                    /> 
                    <Tab 
                        label="REELS" 
                        icon={ReelIcon}
                        isActive={activeTab === "reels"}
                        onClick={() => handleTabClick("reels")}    
                    /> 
                    <Tab 
                        label="TAGGED" 
                        icon={TagIcon}
                        isActive={activeTab === "tagged"}
                        onClick={() => handleTabClick("tagged")}    
                    /> 
                </div>
                <div className={`mt-4 transition-opacity duration-300 ease-out ${isContentVisible ? "opacity-100" : "opacity-0"}`}>
                    {activeTab === "posts" && <Posts />}
                    {activeTab === "reels" && <Reels />}
                    {activeTab === "tagged" && <Tags />}
                </div>
            </div>

            {/* Bottom Navigation for smaller screens only */}
            <div className="block lg:hidden md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-[#1d1d1d] z-50">
                <MobileNav />
            </div>
        </div>
    );
}

export default MobileProfile;
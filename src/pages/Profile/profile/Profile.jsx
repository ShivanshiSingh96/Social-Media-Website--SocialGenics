import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Settings from '../../../components/Icons/Setting/Settings.jsx'
import highlightData from '../HightlightsData.jsx'; 
import PostIcon from '../../../components/Icons/Post/post.png'
import Tab from '../../../pages/Tab/Tab.jsx'
import ReelIcon from '../../../components/Icons/Reel/reels.jpg'
import TagIcon from '../../../components/Icons/Tag/tag.png';
import Posts from '../../../pages/Profile/profile/Posts/Posts.jsx';
import Reels from '../../../pages/Profile/profile/Reels/Reels.jsx';
import Tags from '../../../pages/Profile/profile/Tags/Tags.jsx';


const Profile = () => {
    const [activeTab , setActiveTab] = useState("posts");
    const [isContentVisible ,setContentVisible] = useState (true);

    const handleTabClick = (tab) =>{
        setContentVisible(false);

        //delay animation 
        setTimeout(() =>{
            setActiveTab(tab)
            setContentVisible(true)
        },300);
    };
    return(
        <>
            <div className="lg:w-[88%] md:w-[88%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden">
                {/*Your Info section */}
                <div className="w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10">
                    <img 
                        src="https://images.pexels.com/photos/7104962/pexels-photo-7104962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="profile img" 
                        className="rounded-full lg:w-44 md:w-44 sm:w-26 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover" 
                    />
                    <div className="flex items-start flex-col">
                        <div className="flex items-center gap-x-5 mb-4">
                            <Link to="/profile" className="text-lg text-gray-200 font-normal">Shiv_Singh19</Link>
                            <div className="flex items-center gap-x-2">
                                <button className="bg-indigo-700 rounded-lg px-4 py-1 text-base text-white font-normal hover:bg-indigo-500 ease-out duration-150">Edit Profile</button>
                                <button className="bg-indigo-700 rounded-lg px-4 py-1 text-base text-white font-normal hover:bg-indigo-500 ease-out duration-150">View Archive</button>
                            </div>
                            <Settings />
                        </div>
                        {/* post,follower,following */}
                        <div className='flex items-center gap-x-6 mb-4'>
                            <h6 className="text-base text-gray-100 font-normal">10 Posts</h6>
                            <Link to="/profile" className='text-base text-gray-100 font-normal' >1400 Followers</Link>
                            <Link to="/profile" className='text-base text-gray-100 font-normal' >1200 Following</Link>
                        </div>
                        {/*Fullname*/}
                        <p className='text-base text-white font-bold'>Shivanshi Singh</p><br/>
                        {/*Bio*/}
                        <p className='text-base text-gray-100 font-normal'>
                            Jai Shree Ram<br />
                            Melophile..<br/>
                            Web Developer<br/>
                            CS Enginner<br/>
                        </p>
                        
                    </div>
                </div>

                {/*Highlights Section*/}
                <div className="w-full h-auto flex items-center gap-x-9 mb-10">
                    <div className="max-w-[61vw] w-full h-auto flex items-center gap-x-3.5">
                        {highlightData.map((data)=>(
                            <Link to="/profile" key={data.id} className='flex items-center justify-between flex-col flex-shrink-0 '>
                                <div className="w-24 h-24 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#ead463] to-[#ead463] text-center">
                                    <img 
                                        src={data.img} 
                                        alt={data.name}
                                        className="rounded-full h-full w-full object-cover bg-black p-[2.5px]" 
                                    />
                                    <p className='text-white text-sm mt-1'>{data.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/*Posts , Reels and Tagged section */}
                <div className="w-full h-auto">
                    <div className="w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]">
                        <Tab 
                            label="POSTS" 
                            icon={PostIcon}
                            isActive={activeTab === "posts"}
                            onClick ={() => handleTabClick("posts")}    
                        /> 
                        <Tab 
                            label="REELS" 
                            icon={ReelIcon}
                            isActive={activeTab === "reels"}
                            onClick ={() => handleTabClick("reels")}    
                        /> 
                        <Tab 
                            label="TAGGED" 
                            icon={TagIcon}
                            isActive={activeTab === "tagged"}
                            onClick ={() => handleTabClick("tagged")}    
                        /> 
                    </div>
                    <div className={`mt-4 transition-opacity duration-300 ease-out ${isContentVisible ? "opacity-100" : "opacity-0"}`}>
                        {activeTab === "posts" && <Posts />}
                        {activeTab === "reels" && <Reels />}
                        {activeTab ==="tagged" && <Tags />}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Profile;
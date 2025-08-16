import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogo from "../../../assets/Icons/large_socialgenicsname.png";
import SocialIcon from "../../../assets/Icons/large_socialgenics.png";
import HomeLogo from "../../../assets/NavLogo/home.png";
import SearchLogo from "../../../assets/NavLogo/search.png"
import ExploreLogo from "../../../assets/NavLogo/explore.png"
import ReelsLogo from "../../Icons/Reel/reels.jpg";
import MessageLogo from "../../../assets/NavLogo/message.png"
import CreateLogo from "../../../assets/NavLogo/create.png"
import NotificationLogo from "../../../assets/NavLogo/like.png"
import ThreadsLogo from "../../../assets/NavLogo/threads.png"
import MoreLogo from "../../../assets/NavLogo/more.png"
import ProfileLogo from '../../../assets/Icons/profilepic.jpg'


const LargeNav = () =>{
    const sidebarItems = [
        {
          id :0,
          name:"Search",
          link: "/home/search",
          icon: SearchLogo,
        },
        {
          id : 1,
          name:"Explore",
          link: "/home/explore",
          icon: ExploreLogo,
        },
        {
          id: 2,
          name : "Videos",
          link: "/home/videos",
          icon: ReelsLogo,
        },
        {
            id:3,
            name:"Message",
            link: "/home/message",
            icon: MessageLogo,
        },
        {
            id:4,
            name:"Notifications",
            link:"/home/like",
            icon: NotificationLogo,

        },
        {
            id:5,
            name:"Create",
            link: "/home/create",
            icon: CreateLogo,
        },
    ];
    return(
        <>
            <div className="w-full h-full relative">
                <Link to="/home/" className='mb-4 px-8 lg:block md:hidden sm:hidden hidden'>
                    <img src={SocialLogo} alt="SocialGenics logo" className="w-28 h-auto" />
                </Link>

                <Link to="/home/" className='mb-10 px-2 lg:hidden md:block sm:block block'>
                    <img src={SocialIcon} alt="SocialGenics logo" className="w-28 h-auto" />
                </Link>

                <div className='w-full h-auto flex items-start flex-col gap-y-2'>
                    <Link to="/home/" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-indigo-500 rounded-md ease-out duration-500 group'>
                        <img src={HomeLogo} alt="home icon" className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />
                        <p className='text-base font-semibold text-white lg:block md:hidden sm:hidden'>Home</p>
                    </Link>
                    {/*Loop other NavLinks */}
                    {sidebarItems.map((item) => (
                        <Link 
                            to={item.link}
                            key={item.id}
                            className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-indigo-500 rounded-md ease-out duration-500 group'>
                        <img 
                            src={item.icon} 
                            alt="home icon" 
                            className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" 
                        />
                        <p className='text-base font-medium text-white lg:block md:hidden sm:hidden'>
                            {item.name}
                        </p>
                    </Link>
                    ))}
                    {/*Profile section*/}
                    <Link 
                        to="/home/profile"
                        className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-indigo-500 rounded-md ease-out duration-500 group'>
                        <img 
                            src={ProfileLogo} 
                            alt="profile icon" 
                            className="w-6 h-6 object-cover rounded-full group-hover:scale-105 ease-out duration-300" 
                        />
                        <p className='text-base font-medium text-white lg:block md:hidden sm:hidden'>
                            Profile
                        </p>
                    </Link>
                </div>
                {/*More navLinks */}
                <div className='w-full h-auto absolute bottom-0 left-0 px-0'>
                    <Link 
                        to="/home/more"
                        className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-indigo-500 rounded-md ease-out duration-500 group'>
                        <img 
                            src={MoreLogo} 
                            alt="home icon" 
                            className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" 
                        />
                        <p className='text-base font-medium text-white lg:block md:hidden sm:hidden'>
                            More
                        </p>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default LargeNav;
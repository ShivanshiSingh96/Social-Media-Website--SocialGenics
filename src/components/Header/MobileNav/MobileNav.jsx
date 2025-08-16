import React from 'react'
import {Link} from 'react-router-dom'
import HomeLogo from "../../../assets/NavLogo/home.png";
import SearchLogo from "../../../assets/NavLogo/search.png"
import ReelsLogo from "../../../assets/NavLogo/reel.png"
import CreateLogo from "../../../assets/NavLogo/create.png"
import ProfileLogo from '../../../assets/Icons/profilepic.jpg'
import MessageLogo from "../../../assets/NavLogo/message.png"
import NotificationLogo from "../../../assets/NavLogo/like.png"


const MobileNav = () => {
    const sidebarItems = [
        {
          id:0,
          name:"Search",
          link: "/home/search",
          icon: SearchLogo,
        },
        {
            id: 1,
            name:"Create",
            link: "/home/create",
            icon: CreateLogo,
        },
        {
            id: 2,
            name : "Videos",
            link: "/home/videos",
            icon: ReelsLogo,
        },
    ];
    return(
        <>
            <div className='w-full h-auto'>
                <div className="w-full h-auto flex items-center gap-x-2">
                    <Link to="/home/" className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group'>
                        <img src={HomeLogo} alt="home icon" className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />
                    </Link>
                    {sidebarItems.map((item) => (
                        <Link 
                            to={item.link}
                            key={item.id}
                            className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group'>
                            <img 
                                src={item.icon} 
                                alt="home icon" 
                                className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" 
                            />
                        </Link>
                    ))}

                    <Link 
                        to="/home/profile"
                        className='w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group'>
                        <img 
                            src={ProfileLogo}
                            alt="profile icon" 
                            className="w-6 h-6 object-cover rounded-full group-hover:scale-105 ease-out duration-300" 
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MobileNav;
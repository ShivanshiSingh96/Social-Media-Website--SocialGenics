import React from 'react'
import {Link} from 'react-router-dom'
import SocialLogo from '../../../assets/Icons/large_socialgenicsname.png' ;
import NotificationLogo from '../../../assets/NavLogo/like.png';
import MessageLogo from '../../../assets/NavLogo/message.png';

const TopNav = () => {
    return(
        <>
            <div className='w-full h-auto mb-5 lg:hidden md:hidden sm:block block'>
                <div className="w-full h-auto flex items-center justify-between">
                    <Link to="/home">
                        <img 
                            src={SocialLogo}
                            alt="SocialGenics logo" 
                            className="w-28 h-auto object-contain"
                        />
                    </Link>
                    <div className='flex items-center gap-x-4 pe-2'>
                        <Link to="/home/like">
                            <img src={NotificationLogo} alt="SocialGenics Logo" className='w-6 h-6' />
                        </Link>
                        <Link to="/home/message" className='relative'>
                            <img src={MessageLogo} alt="SocialGenics Logo" className='w-6 h-6' />
                            <div className='absolute -right-2 -top-2 bg-red-600 text-sm text-white rounded-full w-5 h-5 flex items-center justify-center'>
                                10
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav;
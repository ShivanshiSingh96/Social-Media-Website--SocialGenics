import React from 'react';
import Profile from '../../pages/Profile/profile/Profile.jsx';
import MobileProfile from '../../pages/Profile/MobileProfile/MobileProfile.jsx';

const Main = () => {
    return (
        <div className="lg:w-md md:w-sm:w-full w-full min-h-screen lg:py-10 md:py-6 sm:py-4 py-4 lg:px-14 md:px-12 sm:px-7 px-2">
            {/* Profile for large screens */}
            <div className="hidden sm:block">
                <Profile />
            </div>
            {/* Profile for small screens */}
            <div className="block sm:hidden">
                <MobileProfile />
            </div>
        </div>
    );
}

export default Main;
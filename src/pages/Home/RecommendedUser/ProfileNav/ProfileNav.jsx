import React from 'react';
import {Link} from 'react-router-dom';

const ProfileNav = () => {
    return (
        <>
            <div className='w-full h-auto flex items-center justify-between'>
                <Link to="/profile" className='w-full h-auto flex items-center gap-x-2'>
                    < img 
                        src="https://images.pexels.com/photos/3776445/pexels-photo-3776445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="profile img" 
                        className="w-12 h-12 rounded-full" 
                    />
                    <div className="flex items-start gap-y-0 flex-col">
                        <p className="text-[0.9rem] text-white font-medium mb-0">niyati_tomar</p>
                        <h6 className="text-[0.935rem] text-gray-400 font-normal">Niyati Tomar</h6>
                    </div>
                </Link>
                <Link to="/" className='text-[0.855rem] text-blue-400 hover:text-gray-200'>Switch</Link>
            </div>
        </>
    )
}

export default ProfileNav;
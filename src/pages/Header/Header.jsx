import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AppContext/AppContext';

const Header = () => {
    const { userLoggedIn } = useAuth();
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-black'>
            {
                !userLoggedIn
                &&
                <>
                    <Link className='text-sm text-white' to={'/login'}>Login</Link>
                    <Link className='text-sm text-white' to={'/register'}>Register</Link>
                </>
            }
        </nav>
    );
}

export default Header;

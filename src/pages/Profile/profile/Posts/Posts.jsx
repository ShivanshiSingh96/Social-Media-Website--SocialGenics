import React from 'react';
import {Link} from 'react-router-dom';

const Posts = () =>{
    return(
        <>
            <div className="w-full h-auto flex items-center gap-1 flex-wrap">
                <Link 
                    to="/profile" 
                    className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
                    style={{
                        backgroundImage:`url("https://images.pexels.com/photos/14520365/pexels-photo-14520365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                        backgroundPosition:"center",
                        backgroundSize:"cover",
                        backgroundRepeat:"no repeat",
                    }}    
                />
                <Link 
                    to="/profile" 
                    className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
                    style={{
                        backgroundImage:`url("https://images.pexels.com/photos/3699322/pexels-photo-3699322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                        backgroundPosition:"center",
                        backgroundSize:"cover",
                        backgroundRepeat:"no repeat",
                    }}    
                />
                <Link 
                    to="/profile" 
                    className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
                    style={{
                        backgroundImage:`url("https://images.pexels.com/photos/2216400/pexels-photo-2216400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                        backgroundPosition:"center",
                        backgroundSize:"cover",
                        backgroundRepeat:"no repeat",
                    }}    
                />
                <Link 
                    to="/profile" 
                    className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
                    style={{
                        backgroundImage:`url("https://images.pexels.com/photos/904272/pexels-photo-904272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                        backgroundPosition:"center",
                        backgroundSize:"cover",
                        backgroundRepeat:"no repeat",
                    }}    
                />
                <Link 
                    to="/profile" 
                    className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
                    style={{
                        backgroundImage:`url("https://images.pexels.com/photos/14955236/pexels-photo-14955236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                        backgroundPosition:"center",
                        backgroundSize:"cover",
                        backgroundRepeat:"no repeat",
                    }}    
                />
            </div>
        </>
    )
}

export default Posts;
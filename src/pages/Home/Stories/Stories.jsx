import React from 'react';
import {Link} from 'react-router-dom';
import storiesData from './StoriesData/StoriesData';
import TextEllipse from './TextEllipse/TextEllipse';

const Stories = () =>{
    return(
        <>
            <div className='lg:max-w-[41vw] md:max-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll'>
                <Link 
                    to="/"
                    key="1" 
                    className='flex items-center justify-center flex-col flex-shrink-0 '>
                    <div className='w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-yellow-400 to-blue-400 '>
                        <img 
                            src="https://images.pexels.com/photos/25947865/pexels-photo-25947865/free-photo-of-blue-common-hepatica-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="story img" 
                            className="rounded-full w-full h-full object-cover p-[2.5px] bg-black" 
                        />
                    </div>
                    <TextEllipse username="Sneha_109" maxLength={8} />
                </Link>
                {storiesData.map((story) => (
                    <Link 
                        to="/"
                        key={story.id}
                        className='flex items-center justify-center flex-col flex-shrink-0 '
                    >
                        <div className='w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-yellow-400 to-blue-400 '>
                            <img 
                                src={story.imageUrl} 
                                alt="story img" 
                                className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                            />
                        </div>
                        <TextEllipse username={story.username} maxLength={8} />
                    </Link>

                ))}
            </div>
        </>
    )
}

export default Stories;
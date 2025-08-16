// ReelsDisplay.jsx
import React, { useRef, useEffect } from 'react';

const VideosDisplay = () => {
  // Sample data for reels, which you can expand or customize further
  const reels = [
    {
      id: 1,
      title: 'Reel 1',
      videoUrl:
        'https://videos.pexels.com/video-files/3997798/3997798-uhd_1440_2732_25fps.mp4', // Replace with actual video paths or keep sample videos
    },
    {
      id: 2,
      title: 'Reel 2',
      videoUrl:
        'https://videos.pexels.com/video-files/5532771/5532771-uhd_1440_2732_25fps.mp4', // Replace with actual video paths or keep sample videos
    },
    {
      id: 3,
      title: 'Reel 3',
      videoUrl:
        'https://videos.pexels.com/video-files/4124035/4124035-uhd_1440_2732_25fps.mp4', // Replace with actual video paths or keep sample videos
    },
    // Add more reels as needed
    {
        id: 4,
        title: 'Reel 4',
        videoUrl:
            'https://videos.pexels.com/video-files/4865389/4865389-uhd_1440_2732_25fps.mp4', // Replace with actual video paths or keep sample videos
    },
    {
        id: 5,
        title: 'Reel 5',
        videoUrl:
          'https://videos.pexels.com/video-files/7222357/7222357-uhd_1440_2732_25fps.mp4', // Replace with actual video paths or keep sample videos
    },
    {
        id: 6,
        title: 'Reel 6',
        videoUrl:
          'https://videos.pexels.com/video-files/6567878/6567878-uhd_1440_2732_25fps.mp4', // Replace with actual video paths or keep sample videos
    },
  ];

  // Ref to keep track of each video element
  const videoRefs = useRef([]);

  // Handle auto-playing of videos when in the viewport
  useEffect(() => {
    const handleScroll = () => {
      videoRefs.current.forEach((video) => {
        if (!video) return; // Avoid errors if ref is not set yet
        const rect = video.getBoundingClientRect();
        // Play video if it's fully visible, otherwise pause it
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {reels.map((reel, index) => (
        <div
          key={reel.id}
          className="h-screen w-full flex justify-center items-center snap-center bg-black relative"
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={reel.videoUrl}
            className="h-full w-auto"
            controls
            loop
          />
          <div className="absolute bottom-10 left-5 text-white text-lg">
            {reel.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosDisplay;

import React from 'react';
import {Routes,Route} from 'react-router-dom';
import LargeNav from '../../components/Header/LargeNav/LargeNav.jsx';
import MobileNav from '../../components/Header/MobileNav/MobileNav.jsx';
import Feed from '../../pages/Home/Feed/Feed.jsx';
import Main from '../../pages/Profile/Main.jsx';
import Search from '../Home/Search/Search.jsx';
import Explore from '../Home/Explore/Explore.jsx';
import VideosDisplay from './VideosDisplay/VideosDisplay.jsx';
import Messages from '../Home/Messages/Messages.jsx';
import Notifications from '../Home/Notifications/Notifications.jsx';
import Create from '../Home/Create/Create.jsx';
import More from '../Home/More/More.jsx';
import AddAccount from './More/AddAccount/AddAccount.jsx';
import AccountSettings from './More/AccountSettings.jsx/AccountSettings.jsx';
import SavedPosts from './More/SavedPosts/SavedPosts.jsx';
import PostDetail from './More/SavedPosts/PostDetail/PostDetail.jsx';
import Archive from './More/Archive/Archive.jsx';
import TimeSpent from './More/TimeSpent/TimeSpent.jsx';
import AccountPrivacy from './More/AccountPrivacy/AccountPrivacy.jsx';
import WebsitePermission from './More/WebsitePermission/WebsitePermission.jsx';
import Language from './More/Language/Language.jsx';
import Help from './More/Help/Help.jsx';
import PrivacyCenter from './More/PrivacyCenter/PrivacyCenter.jsx';
import About from './More/About/About.jsx';
import { useAuth } from '../AppContext/AppContext.jsx';

const Home = () => {
    
    return(
        <>  
            <div className='w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative'>
                {/*Sidebar section*/}
                <div className='lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden'>
                    <LargeNav />
                </div>

                {/*Bottom navbar for small screen*/}
                <div className="w-full h-auto py-1 px-3 border-t border-t-[#1d1d1d] fixed bottom-0 left-0 lg:hidden md:hidden sm:block block bg-black z-50">
                    <MobileNav />
                </div>

                {/*feed and profile  routing section*/}
                <Routes>
                    <Route exact path="/" element={<Feed />} />
                    {/*Profile section */}
                    <Route exact path="/profile" element={<Main />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/explore" element={<Explore />} />
                    <Route exact path="/videos" element={<VideosDisplay />} />
                    <Route exact path="/message" element={<Messages />} />
                    <Route exact path="/like" element={<Notifications />} />
                    <Route exact path="/create" element={<Create />} />
                    <Route exact path="/more" element={<More />} />
                    <Route exact path="/add-account" element={<AddAccount />} />
                    <Route exact path="/account-settings" element={<AccountSettings />} />
                    <Route exact path="/saved-post" element={<SavedPosts />} />
                    <Route exact path="/post/:postId" element={<PostDetail />} />
                    <Route exact path='/archive' element={<Archive />} />
                    <Route exact path='/time-spent' element={<TimeSpent />} />
                    <Route exact path='/account-privacy' element={<AccountPrivacy />} />
                    <Route exact path="/website-permission" element={<WebsitePermission />} />
                    <Route exact path='/language' element={<Language />} />
                    <Route exact path='/help' element={<Help />} />
                    <Route exact path='/privacy-center' element={<PrivacyCenter />} />
                    <Route exact path='/about' element={<About />} />
                
                </Routes>
                
            </div>
        </>
    );
}

export default Home;
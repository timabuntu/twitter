import Logo from '../Logo';
import UserProfile from '../UserProfile';

import { FaRegListAlt as ILists } from 'react-icons/fa';
import {
  MdNotificationsNone as INotifications,
  MdOutlineMarkunread as IMessages,
} from 'react-icons/md';
import {
  HiOutlineHashtag as IExplore,
  HiOutlineHome as IHome,
  HiOutlineDotsCircleHorizontal as IMore,
  HiOutlineBookmark as IBookmarks,
  HiOutlineUser as IProfile,
} from 'react-icons/hi';

const links = [
  { name: 'Home', icon: <IHome className="w-7 h-7" /> },
  { name: 'Explore', icon: <IExplore className="w-7 h-7" /> },
  { name: 'Notifications', icon: <INotifications className="w-7 h-7" /> },
  { name: 'Messages', icon: <IMessages className="w-7 h-7" /> },
  { name: 'Bookmarks', icon: <IBookmarks className="w-7 h-7" /> },
  { name: 'Lists', icon: <ILists className="w-6 h-6" /> },
  { name: 'Profile', icon: <IProfile className="w-7 h-7" /> },
  { name: 'More', icon: <IMore className="w-7 h-7" /> },
];

const Sidebar = () => {
  return (
    <section className="sticky top-0 flex flex-col items-center justify-between w-full h-screen px-2 pb-2 xl:items-start xl:pr-4">
      <div className="flex flex-col items-center w-full xl:items-start">
        <div className="xl:pl-1 xl:pt-1">
          <Logo />
        </div>

        <nav className="flex w-full">
          <ul className="flex flex-col w-full">
            {links.map(link => (
              <li className="flex justify-center w-full mt-2 xl:justify-start ">
                <div className="flex items-center justify-center w-12 h-12 p-2 duration-200 rounded-full cursor-pointer xl:justify-start xl:w-auto xl:h-auto xl:px-3 xl:py-1 hover:bg-gray-200">
                  <div className="flex items-center justify-center w-8 text-gray-700 rounded-full">
                    {link.icon}
                  </div>
                  <p className="hidden py-2 ml-4 text-lg text-gray-900 xl:block">
                    {link.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-10 h-10 mt-4 xl:w-full xl:h-auto xl:pr-4">
          <button className="flex items-center justify-center w-full h-full px-3 py-3 transition-colors duration-200 transform rounded-full shadow-lg xl:py-4 xl:px-6 bg-sky-500 hover:bg-sky-600">
            <p className="hidden font-bold text-white xl:flex">Tweet</p>
            <div className="flex items-center justify-center h-full xl:hidden">
              <svg
                viewBox="0 0 24 24"
                className="flex justify-center w-5 h-5 fill-white"
              >
                <g>
                  <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="w-full mt-auto mb-1 xl:mb-2">
        <UserProfile />
      </div>
    </section>
  );
};

export default Sidebar;

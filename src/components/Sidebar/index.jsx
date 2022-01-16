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
    <section className="flex flex-col justify-between w-full h-screen px-2 pb-2">
      <div className="flex flex-col">
        <Logo />

        <nav>
          <ul>
            {links.map(link => (
              <li className="flex mt-2">
                <div className="flex items-center h-12 px-2 duration-200 rounded-full hover:bg-gray-200">
                  <div className="flex rounded-full :hover-bg-gray-200 ">
                    {link.icon}
                  </div>
                  <a href="/" className="py-2 ml-4 text-lg text-gray-900">
                    {link.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4">
          <button className="w-10/12 py-3.5 transition-colors duration-200 transform rounded-full shadow-lg bg-sky-500 hover:bg-sky-600">
            <p className="hidden font-bold text-white sm:block">Tweet</p>
            <p className="font-bold text-white sm:hidden">++</p>
          </button>
        </div>
      </div>
      <UserProfile />
    </section>
  );
};

export default Sidebar;

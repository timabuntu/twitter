import Logo from '../../components/Logo';
import Post from '../../components/Post';
import UserProffile from '../../components/UserProffile';

import { FaRegListAlt as ILists } from 'react-icons/fa';
import {
  MdNotificationsNone as INotifications,
  MdOutlineMarkunread as IMessages,
  MdOutlineAutoAwesome as estrelinhasBrilhantes,
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
  { name: 'Lists', icon: <ILists className="w-6 h-6 ml-0.5" /> },
  { name: 'Profile', icon: <IProfile className="w-7 h-7" /> },
  { name: 'More', icon: <IMore className="w-7 h-7" /> },
];

const Sidebar = () => {
  return (
    <section className="flex flex-col justify-between h-screen pb-2 border-r-2 pl-7 w-72 border-r-gray-100">
      <div className="w-full">
        <Logo />

        <nav>
          <ul>
            {links.map(link => (
              <li className="flex mt-2">
                <div className="flex items-center py-1.5 pl-2.5 pr-6 text-lg text-gray-900 duration-200 rounded-full hover:bg-gray-200">
                  <div className="w-8 ">{link.icon}</div>
                  <a href="/" className="py-2 ml-4 ">
                    {link.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <Post />
      </div>
      <UserProffile />
    </section>
  );
};

export default Sidebar;

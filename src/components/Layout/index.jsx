import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';

export default function Layout({ children }) {
  return (
    <main className="container flex min-h-screen sm:mx-auto sm:max-w-7xl">
      <div className="flex ">
        <div className="sticky top-0 hidden h-full sm:flex">
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <div className="sticky top-0 z-10">
            <Header />
          </div>

          <div className="flex flex-grow overflow-y-auto sm:max-w-[620px] border-x border-r-gray-100">
            {children}
          </div>
          <div className="sticky bottom-0 sm:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

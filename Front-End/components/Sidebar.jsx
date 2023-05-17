import React from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { TfiPencilAlt } from 'react-icons/tfi'
import { useRouter } from "next/router";

const Sidebar = ({ children }) => {
  const { pathname } = useRouter();
  const hideSidebar = pathname === "/preview/[id]";

  return (
    <div className='flex'>
      <div className={`fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between ${hideSidebar ? 'hidden' : ''}`}>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          {/* <Link href='/customers'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link> */}
          <Link href='/orders'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <TfiPencilAlt size={20} />
            </div>
          </Link>
          {/* <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link> */}
        </div>
      </div>
      <main className={`ml-20 w-full ${hideSidebar ? 'w-full' : 'ml-20'}`}>{children}</main>
    </div>
  );
};

export default Sidebar;

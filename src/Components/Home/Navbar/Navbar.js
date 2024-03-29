import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div>
            <div className="bg-white">
                <header className="border-b mb-8">
                    <div className="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto">
                        {/* <!-- logo - start --> */}
                        <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                            <BsFillPeopleFill className='text-blue-500' />
                            Users
                        </a>
                        {/* <!-- logo - end --> */}

                        {/* <!-- buttons - start --> */}
                        <div className="flex sm:border-l border-r divide-x">

                            <a href="#" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                                <span className="hidden sm:block text-gray-500 text-xs font-semibold">Account</span>
                            </a>
                            <button type="button" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex lg:hidden flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>

                                <span className="hidden sm:block text-gray-500 text-xs font-semibold">Menu</span>
                            </button>
                        </div>
                        {/* <!-- buttons - end --> */}
                    </div>
                </header>

            </div>
        </div>
    );
};

export default Navbar;
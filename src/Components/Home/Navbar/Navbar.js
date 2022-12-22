import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div class="bg-white ">
                <header class="border-b mb-8">
                    <div class="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto">
                        {/* <!-- logo - start --> */}
                        <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                            <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                            </svg>

                            Users
                        </a>
                        {/* <!-- logo - end --> */}

                        {/* <!-- nav - start --> */}
                        <nav class="hidden lg:flex gap-12 2xl:ml-16">
                            <a href="#" class="text-indigo-500 text-lg font-semibold">Home</a>
                            <a href="#" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Collections</a>
                            <a href="#" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</a>
                        </nav>
                        {/* <!-- nav - end --> */}

                        {/* <!-- buttons - start --> */}
                        <div class="flex sm:border-l border-r divide-x">
                            <a href="#" class="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 hidden sm:flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>

                                <span class="hidden sm:block text-gray-500 text-xs font-semibold">Wishlist</span>
                            </a>

                            <a href="#" class="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>

                                <span class="hidden sm:block text-gray-500 text-xs font-semibold">Account</span>
                            </a>
                            <button type="button" class="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex lg:hidden flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>

                                <span class="hidden sm:block text-gray-500 text-xs font-semibold">Menu</span>
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
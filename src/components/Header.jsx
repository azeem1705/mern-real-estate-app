import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center">
                    <button className="outline-none mobile-menu-button md:hidden" onClick={toggleMenu}>
                        <svg
                            className={`w-6 h-6 text-gray-500 hover:text-gray-600 ${showMenu ? 'hidden' : 'block'}`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ display: showMenu ? 'none' : 'block' }}
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg
                            className={`w-6 h-6 text-gray-500 hover:text-gray-600 ${showMenu ? 'block' : 'hidden'}`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ display: showMenu ? 'block' : 'none' }}
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <Link to="/" className="text-gray-800 text-xl font-bold ml-4 md:ml-0">
                        mystate
                    </Link>
                </div>
                <div className="flex items-center justify-center w-full">
                    <form className="flex w-full md:w-1/2 rounded-full border border-gray-300">
                        <input
                            type="text"
                            className="px-4 py-2 w-full rounded-full focus:outline-none"
                            placeholder="Search"
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
                            Search
                        </button>
                    </form>
                </div>
                <nav className="hidden md:flex">
                <Link
                        to="/home"
                        className="py-2 px-4 text-gray-800 hover:text-gray-600"
                    >
                        Home
                    </Link>
                    <Link
                        to="/signin"
                        className="py-2 px-4 text-gray-800 hover:text-gray-600"
                    >
                        SignIn
                    </Link>
                    <Link
                        to="/about"
                        className="py-2 px-4 text-gray-800 hover:text-gray-600"
                    >
                        About
                    </Link>
                </nav>
            </div>
            <div className={`hidden mobile-menu md:hidden ${showMenu ? 'block' : 'hidden'}`}>
                <nav className="flex flex-col mt-4">
                    <Link
                        to="/"
                        className="py-2 px-4 text-gray-800 hover:text-gray-600"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="py-2 px-4 text-gray-800 hover:text-gray-600"
                    >
                        About
                    </Link>
                    <Link
                        to="/signin"
                        className="py-2 px-4 text-gray-800 hover:text-gray-600"
                    >
                        Sign In
                    </Link>
                </nav>
                <form className="flex w-full rounded-full border border-gray-300 mt-4">
                    <input
                        type="text"
                        className="px-4 py-2 w-full rounded-full focus:outline-none"
                        placeholder="Search"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react'
import { FaBars, FaCat, FaCogs, FaHome, FaSearch } from 'react-icons/fa'

export default function SideBar({ showAside, setShowAside }) {
    const [ location, setLocation ] = useState(window.location.pathname)
    const active = 'xl:shadow-none bg-white xl:bg-white/20'

    return (
        <nav className="fixed bottom-4 xl:top-0 left-0 rounded-3xl xl:rounded-none xl:block xl:h-screen mt-2 xl:m-0 mx-[2.5%] md:mx-2 w-[95%] md:w-[calc(100%-23rem)] xl:w-[17rem] bg-indigo-200 bg-opacity-70 dark:bg-[rgba(15,23,42,0.7)] dark:hover:bg-slate-900 xl:bg-slate-200 dark:xl:bg-slate-900 shadow-xl z-30">
            <p className="hidden xl:block text-3xl py-16 px-3 text-black dark:text-white font-medium">Book</p>

            <div className="xl:mr-0 xl:pl-4 xl:py-0 flex justify-evenly py-1 xl:block">
                <a href={`/`} className={`${location == '/' ? active : ""} text-teal-800 dark:text-teal-400 leading-9 font-medium xl:rounded-l-3xl block p-3 px-5 text-md xl:pl-8 xl:mb-5 rounded-3xl xl:rounded-none`}>
                    <FaHome className="inline-block w-6 h-6" /> <span className="px-5 hidden xl:inline">Home</span>
                </a>
                <a href={`/discover`} className={`${location == '/discover' ? active : ""} text-teal-800 dark:text-teal-400 leading-9 font-medium xl:rounded-l-3xl block p-3 px-5 text-md xl:pl-8 xl:mb-5 rounded-3xl xl:rounded-none`}>
                    <FaSearch className="inline-block w-6 h-6" /> <span className="px-5 hidden xl:inline">Discover</span>
                </a>
                <a href={`/category`} className={`${location == '/category' ? active : ""} text-teal-800 dark:text-teal-400 leading-9 font-medium xl:rounded-l-3xl block p-3 px-5 text-md xl:pl-8 xl:mb-5 rounded-3xl xl:rounded-none`}>
                    <FaCat className="inline-block w-6 h-6" /> <span className="px-5 hidden xl:inline">Category</span>
                </a>
                <a href={`/settings`} className={`${location == '/settings' ? active : ""} text-teal-800 dark:text-teal-400 leading-9 font-medium xl:rounded-l-3xl block p-3 px-5 text-md xl:pl-8 xl:mb-5 rounded-3xl xl:rounded-none`}>
                    <FaCogs className="inline-block w-6 h-6" /> <span className="px-5 hidden xl:inline">Settings</span>
                </a>
                <button onClick={() => setShowAside(true)} className="md:hidden text-teal-800 dark:text-teal-400 leading-9 font-medium md:rounded-l-3xl block p-3 px-5 text-md md:pl-8 md:mb-5 rounded-3xl md:rounded-none">
                    <FaBars className="inline-block w-6 h-6" />
                </button>
            </div>

        </nav>
    )
}

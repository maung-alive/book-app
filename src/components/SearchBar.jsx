import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar({ query, setQuery, placeholder, results }) {
    return (
        <div className="relative mb-2">
            <FaSearch className="w-5 h-5 md:w-6 md:h-6 text-slate-600 dark:text-slate-950 absolute top-1/2 left-4 -translate-y-1/2" />
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} className="peer w-full h-14 md:h-16 rounded-lg text-lg pl-12 md:pl-16 pr-4 bg-gray-200 dark:bg-slate-400 placeholder:text-slate-500 dark:placeholder:text-slate-950 text-black dark:text-white shadow-sm md:shadow-none dark:md:shadow-lg focus:outline-none" placeholder={ placeholder || "Search your favourite somethings"} />

            {
                results ?
                <div className="peer-focus:block hidden absolute w-full max-h-[200px] overflow-auto bg-gray-300 dark:bg-slate-400 top-[58px] rounded-lg">
                    {results.map(i => <p key={i} className='text-lg font-medium py-2 px-3 border-b text-blue-950'>{i}</p>)}
                </div>
                :
                <></>
            }
        </div>
    )
}

"use client";

import { useState } from "react"

type SearchBarProps ={
    base_url : string,
    children : string
}

export default function SearchBar({base_url, children}:SearchBarProps){
    const [isOpen, setIsOpen] = useState(false);

    function changeView(){
        setIsOpen(!isOpen)
    }

    return(
        <article className="flex justify-center w-full text-white">
            <form action={base_url} method="GET" className={`flex flex-row justify-around rounded-full py-1 border border-white  transition-all duration-300 ease-in-out ${isOpen ? "px-3 w-72" : "px-1 w-10"}`}>
                <input name="search" type="search" placeholder={children} className={`${isOpen ? "block" : "hidden"} bg-transparent placeholder:text-white focus:outline-none`} />
                <span onClick={changeView} className="material-symbols-outlined hover:cursor-pointer">search</span>
            </form>
        </article>
    )
}
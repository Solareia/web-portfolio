"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

import { FaAlignJustify } from "react-icons/fa6";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [ dropdownState, setDropdownState ] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted)
        return null;

    const toggleDropdown = async () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setDropdownState(!dropdownState));
            }, 100);
        });
    }

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });  
    };

    return(
        <div>
            <div className="w-full h-20 bg-crustlight dark:bg-crust static">
                <div className="w-full px-2 h-full hidden md:block">
                    <div className="flex items-center justify-end h-full">
                        <ul className="gap-x-8 text-tokyo_darker flex mr-8 items-center">
                            <li>
                                <Link href={"/"}>
                                    <p className="align-middle relative text-lg block after:block after:content-[''] after:absolute after:h-[3px] after:bg-tokyogreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Home</p>
                                </Link>
                            </li>
                            <li>
                                <button>
                                    <p onClick={()=>scrollToSection("projects")} className="align-middle relative text-lg block after:block after:content-[''] after:absolute after:h-[3px] after:bg-tokyogreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Projects</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="w-full px-2 h-full md:hidden">
                <div className="flex items-center justify-end h-full px-6 space-x-2">
                    <button onClick={toggleDropdown}>
                        <FaAlignJustify className="text-xl text-latte_text dark:text-mocha_text"/>
                    </button>
                </div>
            </div>
            </div>
            <div className={`md:hidden w-full`}>
                <div className={`${dropdownState ? `visible`: `hidden`} grid grid-cols-1 place-items-end px-8 py-2 bg-crustlight dark:bg-crust space-y-2 text-tokyo_darker`}>
                    <Link href={"/"} className="self-end">
                        Home
                    </Link>
                    <button>
                        <p onClick={()=>scrollToSection("projects")} className="align-middle relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-tokyogreen after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Projects</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { FaAlignJustify } from "react-icons/fa6";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [ dropdownState, setDropdownState ] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted)
        return null;

    const promiseToggle = async () => {
        let tempTheme = '';

        if(theme == 'dark') {
            tempTheme = 'light';
        }

        else{
            tempTheme = 'dark';
        }

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setTheme(tempTheme));
            }, 100);
        });
    };

    const toggleDropdown = async () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setDropdownState(!dropdownState));
            }, 100);
        });
    }

    return(
        <div>
            <div className="w-full h-20 bg-crustlight dark:bg-crust static">
            <div className="w-full px-2 h-full hidden md:block">
                <div className="flex items-center justify-end h-full px-6">
                    <ul className="gap-x-4 text-latte_text dark:text-mocha_text flex">
                        <li>
                            <Link href={"/"}>
                                <p className="align-middle hover:underline">Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/projects"}>
                                <p className="align-middle hover:underline">Projects</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/resume"}>
                                <p className="align-middle hover:underline">Resume</p>
                            </Link>
                        </li>
                        <li>
                            <button className="align-middle text-xl text-latte_yellow dark:text-mocha_yellow" onClick={promiseToggle}>
                                <WiMoonAltWaningCrescent2 />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full px-2 h-full md:hidden">
                <div className="flex items-center justify-end h-full px-6 space-x-2">
                    <button className="text-2xl text-latte_yellow dark:text-mocha_yellow" onClick={promiseToggle}>
                        <WiMoonAltWaningCrescent2 />
                    </button>
                    <button onClick={toggleDropdown}>
                        <FaAlignJustify className="text-xl text-latte_text dark:text-mocha_text"/>
                    </button>
                </div>
            </div>
            </div>
            <div className={`md:hidden w-full`}>
                <div className={`${dropdownState ? `visible`: `hidden`} grid grid-cols-1 place-items-end px-8 py-2 bg-crustlight dark:bg-crust space-y-2 text-latte_text dark:text-mocha_text`}>
                    <Link href={"/"} className="self-end">
                        Home
                    </Link>
                    <Link href={"/projects"} className="self-end">
                        Projects
                    </Link>
                    <Link href={"/resume"} className="self-end">
                        Resume
                    </Link>
                </div>
            </div>
        </div>
    );
}
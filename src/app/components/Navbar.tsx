"use client"

import Link from "next/link";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted)
        return null;

    const themeCallback = () => {
        if(theme == 'dark') {
            setTheme('light');
        } 
        else {
            setTheme('dark');
        }
        console.log(`clicked, switched to ${theme}`);
    };

    return(
        <div className="hidden md:block w-full h-20 bg-crustlight dark:bg-crust">
            <div className="w-full px-2 h-full">
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
                            <button className="align-middle text-xl text-latte_yellow dark:text-mocha_yellow" onClick={themeCallback}>
                                <WiMoonAltWaningCrescent2 />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
"use client"

import Navbar from "./components/Navbar";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Page() {
    return (
        <main className="h-dvh">
            <Navbar />
            
            <div className="flex justify-center items-center h-1/2">
                <div className="block">
                    <p className="text-6xl flex justify-center my-4 text-latte_text dark:text-mocha_text">Artur Yasinskiy</p>
                    <p className="flex justify-center font-thin text-latte_subtext_1 dark:text-mocha_subtext my-4">AUTOMATION • SCRIPTING • SECURITY</p>
                    <div className="flex justify-center items-center text-2xl space-x-2 text-latte_yellow dark:text-mocha_yellow">
                        <Link href={"https://github.com/HarmonicAria/"}>
                            <AiFillGithub />
                        </Link>
                        <Link href={"mailto:yasinskiyartur@protonmail.com"}>
                            <MdEmail />
                        </Link>
                        <Link href={"https://www.linkedin.com/"}>
                            <AiFillLinkedin />
                        </Link>
                        
                    </div>
                </div>
            </div>
        </main>
    );
}
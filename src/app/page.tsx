"use client"

import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Page() {
    return (
        <main className="h-dvh">
            <Navbar />
            
            <div className="flex justify-center items-center h-3/4">
                <div className="block">
                    <div className="flex justify-center items-center w-full pb-8">
                        <Image src='/avatar.jpg' width={200} height={200} alt="Avatar" className="rounded-full aspect-square object-cover"/>
                    </div>
                    <p className="flex justify-center items-center w-full font-thin text-latte_subtext_1 dark:text-mocha_subtext">// CODE NAME</p>
                    <p className="text-6xl flex justify-center my-4 bg-gradient-to-r from-yellow-300 via-blue-400 to-green-400 bg-clip-text text-transparent">SOLAREIA</p>
                    <div className="flex justify-center items-center text-2xl space-x-2 text-latte_yellow dark:text-tokyogreen">
                        <Link href={"https://github.com/Solareia"} className="hover:text-[#689a32] transition-all ease-in-out delay-150 ">
                            <AiFillGithub />
                        </Link>
                        <Link href={"mailto:yasinskiyartur@protonmail.com"} className="hover:text-[#689a32] transition-all ease-in-out delay-150">
                            <MdEmail />
                        </Link>
                        <Link href={"https://www.linkedin.com/"} className="hover:text-[#689a32] transition-all ease-in-out delay-150">
                            <AiFillLinkedin />
                        </Link>
                        
                    </div>
                </div>
            </div>
        </main>
    );
}
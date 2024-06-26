import Navbar from "../components/Navbar"

import { FaServer } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosSchool } from "react-icons/io"
import { FaBrain } from "react-icons/fa";;

export default function Projects() {
    return(
        <main>
            <div className="block md:w-full h-screen overflow-y-auto">
                <Navbar />
                <div className="md:mt-20 flex w-full md:mx-auto md:w-1/3 justify-center items-center md:ring-1 md:ring-crust rounded-md">
                    <div className="grid grid-cols-1 divide-crust">
                        <div className="text-center md:text-2xl my-2 text-latte_text dark:text-mocha_text hidden md:block">
                            Resume
                        </div>
                        <div className="px-2">
                            <ul className="pt-4 pb-8">
                                <li className="md:text-xl text-latte_text dark:text-mocha_text pb-2">
                                    Sierra College
                                    <span className="text-sm md:text-base text-latte_subtext dark:text-mocha_subtext pl-2">
                                        2020 - 2022
                                    </span>
                                </li>
                                <li className="md:text-base text-latte_subtext dark:text-mocha_subtext font-thin">
                                    <span className="inline-flex items-center pr-2 text-2xl align-top font-semibold text-latte_yellow dark:text-mocha_yellow"><IoIosSchool /></span>
                                    <span className="text-sm md:text-base font-thin align-middle text-latte_subtext dark:text-mocha_subtext">Graduated with an Associates Degree in Cybersecurity</span>
                                </li>
                            </ul>
                        </div>
                        <div className="px-2">
                            <ul className="py-4">
                                <li className="md:text-xl text-latte_text dark:text-mocha_text pb-2">
                                    Experience
                                </li>
                                <li className="text-sm md:text-base font-thin text-latte_subtext dark:text-mocha_subtext">
                                    <div>
                                        <p className="font-bold">Academic Projects</p>
                                        <p>Participated in a blue team operation that spanned over a week. Participated in a blue team operation that spanned over a week. The purpose of this operation was to lock down servers and monitor them through various tools.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="px-2">
                            <ul className="py-4">
                                <li className="md:text-xl text-latte_text dark:text-mocha_text pb-2">
                                    Skills
                                </li>
                                <li className="text-sm md:text-base text-latte_subtext dark:text-mocha_subtext pb-4">
                                    <span className="inline-flex items-center pr-2 text-xl align-middle font-semibold text-latte_yellow dark:text-mocha_yellow"><MdOutlineSecurity /></span>
                                    <span className="inline font-semibold text-latte_subtext dark:text-mocha_subtext">Cybersecurity/Blue Team: </span>
                                    <span className="text-sm md:text-base font-thin text-latte_subtext dark:text-mocha_subtext">Strong understanding of network security principles, including firewalls, encryption protocols, and intrusion detection/prevention systems. Skilled in conducting vulnerability assessments and implementing effective security measures to protect against cyber threats.</span>
                                </li>   
                                <li className="text-sm md:text-base text-latte_subtext dark:text-mocha_subtext">
                                    <span className="inline-flex items-center pr-2 text-xl align-middle font-semibold text-latte_yellow dark:text-mocha_yellow"><FaServer /></span>
                                    <span className="inline font-semibold text-latte_subtext dark:text-mocha_subtext">Programming: </span>
                                    <span className="text-sm md:text-base font-thin text-latte_subtext dark:text-mocha_subtext">Experienced in languages such as Python, Java, and C/C++. Experienced in scripting with Bash and PowerShell for automation and system administration tasks.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
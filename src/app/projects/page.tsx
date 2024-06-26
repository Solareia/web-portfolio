import Navbar from "../components/Navbar"
import Link from "next/link"

export default function Projects() {
    return(
        <main>
            <div className="block md:w-full h-screen overflow-y-auto">
                <Navbar />
                <div className="mt-20 flex w-full md:mx-auto md:w-1/3 justify-center items-center ring-1 ring-crust rounded-md">
                    <div className="grid grid-cols-1 divide-crust w-full">
                        <div className="text-center md:text-2xl my-2 text-latte_text dark:text-mocha_text">
                            Projects
                        </div>
                        <div className="px-2">
                            <ul className="pt-4 pb-8">
                                <li className="md:text-xl text-latte_text dark:text-mocha_text pb-2">
                                    <Link href={"https://github.com/HarmonicAria/web-portfolio"}>
                                        Web Portfolio
                                    </Link>
                                </li>
                                <li className="md:text-base text-latte_subtext dark:text-mocha_subtext font-thin italic">
                                    Website that showcases my work, you are looking at it right now.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
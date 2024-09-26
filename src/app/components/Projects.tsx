import Link from "next/link";

export default function Projects() {
    return(
        <main>
            <div className="block md:w-full h-screen bg-[#d6d8df] bg-crustlight" id="projects">
                <div className="text-center py-12 text-2xl md:text-4xl my-2 text-[#40434f] font-bold md:font-normal">
                    PROJECTS
                </div>
                <div className="block md:flex md:grid mx-auto w-3/4 h-3/4 lg:w-1/2 md:w-3/4 md:grid-cols-2 md:gap-x-4">
                    <Link href={"https://github.com/Solareia/gsod-visualizer"} className="flex items-center justify-center text-center h-2/5 shadow-md transition-shadow duration-500 hover:shadow-xl rounded-md my-2 md:h-3/4 bg-[#e6e7ed] text-[#40434f]">
                        <div className="block">
                            <p className="my-4">GSOD Visualizer</p>
                            <p className="font-thin px-8 md:text-base text-xs">A graphical visualizer for GSOD (Global Surface Summary of the Day), which automatically downloads historical weather data, graphs it, and can be saved.</p>
                        </div>
                    </Link>
                    <Link href={"#"} className="flex items-center justify-center text-center h-2/5 hover:ring-2 hover:ring-black shadow-md transition-shadow duration-500 hover:shadow-xl rounded-md my-2 md:h-3/4 bg-[#e6e7ed] text-[#40434f]">
                        <p className="">See more on Github</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
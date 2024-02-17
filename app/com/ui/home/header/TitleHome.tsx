const TitleHome = () => {
    return (
        <div>
            {/* title in middel */}
            <div className="flex flex-col gap-5 absolute tranform -translate-y-3/4 -translate-x-1/4 
                      lg:top-1/2 md:top-72 xs:top-56 lg:left-1/2 md:left-72 xs:left-48 ">

                <div className="relative">
                    <h1 className="text-black font-bold lg:text-[3.8rem] md:text-[2.5rem] sm:text-[2rem] xs:text-[1.5rem]">
                        Marketing With AL Rafidain Shop Fast
                    </h1>
                </div>

                <div className="md:w-[20rem] xs:w-[10rem]">
                    <a href={'/products'} className="group relative inline-block overflow-hidden border-none bg-slate-100  md:px-10 xs:px-5 py-2 text-sm font-semibold text-slate-800 hover:text-sky-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-sky-600 transition-all duration-800 group-hover:w-full"></span>
                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-sky-600 transition-all duration-800 group-hover:h-full"></span>
                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-sky-600 transition-all duration-800 group-hover:w-full"></span>
                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-sky-600 transition-all duration-800 group-hover:h-full"></span>
                        Our Products
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TitleHome;
import Image from "next/image";

const Banner = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-2">

            <div className="relative basis-1/2 relative bg-gradient-to-r from-sky-300 via-sky-500 to-sky-300 mb-8">
                <div className="w-full flex items-center justify-center aspect-video">
                    <Image sizes="" className="object-cover" fill src={'/banner.png'} alt="banner" />
                </div>
                <div className="text-center absolute top-0 flex flex-col items-center justify-center h-full w-full 
                                hover:backdrop-blur-sm hover:bg-black/30 transition">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2">Great Summer Sales</h1>
                    <p className="text-md sm:text-3xl lg:text-2xl text-white mb-2">Enjoy discounts on selected items</p>
                    <p className="text-4xl sm:text-6xl text-purple-600 font-bold">GET 40% OFF</p>
                </div>
            </div>

            <div className="relative basis-1/2 relative bg-gradient-to-r from-sky-300 via-sky-500 to-sky-300 mb-8">
                <div className="w-full flex items-center justify-center aspect-video">
                    <Image sizes="" className="object-cover" fill src={'/banner.png'} alt="banner" />
                </div>
                <div className="text-center absolute top-0 flex flex-col items-center justify-center h-full w-full 
                                hover:backdrop-blur-sm hover:bg-black/30 transition">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2">Great Summer Sales</h1>
                    <p className="text-md sm:text-3xl lg:text-2xl text-white mb-2">Enjoy discounts on selected items</p>
                    <p className="text-4xl sm:text-6xl text-purple-600 font-bold">GET 40% OFF</p>
                </div>
            </div>
            
        </section>
    );
}

export default Banner;
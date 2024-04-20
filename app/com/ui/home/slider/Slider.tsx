'use client'
import Image from "next/image";
import { Rating } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const usersList = [
    {
        isOnline: true,
        img: "/1.jpg",
        rate: 5,
        name: "Hussein Ahmed",
        username: "Hussein95",
        mesge: "This site is very amazing and provides very wonderful services. I have dealt with them for a long time",
    },
    {
        isOnline: false,
        img: "/3.jpg",
        rate: 5,
        name: "Omer Ahmed",
        username: "omerAli6565",
        mesge: "Really, really, truly, the most important features of Al-Rafidain Shop is 24-hour support and good customer treatment, as it provides very wonderful services. I have dealt with them for long periods.",
    },
    {
        isOnline: true,
        img: "/2.jpg",
        rate: 4,
        name: "Sarah Ali Mohammed",
        username: "Sarah99",
        mesge: "Thank you to those who run it. I loved this site. It is a great step in selling electronic services in our country online..",
    },
    {
        isOnline: true,
        img: "/7.jpg",
        rate: 5,
        name: "Noor Mohammed",
        username: "noorMohammed0863788",
        mesge: "It is a amazing site. Thank for developers.",
    },
    {
        isOnline: false,
        img: "/6.png",
        rate: 4,
        name: "Maya Ali",
        username: "Maya890768",
        mesge: "It is a beautiful site. Good luck to those who run it and from success to greater success.",
    },
];

function Slider() {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        setTimeout(() =>
            setIndex((prevIndex) => prevIndex === usersList.length - 1 ? 0 : prevIndex + 1), 5000
        );
        return () => { resetTimeout(); };
    }, [index]);

    return (
        <div className="
            m-auto 
            max-w-[800px] 
            overflow-hidden">
            <div className="
                whitespace-nowrap
                transition ease 1000ms"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {
                    usersList.map((item, index) => (
                        <div className="
                            p-5 
                            inline-block 
                            w-full 
                            h-[250px] 
                            text-center"
                            key={index}>
                            <div className="
                                flex 
                                justify-center 
                                items-center
                                w-full">
                                <div className={`
                                    outline 
                                    ${item.isOnline ? 'outline-green-500' : 'outline-gray-500'}
                                    rounded-[100%]
                                    w-[100px]
                                    h-[100px]`}>
                                    <Image className="
                                        bg-cover
                                        p-1
                                        rounded-[100%] 
                                        w-[100px] 
                                        h-[100px]"
                                        priority
                                        width={500}
                                        height={500}
                                        src={item.img}
                                        alt="" />
                                </div>
                            </div>
                            <div className="p-5 flex flex-col">
                                <div><Rating value={item.rate} readOnly /></div>
                                <div className="flex justify-center items-center">
                                    <h1 className="text-md text-zinc-800 font-bold uppercase">{item.name}</h1>
                                    <p className="text-sm text-zinc-400 lowercase pl-2">@{item.username}</p>
                                </div>
                                <div className="
                                    whitespace-normal">
                                    <span className="
                                        mt-5
                                        text-sm
                                        text-zinc-500
                                        font-bold">
                                        {item.mesge}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            {/* <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div> */}
        </div>
    );
}

export default Slider;
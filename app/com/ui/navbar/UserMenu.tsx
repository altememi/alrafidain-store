'use client';
import Link from "next/link";
import Avatar from "../Avatar";
import Background from "./Background";
import { SafeUser } from "@/types/Index";
import { signOut } from 'next-auth/react'
import { useCallback, useState } from "react";
import { AiFillCaretDown, AiOutlineBoxPlot, AiOutlineDashboard, AiOutlineLogin, AiOutlineQuestion, AiOutlineUser } from "react-icons/ai";
import { MdLogin, MdLogout } from "react-icons/md";

interface UserMenuProps {
    currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])

    return (
        <>
            <section className="z-30">

                <div onClick={toggleOpen} className={`p-2 border-[0.2px] border-slate-300 flex 
                                                    flex-row items-center gap-1 
                                                    ${isOpen && 'text-slate-600'} rounded-md cursor-pointer 
                                                    hover:border-slate-500 transition text-slate-600`}>

                    <Avatar src={currentUser?.image} />
                    <AiFillCaretDown />
                    {
                        isOpen && (
                            <div>
                                <ul className="absolute top-[66px] md:right-[20px] right-[0px] z-10 flex md:min-w-[200px] xs:min-w-full flex-col gap-2 overflow-hidden border border-blue-gray-50 bg-white p-3">

                                    {
                                        currentUser ? (
                                            <div>
                                                {/* <Link href={`/profile/${currentUser.id}`} >
                                                    <button className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all">
                                                        <AiOutlineUser size={20} />
                                                        <p className="block font-sans text-sm font-medium ">Profile</p>
                                                    </button>
                                                </Link> */}
                                                {currentUser.role === 'ADMIN' &&
                                                    <Link href={'/dashboard'} >
                                                        <button className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all">
                                                            <AiOutlineDashboard size={20} />
                                                            <p className="block font-sans text-sm font-medium ">Dashboard</p>
                                                        </button>
                                                    </Link>
                                                }
                                                <Link href={'/products'} >
                                                    <button className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all">
                                                        <AiOutlineBoxPlot size={20} />
                                                        <p className="block font-sans text-sm font-medium ">Products</p>
                                                    </button>
                                                </Link>
                                                <Link href={'/help'} >
                                                    <button className="flex w-full cursor-pointer  items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all">
                                                        <AiOutlineQuestion size={20} />
                                                        <p className="block font-sans text-sm font-medium ">Help and Support</p>
                                                    </button>
                                                </Link>
                                                <hr className="my-2 border-gray-100" />
                                                <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all"
                                                    onClick={() => signOut()}>
                                                    <MdLogout size={20} />
                                                    <p className="font-sans text-sm font-medium">Sign Out</p>
                                                </button>
                                            </div>
                                        ) : (
                                            <div>
                                                <Link href={'/products'}>
                                                    <button className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all">
                                                        <AiOutlineBoxPlot size={20} />
                                                        <p className="block font-sans text-sm font-medium ">Products</p>
                                                    </button>
                                                </Link>
                                                <Link href={'/help'}>
                                                    <button className="flex w-full cursor-pointer  items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all">
                                                        <AiOutlineQuestion size={20} />
                                                        <p className="block font-sans text-sm font-medium ">Help and Support</p>
                                                    </button>
                                                </Link>
                                                <hr className="my-2 border-gray-100" />
                                                <Link href={'/signin'}>
                                                    <button className="flex w-full cursor-pointer  items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all">
                                                        <MdLogin size={20} />
                                                        <p className="block font-sans text-sm font-medium ">Login</p>
                                                    </button>
                                                </Link>
                                                <Link href={'/signup'}>
                                                    <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all">
                                                        <AiOutlineLogin size={20} />
                                                        <p className="font-sans text-sm font-medium">Register</p>
                                                    </button>
                                                </Link>
                                            </div>
                                        )
                                    }
                                </ul>

                            </div>
                        )
                    }
                </div>
            </section>
            {isOpen ? <Background onClick={toggleOpen} /> : null}
        </>
    );
}

export default UserMenu;


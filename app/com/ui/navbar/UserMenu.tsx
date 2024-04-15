'use client';
import Link from "next/link";
import Avatar from "../Avatar";
import Background from "./Background";
import { SafeUser } from "@/types/Index";
import { signOut } from 'next-auth/react'
import { useCallback, useState } from "react";
import { AiFillCaretDown, AiOutlineBoxPlot, AiOutlineDashboard, AiOutlineLogin, AiOutlineQuestion, AiOutlineUser } from "react-icons/ai";
import { MdAccountBox, MdAddBox, MdDashboard, MdLogin, MdLogout } from "react-icons/md";

import '../../../globals.css'
import Image from "next/image";

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
            <section>
                <div className="user" onClick={toggleOpen}><Avatar src={currentUser?.image} /> <AiFillCaretDown /></div>
                    {
                        isOpen && (
                            <div className="menu flex flex-col justify-center items-center">
                                <ul className="flex flex-col justify-center items-center">
                                    <Image src={'/logo-ruc.png'} width={200} height={200} alt=""/>
                                    {
                                        currentUser ? (
                                            <div>
                                                {currentUser.role === 'ADMIN' &&
                                                    <Link href={'/dashboard'} >
                                                        <button className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all">
                                                            <MdDashboard size={20} />
                                                            <p className="block font-sans text-sm font-medium ">Dashboard</p>
                                                        </button>
                                                    </Link>
                                                }
                                                <Link href={'/products'} >
                                                    <button className="flex w-full cursor-pointer items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all">
                                                        <MdAddBox size={20} />
                                                        <p className="block font-sans text-sm font-medium ">Products</p>
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

            </section>
            {isOpen ? <Background onClick={toggleOpen} /> : null}
        </>
    );
}

export default UserMenu;


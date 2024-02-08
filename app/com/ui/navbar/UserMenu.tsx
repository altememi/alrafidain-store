'use client';

import Logo from "../Logo";
import Link from "next/link";
import Avatar from "../Avatar";
import ItemMenu from "./ItemsMenu";
import Background from "./Background";
import { SafeUser } from "@/types/Index";
import { signOut } from 'next-auth/react'
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface UserMenuProps {
    currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, [])

    return (
        <>
            <section className="z-30">
                <div onClick={toggleOpen}
                    className={`p-2 border-[0.2px] border-slate-300 flex 
                                flex-row items-center gap-1 ${isOpen && 'text-slate-600'} rounded-md 
                                cursor-pointer hover:border-slate-500 transition text-slate-600`}>
                    <Avatar src={currentUser?.image} />
                    <AiFillCaretDown />
                    {
                        isOpen && (
                            <div className="absolute top-96 left-2/4 -translate-x-2/4 -translate-y-1/4
                                        rounded-[30px] shadow-lg bg-white w-[350px] overflow-hidden
                                        text-lg flex flex-col cursor-pointer">
                                {/* image container */}
                                <div className="bg-slate-100 flex justify-center border-b-[.5px] border-slate-100">
                                    <Logo src={"/logo-ruc.png"} alt={"Logo"} />
                                </div>
                                {currentUser ?
                                    (
                                        // container when there user > current user
                                        <div>
                                            <Link href={"/cart"}>
                                                <ItemMenu onClick={toggleOpen}>
                                                    Your Cart
                                                </ItemMenu>
                                            </Link>
                                            <Link href={"/dashboard"}>
                                                <ItemMenu onClick={toggleOpen}>
                                                    Dashboard
                                                </ItemMenu>
                                            </Link>
                                            <ItemMenu onClick={() => { toggleOpen; signOut(); } }>
                                                LogOut
                                            </ItemMenu>
                                        </div>
                                    ) : (
                                        // container when there not user > current user *
                                        <div>
                                            <Link href={"/signin"}>
                                                <ItemMenu onClick={toggleOpen}>
                                                    Login to your account
                                                </ItemMenu>
                                            </Link>
                                            <Link href={"/signup"}>
                                                <ItemMenu onClick={toggleOpen}>
                                                    Create a new account
                                                </ItemMenu>
                                            </Link>
                                        </div>
                                    )
                                }
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
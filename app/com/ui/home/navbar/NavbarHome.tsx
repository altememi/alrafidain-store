import Link from "next/link";
import Logo from "../../Logo";
import UserMenu from "../../navbar/UserMenu";
import { getCurrentUser } from "@/action/GetCurrentUser";

const NavbarHome = async () => {
    const currentUser = await getCurrentUser();
    return (
        <div>
            <div className="px-20 py-2 absolute top-0 w-full bg-sky-100/[.4]">
                <nav className="list-none flex flex-row gap-5 items-center justify-between">
                    <div className="flex items-center gap-10">
                        <div className="flex flex-row items-center gap-3">
                            <Logo src={"/logo-ruc.png"} alt={"logo"} custom="w-10 h-10" />
                            <span className="font-semibold text-lg">Al Rafidain Shop</span>
                        </div>
                        <div className="md:flex flex-row gap-3 xs:hidden">
                            <Link href={'/dashboard'}>
                                <li className={`cursor-pointer border-b-4 border-slate-400 hover:border-sky-600 active:border-sky-600`}>Dashboard</li>
                            </Link>
                            <Link href={'/products'}>
                            <li className={`cursor-pointer border-b-4 border-slate-400 hover:border-sky-600 active:border-sky-600`}>Products</li>
                            </Link>
                            <Link href={'/dashboard'}>
                            <li className={`cursor-pointer border-b-4 border-slate-400 hover:border-sky-600 active:border-sky-600`}>Contact us</li>
                            </Link>
                        </div>
                    </div>
                    <div><UserMenu currentUser={currentUser} /></div>
                </nav>
            </div>
        </div>
    );
}

export default NavbarHome;
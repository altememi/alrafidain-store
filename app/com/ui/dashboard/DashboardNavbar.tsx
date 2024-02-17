'use client';

import Link from "next/link";
import DashboardNavbarItems from "./DashboardNavbarItems";
import { MdDashboard, MdDns, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";
import Container from "../../shared/Container";

const DashboardNavbar = () => {
    const pathname = usePathname();
    return (
        <section className="fixed z-20 bg-sky-50 w-full border-b-2 border-slate-100 py-3 px-5">
            <Container>
                <div className="flex items-center md:justify-center justify-center overflow-x-auto gap-5 flex-nowrap">
                    <Link href={'/dashboard'}>
                        <DashboardNavbarItems
                            label="Home"
                            icon={MdDashboard}
                            selected={pathname === '/dashboard'} />
                    </Link>
                    <Link href={'/dashboard/add-products'}>
                        <DashboardNavbarItems
                            label="Add"
                            icon={MdLibraryAdd}
                            selected={pathname === '/dashboard/add-products'} />
                    </Link>
                    <Link href={'/dashboard/manage-products'}>
                        <DashboardNavbarItems
                            label="Manage"
                            icon={MdDns}
                            selected={pathname === '/dashboard/manage-products'} />
                    </Link>
                </div>
            </Container>
        </section>);
}

export default DashboardNavbar;
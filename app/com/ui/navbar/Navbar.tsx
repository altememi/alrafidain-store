import Link from "next/link";
import Container from "../../shared/Container";
import Image from "next/image";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/action/GetCurrentUser";
import CartQuantity from "./CartQuantity";


const Navbar = async () => {

    const user = await getCurrentUser();

    return (
        <section className="sticky top-0 w-full bg-sky-100 z-30 shadow-sm border-b-[1px]">
            <div>
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0 py-2">
                        <Link href='/'>
                            <div className="flex items-center gap-2 md:gap-1 text-lg font-semibold">
                                <Image priority={true} width={30} height={30} src={'/logo-ruc.png'} alt="logo" />
                                Rafidain Shop
                            </div>
                        </Link>
                        <div className="flex items-center gap-8 md:gap-12">
                            <CartQuantity/>
                            <UserMenu currentUser={user} />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Navbar;
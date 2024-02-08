import Link from "next/link";
import Container from "../../shared/Container";
import FooterList from "./FooterList";

import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <section className="bg-sky-800 text-slate-200 text-sm mt-16 shadow-md border-t-[2px]">
            <Container>
                <div className="flex flex-col md:flex-row justify-between py-8">
                    <FooterList>
                        <h3 className="text-zinc-300 text-base font-bold mb-2">Rafidain Store Categories</h3>
                        <Link href={'/'}>Phones</Link>
                        <Link href={'/'}>Laptops</Link>
                        <Link href={'/'}>Desktops</Link>
                        <Link href={'/'}>Watches</Link>
                        <Link href={'/'}>TVS</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-zinc-300 text-base font-bold mb-2">Rafidain Store Services</h3>
                        <Link href={'/'}>Rafidain Store Policy</Link>
                        <Link href={'/'}>FAQs</Link>
                        <Link href={'/'}>Contact us</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-5 md:mb-0 px-5">
                        <h3 className="text-zinc-300 text-base font-bold mb-4">About Rafidain Store</h3>
                        <div className="flex flex-col gap-3">
                            <p>
                                Concur Electric Co.
                                is a family operated electrical contractor with the goal of providing high quality
                                electrical construction services and building lasting personal relationships with our customers.
                                We have achieved that goal by maintaining a core group of electricians,
                                most of which have been with Concur Electric since its inception
                            </p>
                            <p>&copy;{new Date().getFullYear()} Rafidain Store All rights reserved</p>
                        </div>
                    </div>
                    <FooterList>
                        <h3 className="text-zinc-300 text-base font-bold mb-2">Rafidain Store Social Media</h3>
                        <Link href={'/'} className="flex items-center gap-2"><MdFacebook size={20} />Facebook</Link>
                        <Link href={'/'} className="flex items-center gap-2"><AiFillTwitterCircle size={20} />Twitter</Link>
                        <Link href={'/'} className="flex items-center gap-2"><AiFillYoutube size={20} />Youtube</Link>
                    </FooterList>
                </div>
                <div className="text-center w-full py-5">Designed & Coded by <Link href={'/'}>Hussein Ahmed</Link></div>
            </Container>
        </section>
    );
}

export default Footer;
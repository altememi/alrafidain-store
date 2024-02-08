'use client';
import { useCart } from "@/hook/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Headinig from "../com/ui/Heading";
import { TruncateText } from "@/utils/truncateText/page";
import Button from "../com/ui/Button";
import ItemContent from "./ItemContent";

const LineHorizontal = () => { return <hr className="w-[100%] my-5" />; }

const CartClient = () => {

    const { cartProducts } = useCart();

    // if no there any products
    if (!cartProducts || cartProducts.length === 0) {

        return (
            <section className="flex flex-col items-center">
                <p className="text-2xl">Your cart is empty</p>
                <div>
                    <Link href={'/'} className="text-slate-600 flex items-center gap-1 mt-1">
                        <MdArrowBack />
                        <span>Start Shpping</span>
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section>
            <Headinig title="Shopping Cart" center />
            <LineHorizontal />
            <div className="flex flex-col lg:flex-row gap-5">
                {/* left */}
                <div className="w-full basis-1/2 md:basis-3/5">
                    <div className="grid grid-cols-6 text-xs gap-2 pb-5 items-center">
                        <div className="text-sm font-semibold justify-self-start col-span-2">PRODUCT</div>
                        <div className="text-sm font-semibold justify-self-center">PRICE</div>
                        <div className="text-sm font-semibold justify-self-center">QUANTITY</div>
                        <div className="text-sm font-semibold justify-self-center">TOTAL</div>
                        <div className="text-sm font-semibold justify-self-end">OPERATIONS</div>
                    </div>
                        {
                            cartProducts && cartProducts.map((item) => {
                                return <ItemContent key={item.id} item={item}/>
                            })
                        }
                </div>
                <div className="w-full h-[.5px] lg:h-[80px] lg:w-[.5px] bg-slate-300"></div>
                {/* right */}
                <div className="flex justify-between w-full basis-2/4 md:basis-2/5">
                    <div className="flex flex-col gap-5">
                        <span className="text-sm font-semibold">TOTAL</span>
                        <span className="text-sm font-semibold">SUBTOTAL</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="text-sm font-semibold">$1000</span>
                        <span className="text-sm font-semibold">$130</span>
                    </div>
                </div>
            </div>
            <LineHorizontal />
            {/* bottom */}
            <div className="flex justify-between gap-5">
                <div>
                    <Button outline small custom="w-[6rem] bg-rose-400 border-none text-white" label={"Clear A Cart"} onClick={() => { }} />
                </div>
                <div>
                    <Button small custom="w-[200px]" onClick={() => { }} label={"Checkout"} />
                    <div className="flex items-center py-1 gap-1 text-slate-500">
                        <MdArrowBack size={20} className="pt-1"/>
                        <span>continue shopping</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartClient;
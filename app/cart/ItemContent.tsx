'use client';
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/hook/useCart";
import { MdDelete } from "react-icons/md";
import { FormatPrice } from "@/utils/formatPrice/page";
import { TruncateText } from "@/utils/truncateText/page";
import SetQuantity from "../com/ui/products/SetQuantity";
import { CartProductType } from "../product/[productId]/productDetails";

interface ItemContentProp { item: CartProductType; }

const ItemContent: React.FC<ItemContentProp> = ({ item }) => {
    const { handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDescrease } = useCart();
    return (
        <div className="grid grid-cols-6 text-xs md:text-sm gap-0 items-start border-t-[1px] py-5">
            <div className="col-span-2 justify-self-start flex gap-3 md:gap-4">
                <Link href={''}>
                    <div className="relative w-[60px] aspect-square">
                        <Image fill src={item.selectedImage.image} className="object-contain" alt="" />
                    </div>
                </Link>
                <div className="flex flex-col justify-between">
                    <Link href={''}>
                        {TruncateText(item.name)}
                    </Link>
                </div>
            </div>
            <div className="justify-self-center">{FormatPrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuantity
                    cartProduct={item}
                    cartCounter={true}
                    handleQuantityDecrease={() => { handleCartQtyDescrease(item) }}
                    handleQuantityIncrease={() => { handleCartQtyIncrease(item) }} />
            </div>
            <div className="font-semibold justify-self-center">
                {FormatPrice((item.price * item.quantity))}
            </div>
            <div className="flex text-rose-400 items-center justify-end hover:text-green-400">
                <MdDelete size={16} />
                <button className="justify-self-end" onClick={() => { handleRemoveProductFromCart(item) }}>REMOVE</button>
            </div>
        </div>
    );
}

export default ItemContent;
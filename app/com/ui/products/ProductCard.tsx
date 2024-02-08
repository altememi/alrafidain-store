'use client';

import { FormatPrice } from "@/utils/formatPrice/page";
import { TruncateText } from "@/utils/truncateText/page";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: any
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const ProductRating =
        data.reviews.reduce(
            (acc: number, item: any) => item.rating + acc, 0) / data.reviews.length;

    const route = useRouter();

    return (
        <section
            onClick={() => route.push(`/product/${data.id}`)}
            className="
                p-2
                col-span-1
                cursor-pointer
                border-[1.2px]
                border-slate-200
                bg-slate-50
                rounded-sm
                transition
                hover:bg-sky-100
                text-center
                text-sm">
            <div
                className="
                    flex
                    flex-col
                    items-center
                    w-full
                    gap-1">
                <div
                    className="
                        aspect-square 
                        overflow-hidden
                        relative
                        w-full">
                    <Image
                        className="
                            w-full
                            object-contain"
                        priority
                        fill
                        src={data.images[0].image}
                        alt={data.name} />
                </div>
                <div>{TruncateText(data.name)}</div>
                <div><Rating value={ProductRating} readOnly /></div>
                <div>{data.reviews.length} reviews</div>
                <div
                    className="
                        font-semibold">
                    {FormatPrice(data.price)}</div>
            </div>
        </section>
    );
}

export default ProductCard;
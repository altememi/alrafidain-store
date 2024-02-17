
'use client'

import { CartProductType, SelectedImageType } from "@/app/product/[productId]/productDetails";
import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType;
    product: any;
    handleColorSelect: (value: SelectedImageType) => void;
}
const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct, product, handleColorSelect
}) => {

    const LineHorizontal = () => { return <hr className="w-[100%]" />; }

    return (
        <section className="min-h-[300px]">
            <div className="flex flex-col gap-1">

                <div className="min-w-[300px] max-h-[500px] relative aspect-square overflow-hidden">
                    <Image fill src={cartProduct.selectedImage.image} alt={cartProduct.name} className="object-fit" />
                </div>

                <LineHorizontal />

                <div className="flex items-center justify-center gap-5 cursor-pointer">
                    {
                        product.images.map((image: SelectedImageType) => {
                            return (
                                <div className={`m-2 ${cartProduct.selectedImage.color === image.color ? 'w-[6rem] border-2' : 
                                                'border-none'} rounded-full relative w-[3rem] aspect-square overflow-hidden border-teal-500`}
                                    key={image.color} onClick={() => handleColorSelect(image)}>
                                    <Image fill src={image.image} alt={image.color} className="object-fit" />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default ProductImage;

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

    const LineHorizontal = () => { return <hr className="w-[100%] my-3" />; }

    return (
        <section className="grid grid-rows-6 gap-2 h-full max-h-[500px] min-h-[300px]">
            <div className="flex flex-col gap-1">

                <div className="col-span-5 max-w-[500px] min-w-[400px] relative aspect-square">
                    <Image fill src={cartProduct.selectedImage.image} alt={cartProduct.name} className="w-full object-contain" />
                </div>

                <LineHorizontal/>

                <div className="flex items-center justify-center gap-5 cursor-pointer min-w-[150px] max-w-[200px] sm:w-[100px]">
                    {
                        product.images.map((image: SelectedImageType) => {
                            return (
                                <div className={`${cartProduct.selectedImage.color === image.color ? 'shadow-sm rounded-full p-4 shadow-sky-600' : 'border-none'} relative w-[50%] 
                                                                aspect-square overflow-hidden border-teal-500`}
                                    key={image.color} onClick={() => handleColorSelect(image)}>
                                    <Image fill src={image.image} alt={image.color} className="object-contain" />
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
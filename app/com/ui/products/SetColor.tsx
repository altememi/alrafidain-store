'use client'

import { CartProductType, SelectedImageType } from "@/app/product/[productId]/productDetails";

interface SetColorProps {
    images: SelectedImageType[],
    cartProduct: CartProductType,
    handleColorSelect: (value: SelectedImageType) => void
}

const SetColor: React.FC<SetColorProps> = ({ images, cartProduct, handleColorSelect }) => {
    return (
        <section>
            <div className="flex gap-3 items-center">
                <span className="font-semibold">COLOR:</span>
                <div className="flex gap-2">
                    {
                        images.map((image) => {
                            return (
                                <div onClick={() => handleColorSelect(image)}
                                    key={image.color}
                                    className={`
                                        h-7 w-7 
                                        rounded-full 
                                        border-teal-500 
                                        flex items-center justify-center
                                        ${cartProduct.selectedImage.color === image.color ? 'border-[1.5px]' : 'border-none'}`}>
                                    <div style={{ background: image.colorCode }}
                                        className="h-5 w-5 
                                                rounded-full
                                                bprder-[1.2px]
                                                border-slate-300
                                                cursor-pointer"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default SetColor;
'use client'

import { CartProductType } from "@/app/product/[productId]/productDetails";

interface SetQuantityProps {
    cartCounter?: boolean,
    cartProduct: CartProductType,
    handleQuantityIncrease: () => void
    handleQuantityDecrease: () => void
}

const btnStyle = 'border-[1px] border-slate-200 px-2 rounded'

const SetQuantity: React.FC<SetQuantityProps> = (
    {
        cartProduct,
        cartCounter,
        handleQuantityDecrease,
        handleQuantityIncrease
    }) => {
    return (
        <section className="flex gap-8 items-center">
            {
                cartCounter ?
                    null :
                    <div className='font-semibold'>
                        QUANTITY:
                    </div>
            }
            <div className="flex gap-4 items-center text-base">
                <button className={btnStyle} onClick={handleQuantityDecrease}>-</button>
                <div>{cartProduct.quantity}</div>
                <button className={btnStyle} onClick={handleQuantityIncrease}>+</button>
            </div>
        </section>
    );
}

export default SetQuantity;
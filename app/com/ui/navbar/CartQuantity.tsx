'use client'
import { useCart } from "@/hook/useCart";
import { GrCart } from "react-icons/gr";

const CartQuantity = () => {

    const {cartTotalQuantity} = useCart();
    return ( 
        <div className="relative flex text-lg ">
        <GrCart />
        <span className="
                    w-5 h-5 flex items-center justify-center
                    absolute top-[-10px] right-[-15px] 
                    text-sm text-white bg-sky-600 rounded-full ">
            {cartTotalQuantity}
        </span>
    </div>
     );
}
 
export default CartQuantity;
import { CartProductType } from "@/app/product/[productId]/productDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartTotalQuantity: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrease: (product: CartProductType) => void;
    handleCartQtyDescrease: (product: CartProductType) => void;
}

interface Props {
    [propName: string]: any;
}

export const CartContext = createContext<CartContextType | null>(null);


export const CartContextProvider = (props: Props) => {

    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);    

    useEffect(() => {
        const cartItems: any = localStorage.getItem('Rafidain-Shop');
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);
        setCartProducts(cProducts);
    }, []);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updateCart;

            if (prev) updateCart = [...prev, product];
            else updateCart = [product];

            localStorage.setItem('Rafidain-Shop', JSON.stringify(updateCart));
            return updateCart;
        });
    }, []);

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((item) => { return item.id !== product.id });
            setCartProducts(filteredProducts);
            localStorage.setItem('Rafidain-Shop', JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);

    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        let updateCart;
        if (product.quantity == 25) {
            return toast.error("Maximum quantity is 25");
        }
        if (cartProducts) {
            updateCart = [...cartProducts];
            const existingIndex = cartProducts.findIndex(p => p.id === product.id);
            if (existingIndex > -1) {
                updateCart[existingIndex].quantity = ++updateCart[existingIndex].quantity;
            }
            setCartProducts(updateCart);
            localStorage.setItem('Rafidain-Shop', JSON.stringify(updateCart));
        }
    }, [cartProducts]);

    const handleCartQtyDescrease = useCallback((product: CartProductType) => {
        let updateCart;
        if (product.quantity == 1) {
            return toast.error("Minum quantity is 1");
        }
        if (cartProducts) {
            updateCart = [...cartProducts];
            const existingIndex = cartProducts.findIndex(p => p.id === product.id);
            if (existingIndex > -1) {
                updateCart[existingIndex].quantity = --updateCart[existingIndex].quantity;
            }
            setCartProducts(updateCart);
            localStorage.setItem('Rafidain-Shop', JSON.stringify(updateCart));
        }
    }, [cartProducts]);

    const value = {
        cartTotalQuantity,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDescrease
    }

    return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider")
    }
    return context;
}

'use client'

import Button from "@/app/com/ui/Button";
import ProductImage from "@/app/com/ui/products/ProductImage";
import SetColor from "@/app/com/ui/products/SetColor";
import SetQuantity from "@/app/com/ui/products/SetQuantity";
import { useCart } from "@/hook/useCart";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

interface ProductDetailsProps {
    product: any
}
export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImage: SelectedImageType,
    quantity: number,
    price: number
}
export type SelectedImageType = {
    color: string,
    colorCode: string,
    image: string
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

    const route = useRouter();

    const [isProductInCart, setIsProductInCart] = useState(false);

    const { handleAddProductToCart, cartProducts } = useCart();


    const [cartProduct, setCartProduct] = useState<CartProductType>(
        {
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            brand: product.brand,
            selectedImage: { ...product.images[0] },
            quantity: 1,
            price: product.price
        }
    );

    useEffect(() => {
        setIsProductInCart(false);
        if (cartProducts) {
            const existingIndex = cartProducts.findIndex(p => p.id === product.id);
            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartProducts]);


    const LineHorizontal = () => { return <hr className="w-[30%] my-2" />; }

    const ProductRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length;

    const handleColorSelect = useCallback((value: SelectedImageType) => {
        setCartProduct((prev) => {
            return { ...prev, selectedImage: value };
        });
    }, [cartProduct.selectedImage]);

    const handleQuantityDecrease = useCallback(() => {
        if (cartProduct.quantity <= 1) {
            return;
        }
        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity-- };
        })
    }, [cartProduct]);

    const handleQuantityIncrease = useCallback(() => {
        if (cartProduct.quantity >= 99) {
            return;
        }
        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity++ };
        })
    }, [cartProduct]);

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-1 text-slate-600 text-sm">
                <h2 className="text-3xl font-medium text-zinc-800 text-[1.5rem] text-justify">{product.name}</h2>
                <div className="flex items-center gap-3">
                    <Rating value={ProductRating} readOnly />
                    <div className="text-zinc-400">{product.reviews.length} Comments</div>
                </div>
                <LineHorizontal />
                <div className="text-[1rem] text-justify text-zinc-500">{product.description}</div>
                <LineHorizontal />

                <div className="flex gap-5 items-center">
                    <span className="font-semibold">CATEGORY</span>
                    <span>{product.category}</span>
                </div>

                {/* <LineHorizontal />
                <div className="flex gap-5 items-center">
                    <span className="font-semibold">BRAND</span>
                    <span>{product.brand}</span>
                </div> */}
                <LineHorizontal />
                <div className="flex gap-5 items-center">
                    <span className="font-semibold">IN STOCK</span>
                    <span>
                        {product.inStock ? <MdCheckCircle size={24} className="text-sky-600" /> :
                            <IoMdCloseCircle size={24} className="text-rose-600" />}
                    </span>
                </div>
                <LineHorizontal />
                {
                    isProductInCart ?
                        <>
                            <div
                                className="max-w-[500px] py-2 flex items-center gap-2 
                                            justify-start my-3 bg-slate-50 py-1">
                                <MdCheckCircle size={24} className="text-sky-600" />
                                <span>The Product Added To Cart.</span>
                            </div>
                            <Button 
                            custom="max-w-[500px] rounded-lg"
                                label="View Your Cart" 
                                onClick={() => { route.push('/cart') }} />

                        </> :
                        <>
                            {/* <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect} /> */}
                            {/* <LineHorizontal /> */}
                            <SetQuantity cartProduct={cartProduct} handleQuantityDecrease={handleQuantityDecrease} handleQuantityIncrease={handleQuantityIncrease} />
                            <LineHorizontal />
                            <Button
                                custom="max-w-[500px] rounded-lg"
                                label="Add To Cart"
                                onClick={() => { handleAddProductToCart(cartProduct) }} />
                        </>
                }
            </div>
            <ProductImage product={product} cartProduct={cartProduct} handleColorSelect={handleColorSelect} />
        </section>
    )
}
'use client'

import { ImageType } from "@/app/dashboard/add-products/addproductsForm"
import { useCallback, useEffect, useState } from "react"
import ChooseImage from "./ChooseImage"
import Button from "../Button"
import { FaCheck } from "react-icons/fa"


interface SelectColorProps {
    item: ImageType,
    addImageToState: (value: ImageType) => void,
    removeImageFromState: (value: ImageType) => void,
    isProductCreated: boolean
}


const SelectColor: React.FC<SelectColorProps> =
    ({ item, addImageToState, removeImageFromState, isProductCreated }) => {

        const [isSelected, setIsSelected] = useState(false);
        const [file, setFile] = useState<File | null>(null);

        useEffect(() => {
            if (isProductCreated) {
                setIsSelected(false);
                setFile(null);
            }
        }, [isProductCreated]);

        const handleFileChange = useCallback((value: File) => {
            setFile(value);
            addImageToState({ ...item, image: value });
        }, []);

        const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setIsSelected(e.target.checked);
            if (!e.target.checked) {
                setFile(null);
                removeImageFromState(item);
            }
        }, []);

        return (
            <section className="grid grid-cols-1 overflow-y-auto gap-2 border-[1px] border-slate-200 rounded-md items-center p-5">
                <div className={`relative flex items-center rounded-full cursor-pointer gap-2 ${isSelected ? 'justify-start' : 'justify-center'} items-center`}>
                    <input id={item.color} type='checkbox' onChange={handleCheck} checked={isSelected}
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full 
                                            border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 
                                            before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full 
                                            before:bg-sky-500 before:opacity-0 before:transition-opacity checked:border-sky-600 checked:bg-sky-600 
                                            checked:before:bg-sky-600 hover:before:opacity-10" />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 pl-[2px] -translate-y-2/4 peer-checked:opacity-100">
                        <FaCheck />
                    </span>
                    <label htmlFor={item.color} className={`font-semibold cursor-pointer`}>{item.color}</label>
                </div>
                <>
                    {
                        isSelected && !file && <div className="col-span-2">
                            <ChooseImage item={item} handleFileChnage={handleFileChange} />
                        </div>
                    }
                    {
                        file && <div className="flex items-center justify-between text-sm col-span-2 text-center">
                            <p>{file?.name}</p>
                            <div className="w-[70px]">
                                <Button 
                                    custom="bg-sky-600 rounded-md h-8 border-none"
                                    label={"Remove"} onClick={
                                    () => {
                                        setFile(null)
                                        removeImageFromState(item)
                                    }} />
                            </div>
                        </div>
                    }
                </>
            </section>
        );
    }
export default SelectColor;
'use client'

import { FieldValues, UseFormRegister } from "react-hook-form";
import { FaCheck } from "react-icons/fa";

interface CustomCheckboxProps {
    id: string,
    label: string,
    disabled?: boolean,
    register: UseFormRegister<FieldValues>;
}
const CustomCheckbox: React.FC<CustomCheckboxProps> = (
    { id, label, disabled, register }
) => {
    return (
        <div className="w-full flex gap-3 items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor={id}>
                <input
                    id={id} disabled={disabled} {...register(id)} placeholder="" type='checkbox'
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full 
                                border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 
                                before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full 
                                before:bg-sky-500 before:opacity-0 before:transition-opacity checked:border-sky-600 checked:bg-sky-600 
                                checked:before:bg-sky-600 hover:before:opacity-10" />
                <span
                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 
                                left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <FaCheck />
                </span>
            </label>
            <label htmlFor={id} className="text-sm font-medium">{label}</label>
        </div>
    );
}

export default CustomCheckbox;
'use client'

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    min?: number,
    id: string,
    label: string,
    type?: string,
    disabled?: boolean,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({min, id, label, type, disabled, required, register, errors}) => {
    return ( 
        <section className="w-full relative">
            <input
                min={min}
                autoComplete="off"
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                placeholder=""
                type={type}
                className={`
                    peer
                    w-full p-4 pt-6 outline-none
                    bg-white border-2
                    rounded-md transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    hover:border-sky-500
                    ${errors[id] ? 'border-rose-500' : 'border-slate-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-sky-500'}`}/>
            <label htmlFor={id}
                className={`
                absolute
                cursor-text
                text-md
                duation-150
                transform
                -translate-y-3
                top-5
                z-10
                origin-[0]
                left-4
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ${errors[id] ? 'text-rose-400' : 'text-slate-400'}`}>{label}</label>
        </section>
     );
}
 
export default Input;
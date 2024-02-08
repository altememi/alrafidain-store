'use client'

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps {
    id: string,
    label: string,
    disabled?: boolean,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Textarea: React.FC<TextareaProps> = ({ id, label, disabled, required, register, errors}) => {
    return ( 
        <section className="w-full relative">
            <textarea 
                autoComplete="off"
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                placeholder=""
                className={`
                    peer
                    w-full max-h-[150px] min-h-[150px]
                    p-4 pt-6
                    outline-none bg-white
                    border-2 rounded-md
                    transition
                    hover:border-sky-500
                    disabled:opacity-70 disabled:cursor-not-allowed
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
 
export default Textarea;
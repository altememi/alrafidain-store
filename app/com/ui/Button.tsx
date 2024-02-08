
'use client';

import React from "react";
import { IconType } from "react-icons";


interface ButtonProps {
    label: any,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
    label, disabled, outline, small, custom, icon: Icon, onClick
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                disabled:opacity-70
                disabled:cursor-not-allowed
                hover:opacity-80
                transition
                w-full
                flex items-center justify-center gap-2
                ${outline ? 'bg-white' : ' bg-sky-800'}
                ${outline ?  ' text-slate-600' : 'text-white'}
                ${small ?  'text-sm font-light' : 'text-md font-semibold'}
                ${small ?  'py-1 px-2 border-[1px]' : 'py-3 px-4 border-2'}
                ${custom ?  custom : 'rounded-sm border-sky-800'}
                `}>
            {Icon && <Icon size={24}/>}
            {label}
        </button>
    );
}

export default Button;

'use client';

import Image from "next/image";
import React from "react";


interface ButtonProps {
    src: string,
    alt: string,
    custom?: string,
}

const Logo: React.FC<ButtonProps> = ({ src, alt, custom }) => {
    return (
        <Image
            className={`${ custom ? custom : '' }`}
            src={src}
            width={200}
            height={200}
            alt={alt}
        />
    );
}

export default Logo;
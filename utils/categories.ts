import { AiFillPhone, AiOutlineDesktop, AiOutlineLaptop } from "react-icons/ai";
import { MdOutlineElectricBolt, MdOutlineKeyboard, MdStorefront, MdTv, MdWatch } from "react-icons/md";

export const categories = [
    { 
        label: 'All', 
        icon: MdStorefront
    },
    { 
        label: 'Phone', 
        icon: AiFillPhone
    },
    { 
        label: 'Laptop', 
        icon: AiOutlineLaptop
    },
    { 
        label: 'Desktop',  
        icon: AiOutlineDesktop
    },
    { 
        label: 'Watch', 
        icon: MdWatch
    },
    { 
        label: 'TV', 
        icon: MdTv
    },
    { 
        label: 'Accesories', 
        icon: MdOutlineKeyboard
    },
    { 
        label: 'Electroic',  
        icon: MdOutlineElectricBolt 
    }
]
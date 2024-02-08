
interface ItemMenuProps {
    children : React.ReactNode,
    onClick : () => void
}

const ItemMenu : React.FC<ItemMenuProps> = ({ children, onClick}) => {
    return (
        <div 
            onClick={onClick}    
            className="text-slate-600 text-center p-4 hover:bg-slate-50 transition border-b-[1px] border-slate-100">
                {children}
        </div>
    );
}
export default ItemMenu;
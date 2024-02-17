import { IconType } from "react-icons";

interface ActionButtonProps {
    icon: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
}
const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
            flex items-center
            justify-center
            rounded-full
            cursor-pointer
            w-[35px] h-[35px]
            text-slate-500
            border-[.5px]
            ${disabled && 'cursor-not-allowed'}`}>
            <Icon size={20} />
        </button>
    );
}

export default ActionButton;
interface BackgroundProps {
    onClick: () => void;
}

const Background: React.FC<BackgroundProps> = ({onClick}) => {
    return ( 
        <div onClick={onClick} 
                className="bg-slate-600 opacity-80 w-screen h-screen fixed top-0 left-0">
        </div>
     );
}
 
export default Background;
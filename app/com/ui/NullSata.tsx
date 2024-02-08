interface NullDataProps {
    text: string;
}


const NullData : React.FC<NullDataProps> = ({text}) => {
    return ( 
        <div className="w-full h-[50vh] flex items-center justify-center text-xl md:text-6xl">
            <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-600">{text}</p>
        </div>
     );
}
 
export default NullData;
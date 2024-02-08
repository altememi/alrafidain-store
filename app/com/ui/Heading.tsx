interface HeadingProps {
    title: string,
    center?: boolean,
}

const Headinig: React.FC<HeadingProps> = ({ title, center}) => {
    return ( 
        <section className={center ? 'text-center' : 'text-start'}>
            <h1 className="font-bold text-2xl">{title}</h1>
        </section>
     );
}
 
export default Headinig;
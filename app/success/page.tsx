import Image from 'next/image';
import '../globals.css';
const Success = () => {
    return (
        <section className='containerPage'>
            <div className='flex flex-col justify-center items-center'>
                <Image src={'/zin.jpg'} width={400} height={400} alt='' />
            </div>
            <div>
                <h3 className='capitalize'>thank you for your payment</h3>
                <p className='capitalize'>Call this number to complete the payment process</p>
            </div>
            <div className='mt-10'>
                <span>+964</span>-
                <span>780</span>-
                <span>635</span>-
                <span>1789</span>
            </div>
        </section>);
}

export default Success;
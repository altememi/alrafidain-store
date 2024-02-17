
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';

interface AvatarProp {
    src?: string | null | undefined,
}

const Avatar: React.FC<AvatarProp> = ({ src }) => {

    if (src) {
        return (
                <Image
                    src={src} priority alt='avatar'
                    className='rounded-full w-[35px] h-[35px] object-cover' width={500} height={500} />
     )
    }
    return (
        <FaUserCircle size={24} />
    );
}

export default Avatar;
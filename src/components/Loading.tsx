import Image from 'next/image';
import loader from '../../public/loader.svg';

const Loading = () => {
  return <Image src={loader} className='loader' alt='Loader' />
};

export default Loading;
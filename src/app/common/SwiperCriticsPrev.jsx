import Image from 'next/image';
import { React } from 'react';
import { useSwiper } from 'swiper/react';

const SlidePrevButton = () => {
    const swiper = useSwiper();

    return (
        <button className='mr-2' onClick={() => swiper.slidePrev()}><Image src={"/icons/arrow-circle-left.png"} width={50} height={50} /></button>
    );
}
export default SlidePrevButton
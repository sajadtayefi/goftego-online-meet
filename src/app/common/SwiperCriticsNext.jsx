import Image from 'next/image';
import { React } from 'react';
import { useSwiper } from 'swiper/react';

const SlideNextButton = () => {
    const swiper = useSwiper();

    return (
        <button className='ml-2' onClick={() => swiper.slideNext()}><Image src={"/icons/arrow-circle-right.png"} width={50} height={50} /></button>
    );
}
export default SlideNextButton
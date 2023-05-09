import Image from 'next/image';
import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function GoftegoArrowNext() {
    const swiper = useSwiper();

    return (
        <button className='ml-2' onClick={() => swiper.slideNext()}><Image src={"/icons/arrowcircle-right.png"} width={50} height={50} /></button>
    );
}
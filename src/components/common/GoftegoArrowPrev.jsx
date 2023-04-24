import Image from 'next/image';
import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function GoftegoArrowPrev() {
    const swiper = useSwiper();

    return (
        <button className='' onClick={() => swiper.slideNext()}><Image src={"/icons/arrowcircle-left -.png"} width={50} height={50} /></button>
    );
}
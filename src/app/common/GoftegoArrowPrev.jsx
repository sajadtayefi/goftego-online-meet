import Image from 'next/image';
import { React } from 'react';
import { useSwiper } from 'swiper/react';

const GoftegoArrowPrev = () => {
    const swiper = useSwiper();

    return (
        <button className='' onClick={() => swiper.slidePrev()}><Image src={"/icons/arrowcircle-left -.png"} width={50} height={50} /></button>
    );
}
export default GoftegoArrowPrev
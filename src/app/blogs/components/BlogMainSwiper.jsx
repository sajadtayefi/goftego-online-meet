"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import Btn from '@/app/common/Btn';
import Image from 'next/image';


function BlogMainSwiper({ text, data, renderItem }) {
    return (
        <div className="text-white container mx-auto  px-10 pb-20">
            <div className='flex flex-row justify-between pb-4 lg:pb-10 '>
                <h2 className='xl:text-[40px] lg:text-[32px] text-[20px]  '>{text}</h2>
                <div className='lg:flex hidden'>
                    <Btn
                        cname="review-swiper-button-prev ml-5 "
                        icon={<Image src={"/icons/Frame 37.svg"} width={50} height={50} />}
                    />
                    <Btn
                        cname="review-swiper-button-next rotate-180 "
                        icon={<Image src={"/icons/Frame 37.svg"} width={50} height={50} />}
                    />
                </div>
            </div>
            <Swiper
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.review-swiper-button-next',
                    prevEl: '.review-swiper-button-prev',
                }}
                spaceBetween={20}
                slidesPerView={4}
                speed={1500}
                rewind={true}
                breakpoints={
                    {
                        // when window width is >= 320px
                        100: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        }
                        ,
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20

                        }
                        // when window width is >= 768px
                        , 1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                        // when window width is >= 1024px
                        , 1600: {
                            slidesPerView: 4,
                        }
                    }
                }

            >
                {data.map((item, index) => {
                    return (
                        <div className=' ' key={index}>
                            <SwiperSlide>
                                {renderItem(item)}
                            </SwiperSlide>
                        </div>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default BlogMainSwiper;
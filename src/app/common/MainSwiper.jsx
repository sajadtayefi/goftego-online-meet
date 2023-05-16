import { Swiper, SwiperSlide } from 'swiper/react';
import GoftegoArrowNext from "./GoftegoArrowNext";
import GoftegoArrowPrev from "./GoftegoArrowPrev";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import Image from 'next/image';

function MainSwiper({ item, renderItem }) {
    return (
        <div className='w-full flex flex-col justify-center  items-center xl:mb-0 mb-10 px-10  '>
            <Swiper
                className="w-full mt-5 xl:mt-10 relative     "
                // install Swiper modules
                navigation={{
                    nextEl: '.review-swiper-button-next',
                    prevEl: '.review-swiper-button-prev',
                }}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                speed={1500}
                pagination
                rewind={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={
                    {
                        // when window width is >= 100px
                        100: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        }
                        // when window width is >= 600px
                        , 600: {
                            slidesPerView: 2
                        }
                        // when window width is >= 1024px
                        , 1024: {
                            slidesPerView: 3,
                        }
                        // when window width is >= 1600px
                        , 1600: {
                            slidesPerView: 4
                        }
                    }
                }
            >
                {item.map((item, index) => {
                    return (
                        <div key={index} className=" flex flex-col   justify-center items-center">
                            <SwiperSlide className="flex ">
                                {renderItem(item)}
                            </SwiperSlide>
                        </div>
                    )
                })}
            </Swiper>
            {/* next and perv btn */}
            <div className="flex flex-row relative w-full  justify-center w     ">
                <div className="absolute z-20 -top-56 left-0 -right-6 bottom-0">
                    <Image className='review-swiper-button-next cursor-pointer' src={"/icons/arrowcircle-right.png"} width={50} height={50} />
                </div>
                <div className="absolute z-20 -top-56 -left-5 bottom-10">
                    <Image className='review-swiper-button-prev cursor-pointer' src={"/icons/arrowcircle-left -.png"} width={50} height={50} />
                </div>
            </div>
        </div >
    );
}

export default MainSwiper;


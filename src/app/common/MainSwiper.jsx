import { Swiper, SwiperSlide } from 'swiper/react';
import GoftegoArrowNext from "./GoftegoArrowNext";
import GoftegoArrowPrev from "./GoftegoArrowPrev";
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';

function MainSwiper({ item, renderItem }) {
    return (
        <div className='w-full flex justify-center items-center xl:mb-0 mb-10  '>
            <Swiper
                className="w-full mt-5 xl:mt-10 relative px-10    "
                // install Swiper modules
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
                        , 600: {
                            slidesPerView: 2
                        }
                        // when window width is >= 768px
                        , 1024: {
                            slidesPerView: 3,
                        }
                        // when window width is >= 1024px
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
                <div className="flex flex-row  relative  justify-between   w-full   ">
                    <div className="absolute z-20 -top-56 left-0 -right-6 bottom-0">
                        <GoftegoArrowNext />
                    </div>
                    <div className="absolute z-20 -top-56 -left-6 bottom-10">
                        <GoftegoArrowPrev />
                    </div>
                </div>
            </Swiper>
        </div >
    );
}

export default MainSwiper;


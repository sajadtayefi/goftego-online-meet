'use client';

import { BtnGoftegoSubscriptionsItems, CardGoftegoSubscriptionsItems } from "@/constant/GoftegoSubscriptionsItems";
import Btn from "./common/Btn";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import CardGoftego from "./common/CardGoftego";
import GoftegoArrowNext from "./common/GoftegoArrowNext";
import GoftegoArrowPrev from "./common/GoftegoArrowPrev";


function GoftegoSubscriptions() {
    return (
        <div className=" container flex flex-col text-white mx-auto ">
            <h3 className="xl:text-5xl font-semibold xl:mb-10 text mb-3 lg:text-4xl text-[24px] px-2">
                اشتراک های <span className="text-secondary">گفتگو</span>
            </h3>
            <div className="flex flex-row relative items-start justify-start xl:overflow-hidden scrollbar-thumb-red scroll scrollbar-track-gray-200 overflow-scroll pb-4   ">
                {BtnGoftegoSubscriptionsItems.map((item, index) => {
                    return (
                        <div className="ml-5 whitespace-nowrap" key={index}>
                            <Btn
                                textCname={item.textCname}
                                text={item.text}
                                cname={item.cname}
                            />
                        </div>
                    )
                })}
            </div>
            <div
                className='w-full flex justify-center items-center mb-10  '>
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
                    {CardGoftegoSubscriptionsItems.map((content, index) => {
                        return (
                            <div key={index} className=" flex flex-col   justify-center items-center">
                                <SwiperSlide className="flex ">
                                    <CardGoftego
                                        image={content.image}
                                        btnbuy={content.btnBuy}
                                        meetingTimeText={content.meetingTimeText}
                                        perMonthText={content.perMonthText}
                                        title={content.title}
                                        users={content.users}
                                    />
                                </SwiperSlide>
                            </div>
                        )
                    })}
                    <div className="flex flex-row  relative  justify-between   w-full   ">
                        <div className="absolute z-20 -top-56 left-0 -right-6 bottom-0">
                            <GoftegoArrowNext />
                        </div>
                        <div className="absolute z-10 -top-56 -left-6 bottom-10">
                            <GoftegoArrowPrev />
                        </div>
                    </div>
                </Swiper>
            </div >
        </div>
    );
}

export default GoftegoSubscriptions;
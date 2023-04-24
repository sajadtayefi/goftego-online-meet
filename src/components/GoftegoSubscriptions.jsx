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
        <div className=" container flex flex-col text-white mx-auto">
            <h3 className="text-5xl font-semibold mb-10">
                اشتراک های <span className="text-secondary">گفتگو</span>
            </h3>
            <div className="flex flex-row items-start justify-start   ">
                {BtnGoftegoSubscriptionsItems.map((item, index) => {
                    return (
                        <div className="ml-5" key={index}>
                            <Btn
                                text={item.text}
                                cname={item.cname}
                            />
                        </div>
                    )
                })}
            </div>
            <div
                className='w-full flex justify-center items-center  '>
                <Swiper
                    className="w-full mt-10 relative    "
                    // install Swiper modules
                    spaceBetween={20}
                    slidesPerView={4}
                    speed={1500}
                    pagination
                    rewind={true}
                >
                    {CardGoftegoSubscriptionsItems.map((content, index) => {
                        return (
                            <div key={index} className=" flex flex-col  justify-center items-center">
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
                    <div className="flex flex-row  z-10 absolute  justify-between top-[270px] w-full   ">
                        <GoftegoArrowNext />
                        <GoftegoArrowPrev />
                    </div>
                </Swiper>
            </div >
        </div>
    );
}

export default GoftegoSubscriptions;
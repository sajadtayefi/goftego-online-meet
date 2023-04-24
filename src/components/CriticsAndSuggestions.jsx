'use client';

import Btn from "./common/Btn";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import CommentCard from "./common/CommentCard";
import { CriticsAndSuggestionsItems } from "@/constant/CriticsAndSuggestionsItems";
import SlideNextButton from "./common/SwiperCriticsNext";
import SlidePrevButton from "./common/SwiperCriticsPrev";



function CriticsAndSuggestions() {
    return (
        <div className=" flex flex-col justify-center items-center text-white text-center mb-32">
            <Btn
                text='نظرات مشتریان'
                textCname='text-secondary '
                cname='bg-SecendryLighter px-12 py-4 rounded-full '
            />
            <h3 className="text-5xl  pt-5 ">
                انتقادات و پیشنهادات مشتریان و سازمان هایی که از نرم افزار
            </h3>
            <h3 className="text-5xl  pt-5">
                مدیریت جلسات آنلاین گفتگو استفاده کردند.
            </h3>
            <div
                className='w-full'>
                <Swiper
                    className="w-full pt-10 mt-10 "
                    // install Swiper modules
                    spaceBetween={100}
                    slidesPerView={3}
                    initialSlide={1}
                    speed={1500}
                    pagination
                    maxBackfaceHiddenSlides={3}
                    rewind={true}
                    centeredSlides={true}
                >
                    {CriticsAndSuggestionsItems.map((content, index) => {
                        return (
                            <div key={index}>
                                <SwiperSlide>
                                    {({ isActive }) => (
                                        <div className={isActive ? "scale-125" : "scale-100"}>
                                            <CommentCard
                                                avatar={content.avatar}
                                                title={content.title}
                                                name={content.name}
                                                logo={content.logo}
                                                description={content.description}
                                            />
                                        </div>
                                    )
                                    }
                                </SwiperSlide>
                            </div>
                        )
                    })}

                    <div className=" mt-14 ">
                        <SlideNextButton />
                        <SlidePrevButton />
                    </div>
                </Swiper>
            </div >
        </div >
    );
}

export default CriticsAndSuggestions;
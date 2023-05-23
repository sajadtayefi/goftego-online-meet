"use client"
import Btn from "../app/common/Btn";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import CommentCard from "../app/common/CommentCard";
import { CriticsAndSuggestionsItems } from "@/constant/CriticsAndSuggestionsItems";
import SlideNextButton from "../app/common/SwiperCriticsNext";
import SlidePrevButton from "../app/common/SwiperCriticsPrev";



const CriticsAndSuggestions = () => {
    return (
        <div className=" flex flex-col justify-center items-center text-white text-center  xl:mb-32" >
            <Btn
                text='نظرات مشتریان'
                textCname='text-secondary '
                cname='bg-SecendryLighter px-12 py-4 rounded-full '
            />
            <h3 className="xl:text-5xl lg:text-3xl xl:mb-5 text-[14px] px-8 leading-relaxed  pt-5 ">
                انتقادات و پیشنهادات مشتریان و سازمان هایی که از نرم افزار
                <br className="lg:flex hidden " />
                مدیریت جلسات آنلاین گفتگو استفاده کردند.
            </h3>
            <div
                className='w-full'>
                <Swiper
                    className=" w-11/12 lg:p-0 p-10 sm:p-24 md:p-24 lg:w-full lg:pt-10 mt-5 "
                    // install Swiper modules
                    spaceBetween={100}
                    slidesPerView={3}
                    initialSlide={1}
                    speed={1500}
                    pagination
                    maxBackfaceHiddenSlides={3}
                    rewind={true}
                    centeredSlides={true}
                    breakpoints={
                        {
                            // when window width is >= 320px
                            100: {
                                slidesPerView: 1,
                                spaceBetween: 100,
                            }
                            // when window width is >= 768px
                            , 1024: {
                                slidesPerView: 3,
                                spaceBetween: 60,
                            }
                            // when window width is >= 1024px
                            , 1600: {
                                slidesPerView: 3,
                                spaceBetween: 100,
                            }
                        }
                    }
                >
                    {CriticsAndSuggestionsItems.map((content, index) => {
                        return (
                            <div key={index}>
                                <SwiperSlide>
                                    {({ isActive }) => (
                                        <div className={`${isActive ? "scale-125" : "scale-100"} transition-all delay-300 ease-linear `}>
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
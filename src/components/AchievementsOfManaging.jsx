import Image from "next/image";
import AchievementCard from "./common/AchievementCard";
import { AchievementItems } from "@/constant/AchievementItems";
import { Fragment } from "react";

function AchievementsOfManaging() {
    return (
        <div className="text-white relative  container mx-auto w-full lg:w-10/12 text-right lg:text-center px-10   mb-32">
            <h2 className="2xl:text-5xl lg:text-5xl text-3xl xl:font-bold font-medium relative   ">
                <Image className="absolute 2xl:left-[30%] xl:left-[25%]  lg:left-[15%] sm:left-[35%] left-5 -z-10 -top-16 opacity-60" src={'/icons/Group 1.png'} width={100} height={100} />
                دستاوردهای مدیریت جلسات <span className="text-secondary">گفتگو</span>
            </h2>
            <p className=" py-2 lg:py-14 tracking-widest  mx-auto leading-8 text-justify lg:text-center   ">
                این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
            </p>
            <div className="flex flex-col lg:flex-row justify-between w-full   items-center">
                {AchievementItems.map((content, index) => {
                    return (
                        <Fragment key={index}>
                            <AchievementCard
                                cname={content.cname}
                                number={content.number}
                                title={content.title}
                                description={content.description}
                            />
                        </Fragment>
                    )
                })}
            </div>
        </div>
    );
}

export default AchievementsOfManaging;
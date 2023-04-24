import Image from "next/image";
import AchievementCard from "./common/AchievementCard";
import { AchievementItems } from "@/constant/AchievementItems";
import { Fragment } from "react";

function AchievementsOfManaging() {
    return (
        <div className="text-white relative  container mx-auto text-center w-8/12 mb-32">
            <Image className="absolute left-[340px] -z-10 -top-16 opacity-60" src={'/icons/Group 1.png'} width={100} height={100} />
            <h2 className="text-5xl font-bold  ">
                دستاوردهای مدیریت جلسات <span className="text-secondary">گفتگو</span>
            </h2>
            <p className=" text-sm py-10 tracking-wide  ">
                این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
            </p>
            <div className="flex flex-row justify-between  items-center">
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
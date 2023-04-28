import { WhyGoftegoItems } from "@/constant/WhyGoftegoItems";
import BenefitGoftegoCard from "./common/BenefitGoftegoCard";
import { Fragment } from "react";

function WhyGoftego() {
    return (
        <div className="text-white container flex flex-col mx-auto justify-center items-center pb-80">
            <h2 className="text-white text-5xl font-semibold mb-10">
                چرا <span className="text-secondary">گفتگو ؟؟؟</span>
            </h2>
            <h4 className="xl:text-3xl mb-4 md:text-2xl text-xl px-2">
                . امکانات و ویژگی های ماست که باعث تمایز ما شده است .
            </h4>
            <p className=" xl:w-[1390px] p-4  text-center " >
                این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
            </p>
            <div className="flex flex-col lg:flex-row mt-32 justify-center items-center lg:justify-evenly w-full">
                {WhyGoftegoItems.map((items, index) => (
                    <Fragment key={index}>
                        <BenefitGoftegoCard
                            picture={items.picture}
                            title={items.title}
                            descrption={items.descrption}
                        />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default WhyGoftego;
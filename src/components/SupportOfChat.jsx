import Image from "next/image";
import Btn from "../app/common/Btn";

const SupportOfChat = () => {
    return (
        <div className=" mx-auto relative text-white justify-center items-end flex container mb-6 xl:mb-48 lg:p-0 p-4    ">
            <div className="bg-gradient-to-r w-full from-[#4F30887A] to-[#372EA87A] flex flex-col xl:flex-row pt-10 xl:pt-20 justify-center items-center xl:items-start px-5 md:px-32 xl:px-20 rounded-xl shadow-xl shadow-slate-900     ">
                <div className=" xl:w-[60%]  flex flex-col items-start justify-start h-full ">
                    <h3 className="xl:text-4xl text-[16px]">
                        مشاوره و پشتیبانی نرم افزار <span className="text-secondary">گفتگو</span>
                    </h3>
                    <p className="text-justify mt-5 tracking-wider text-[14px]  xl:leading-8   ">
                        این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند.
                    </p>
                    <Btn
                        cname={"bg-primary rounded-xl flex justify-center items-center text-base text-[14px] xl:w-[300px] w-[186px] xl:px-10  py-4 text-white xl:mt-40 mt-5  "}
                        text={"شروع مشاوره و پشتیبانی"} />
                </div>
                <div className=" xl:w-[800px] ">
                    <Image className="m-auto xl:mr-auto mt-10" src={"/picture/Photos.png"} width={500} height={450} />
                </div>
            </div>
        </div>
    );
}

export default SupportOfChat;
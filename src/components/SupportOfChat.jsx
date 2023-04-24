import Image from "next/image";
import Btn from "./common/Btn";

function SupportOfChat() {
    return (
        <div className=" mx-auto relative text-white justify-center items-end flex bg-SupportOfChat bg-cover w-[1600px]  h-[600px] m-4 mb-48  ">
            <div className=" flex flex-row justify-center items-end container mx-auto w-[1200px]  ">
                <div className="w-7/12 flex flex-col justify-start items-start ">
                    <h3 className="text-4xl">
                        مشاوره و پشتیبانی نرم افزار <span className="text-secondary">گفتگو</span>
                    </h3>
                    <p className="text-right mt-5">
                        این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند.
                    </p>
                    <Btn
                        cname={"bg-primary rounded-xl px-10 py-4 text-white mb-20 mt-40 "}
                        text={"شروع مشاوره و پشتیبانی"} />
                </div>
                <div className=" w-1/2 mb-2 ">
                    <Image className="mr-auto" src={"/picture/Photos.png"} width={500} height={450} />
                </div>
            </div>
        </div>
    );
}

export default SupportOfChat;
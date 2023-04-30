import Image from "next/image";

function SoftwareDownloadManageOnlineMeetings() {
    return (
        <div className="relative container hidden  mx-auto lg:flex flex-col justify-center items-center text-white pb-96 ">
            <Image className="absolute z-10 xl:-top-96 bottom-0  2xl:-top-[560px] " src={"/picture/Background & Light.png"} width={1600} height={1600} />
            <div className="xl:mt-52 z-30  flex flex-col justify-center items-center text-center">
                <h2 className=" text-6xl font-semibold mb-5">
                    دانلود نرم افزار
                </h2>
                <h2 className="text-6xl font-semibold mb-5">
                    مدیریت جلسات آنلاین
                </h2>
                <h2 className="text-6xl font-semibold text-secondary">
                    گفتگو
                </h2>
                <p className="xl:w-[800px] lg:w-1/2 text-sm leading-7 mt-5 xl:mt-10 tracking-wide">
                    این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
                </p>
                <div>
                    <div className="flex flex-row justify-around items-center w-full mt-2 xl:mt-5 mb-5 ">
                        <Image className="ml-5 w-32 xl:w-48" src={"/icons/Android.png"} width={200} height={50} />
                        <Image className=" w-32 xl:w-48" src={"/icons/Windows.png"} width={200} height={50} />
                    </div>
                    <div className="flex flex-row justify-around items-center w-full mt-5 ">
                        <Image className="ml-5 w-32 xl:w-48" src={"/icons/App Store.png"} width={200} height={50} />
                        <Image className=" w-32 xl:w-48" src={"/icons/Mac.png"} width={200} height={50} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SoftwareDownloadManageOnlineMeetings;
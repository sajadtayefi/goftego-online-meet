import Image from "next/image";

function OnlineMeetingManagementSoftware() {
    return (
        <div className="flex pt-20 relative container mx-auto xl:mb-32 md:mb-20 mb-10 ">
            <Image className="absolute -z-10 -right-52 bottom-0 -top-0  "src={"/picture/bgfirst.png"} height={1000} width={1000} />
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center  ">
                <Image className="lg:mr-auto " src={"/picture/Image & Background.png"} width={600} height={600} />
                <div className="text-white w-full lg:w-1/2 px-10 lg:px-0">
                    <h2 className=" xl:font-semibold lg:px-0  xl:text-5xl lg:text-4xl text-3xl   2xl:text-6xl mb-2  leading-relaxed">
                        ‌‌‌‌‌نرم افزار آنلاین مدیریت جلسات <span className="  text-secondary">گفتگو</span>
                    </h2>
                    <p className="leading-8 text-justify text-base tracking-widest  ">
                        مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…
                    </p>
                    <div className="flex flex-row mt-10 ">
                        <Image className="" src={"/icons/Group.png"} width={150} height={150} />
                        <Image className="mx-10" src={"/icons/Bazar 1.png"} width={150} height={150} />
                        <Image src={"/icons/Myket 1.png"} width={150} height={150} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OnlineMeetingManagementSoftware;
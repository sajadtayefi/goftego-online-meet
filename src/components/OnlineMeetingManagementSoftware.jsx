import Image from "next/image";

function OnlineMeetingManagementSoftware() {
    return (
        <div className="flex pt-5 relative container mx-auto xl:mb-32  mb-16 ">
            <Image className="absolute -z-10 -right-52 bottom-0 -top-0  "src={"/picture/bgfirst.png"} height={1000} width={1000} />
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center  ">
                <Image className="lg:mr-auto " src={"/picture/Image & Background.png"} width={600} height={600} />
                <div className="text-white w-full lg:w-1/2 px-10 lg:px-0">
                    <h2 className="  xl:font-semibold lg:px-0  xl:text-5xl lg:text-4xl text-[24px] font-[500px]   2xl:text-6xl mb-2  leading-relaxed">
                        ‌‌‌‌‌نرم افزار آنلاین مدیریت جلسات <span className="  text-secondary">گفتگو</span>
                    </h2>
                    <p className="leading-4 xl:leading-8 text-justify text-[12px] tracking-wider  xl:tracking-widest  ">
                        مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…
                    </p>
                    <div className="flex flex-row xl:mt-10 mt-4 ">
                        <Image className=" w-1/3" src={"/icons/Group.png"} width={150} height={150} />
                        <Image className="md:mx-10 mx-1 w-1/3" src={"/icons/Bazar 1.png"} width={150} height={150} />
                        <Image className="w-1/3" src={"/icons/Myket 1.png"} width={150} height={150} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OnlineMeetingManagementSoftware;
import Image from "next/image";

function OnlineMeetingManagementSoftware() {
    return (
        <div className="flex relative container mx-auto pb-96 ">
            <Image className="absolute -right-52  " src={"/picture/Light For Section One.png"} height={1000} width={1000} />
            <div className="flex flex-row-reverse justify-center items-center  ">
                <Image className="mr-auto " src={"/picture/Image & Background.png"} width={600} height={600} />
                <div className="text-white w-1/2">
                    <h2 className=" font-semibold text-6xl mb-2 mt-28">
                        ‌‌‌‌‌نرم افزار آنلاین مدیریت جلسات
                    </h2>
                    <br />
                    <h2 className=" font-semibold text-6xl mb-5 text-secondary" >
                        گفتگو
                    </h2>
                    <p className="leading-8 text-justify text-base ">
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
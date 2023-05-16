import Image from "next/image";

function VideoIntroduction() {
    return (
        <div className="flex flex-col container mx-auto justify-center items-center mb-20 lg:mb-40 ">
            <h2 className="text-white lg:text-4xl text-3xl xl:text-5xl font-semibold mb-10 text-[24px]">
                ویدیو معرفی نرم افزار <span className="text-secondary">گفتگو</span>
            </h2>
            <Image className=" flex lg:hidden" src={"/picture/Video Play.svg"} width={300} height={200} />
            <Image className="hidden lg:flex" src={"/picture/Video Play.png"} width={1000} height={600} />
            <p className="text-SecendryLight text-[10px] mt-5">
                ویدیو معرفی و نحوه کار با نرم افزار مدیریت جلسات آنلاین گفتگو *
            </p>
        </div>
    );
}

export default VideoIntroduction;
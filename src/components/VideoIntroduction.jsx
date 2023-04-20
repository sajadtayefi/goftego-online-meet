import Image from "next/image";

function VideoIntroduction() {
    return (
        <div className="flex flex-col container mx-auto justify-center items-center mb-40 ">
            <h2 className="text-white text-5xl font-semibold mb-10">
                ویدیو معرفی نرم افزار <span className="text-secondary">گفتگو</span>
            </h2>
            <Image src={"/picture/Video Play.png"} width={1000} height={600} />
            <p className="text-SecendryLight text-xs mt-5">
                ویدیو معرفی و نحوه کار با نرم افزار مدیریت جلسات آنلاین گفتگو *
            </p>
        </div>
    );
}

export default VideoIntroduction;